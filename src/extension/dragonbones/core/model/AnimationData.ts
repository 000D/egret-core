//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


module dragonBones {

	/**
	 * @class dragonbones.AnimationData
	 * @extends dragonbones.Timeline
	 * @classdesc
	 * ���涯������
	 */
	export class AnimationData extends Timeline{
		/**
		 * ����������
		 * @member {string} dragonBones.AnimationData#name
		 */
		public name:string;
		/**
		 * ������֡�ʣ���ʾÿһ���Ӳ��Ŷ���֡
		 * @member {number} dragonBones.AnimationData#frameRate
		 */
		public frameRate:number = 0;
		/**
		 * ��������ʱ�䣬��ʾ�������������ɵ����������Ҫ��ʱ��
		 * @member {number} dragonBones.AnimationData#fadeTime
		 */
		public fadeTime:number;
		/**
		 * 	���Ŵ��� 0Ϊһֱ���ţ�Ĭ��Ϊ0
		 * @member {number} dragonBones.AnimationData#playTimes
		 */
		public playTimes:number = 0;
		/**
		 * �����Ļ���������ȡֵ��Χ��[-1,2],����[-1, 0)��ʾ������(0, 1]��ʾ����(1, 2]��ʾ����������0��ʾ�����������Խ���
		 * ��������ᱻ֡�����е�tweenEasing����
		 * @member {number} dragonBones.AnimationData#tweenEasing
		 */
		public tweenEasing:number;
		/**
		 * �Ƿ���������Ĭ����true�����ǿ�������
		 * @member {boolean} dragonBones.AnimationData#autoTween
		 */
		public autoTween:boolean;
		/**
		 * ���һ֡������֡��
		 * @member {number} dragonBones.AnimationData#lastFrameDuration
		 */
		public lastFrameDuration:number = 0;
		
		public hideTimelineNameMap:Array<string>;
		
		private _timelineList:Array<TransformTimeline>;
		/**
		 * ʱ�����б�
		 * @returns {Array<TransformTimeline>}
		 */
		public get timelineList():Array<TransformTimeline>{
			return this._timelineList;
		}
		private _slotTimelineList:Array<SlotTimeline>;
		public get slotTimelineList():Array<SlotTimeline>{
			return this._slotTimelineList;
		}
		
		/**
		 * ����һ��AnimationDataʵ��
		 */
		public constructor(){
			super();
			this.fadeTime = 0;
			this.playTimes = 0;
			this.autoTween = true;
			this.tweenEasing = NaN;
			this.hideTimelineNameMap = [];
			
			this._timelineList = [];
			this._slotTimelineList = [];
		}

		/**
		 * �ͷ���Դ
		 */
		public dispose():void{
			super.dispose();
			this.hideTimelineNameMap = null;

            for(var key in this._timelineList)
            {
                var timeline:TransformTimeline = this._timelineList[key];
                timeline.dispose();
            }

			this._timelineList = null;
			for(var slotKey in this._slotTimelineList)
			{
				var slotTimeline:SlotTimeline =  this._slotTimelineList[slotKey];
				slotTimeline.dispose();
			}
			this._slotTimelineList = null;
		}

		/**
		 * ����ʱ��������ֻ�ȡʱ��������
		 * @param timelineName ʱ���������
		 * @returns {*} ʱ��������
		 */
		public getTimeline(timelineName:string):TransformTimeline{
			var i:number = this._timelineList.length;
			while(i --){
				if(this._timelineList[i].name == timelineName){
					return this._timelineList[i];
				}
			}
			return null;
		}

		/**
		 * ���һ��ʱ��������
		 * @param timeline ��Ҫ����ӵ�ʱ��������
		 */
		public addTimeline(timeline:TransformTimeline):void{
			if(!timeline){
				throw new Error();
			}
			
			if(this._timelineList.indexOf(timeline) < 0){
				this._timelineList[this._timelineList.length] = timeline;
			}
		}

		public getSlotTimeline(timelineName:string):SlotTimeline{
			var i:number = this._slotTimelineList.length;
			while(i --){
				if(this._slotTimelineList[i].name == timelineName){
					return this._slotTimelineList[i];
				}
			}
			return null;
		}

		public addSlotTimeline(timeline:SlotTimeline):void{
			if(!timeline){
				throw new Error();
			}

			if(this._slotTimelineList.indexOf(timeline) < 0){
				this._slotTimelineList[this._slotTimelineList.length] = timeline;
			}
		}
	}
}