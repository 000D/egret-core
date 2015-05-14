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
	 * @class dragonBones.ConstValues
	 * @classdesc
	 *�����˳��õĳ���
	 */
	export class ConstValues{
		/**
		 * �Ƕ�ת��Ϊ����
		 */
		public static ANGLE_TO_RADIAN:number = Math.PI / 180;
		/**
		 * ����ת��Ϊ�Ƕ�
		 */
		public static RADIAN_TO_ANGLE:number = 180 / Math.PI;
		/**
		 *����
		 */
		public static DRAGON_BONES:string = "dragonBones";
		/**
		 * �Ǽ�
		 */
		public static ARMATURE:string = "armature";
		/**
		 *Ƥ��
		 */
		public static SKIN:string = "skin";
		/**
		 * ����
		 */
		public static BONE:string = "bone";
		/**
		 * ���
		 */
		public static SLOT:string = "slot";
		/**
		 * ��ʾ����
		 */
		public static DISPLAY:string = "display";
		/**
		 * ����
		 */
		public static ANIMATION:string = "animation";
		/**
		 * ʱ����
		 */
		public static TIMELINE:string = "timeline";
		/**
		 * ֡
		 */
		public static FRAME:string = "frame";
		/**
		 * �任
		 */
		public static TRANSFORM:string = "transform";
		/**
		 * ��ɫ�任
		 */
		public static COLOR_TRANSFORM:string = "colorTransform";
		public static COLOR:string = "color";
		/**
		 * ����
		 */
		public static RECTANGLE:string = "rectangle";
		/**
		 * ��Բ
		 */
		public static ELLIPSE:string = "ellipse";
		/**
		 * ����
		 */
		public static TEXTURE_ATLAS:string = "TextureAtlas";
		/**
		 * ������
		 */
		public static SUB_TEXTURE:string = "SubTexture";
		/**
		 * ��ת
		 */
		public static A_ROTATED:string = "rotated";
		/**
		 * ֡��x����
		 */
		public static A_FRAME_X:string = "frameX";
		/**
		 * ֡��y����
		 */
		public static A_FRAME_Y:string = "frameY";
		/**
		 * ֡�Ŀ��
		 */
		public static A_FRAME_WIDTH:string = "frameWidth";
		/**
		 * ֡�ĸ߶�
		 */
		public static A_FRAME_HEIGHT:string = "frameHeight";
		/**
		 * �汾
		 */
		public static A_VERSION:string = "version";
		/**
		 * ͼƬ·��
		 */
		public static A_IMAGE_PATH:string = "imagePath";
		/**
		 * ֡����
		 */
		public static A_FRAME_RATE:string = "frameRate";
		/**
		 * ����
		 */
		public static A_NAME:string = "name";
		/**
		 * �Ƿ���ȫ��
		 */
        public static A_IS_GLOBAL:string = "isGlobal";
		/**
		 * ����
		 */
		public static A_PARENT:string = "parent";
		/**
		 * ����
		 */
		public static A_LENGTH:string = "length";
		/**
		 * ����
		 */
		public static A_TYPE:string = "type";
		/**
		 * �����¼�
		 */
		public static A_FADE_IN_TIME:string = "fadeInTime";
		/**
		 * ����ʱ��
		 */
		public static A_DURATION:string = "duration";
		/**
		 * ����
		 */
		public static A_SCALE:string = "scale";
		/**
		 * ƫ��
		 */
		public static A_OFFSET:string = "offset";
		/**
		 * ѭ��
		 */
		public static A_LOOP:string = "loop";
		/**
		 * �¼�
		 */
		public static A_EVENT:string = "event";
		/**
		 * �¼�����
		 */
		public static A_EVENT_PARAMETERS:string = "eventParameters";
		/**
		 * ����
		 */
		public static A_SOUND:string = "sound";
		/**
		 * ����
		 */
		public static A_ACTION:string = "action";
		/**
		 * ����
		 */
		public static A_HIDE:string = "hide";
		/**
		 * �Զ�����
		 */
		public static A_AUTO_TWEEN:string ="autoTween";
		/**
		 * ���仺��
		 */
		public static A_TWEEN_EASING:string = "tweenEasing";
		/**
		 * ������ת
		 */
		public static A_TWEEN_ROTATE:string = "tweenRotate";
		/**
		 * ��������
		 */
		public static A_TWEEN_SCALE:string = "tweenScale";
		/**
		 * ��ʾ�������
		 */
		public static A_DISPLAY_INDEX:string = "displayIndex";
		/**
		 * z��
		 */
		public static A_Z_ORDER:string = "z";
		/**
		 * ���ģʽ
		 */
        public static A_BLENDMODE:string = "blendMode";
		/**
		 * ���
		 */
		public static A_WIDTH:string = "width";
		/**
		 * �߶�
		 */
		public static A_HEIGHT:string = "height";
		/**
		 * �̳�����
		 */
		public static A_INHERIT_SCALE:string = "inheritScale";
		/**
		 * �̳���ת
		 */
		public static A_INHERIT_ROTATION:string = "inheritRotation";
		/**
		 * x��
		 */
		public static A_X:string = "x";
		/**
		 * y��
		 */
		public static A_Y:string = "y";
		/**
		 * x����б��
		 */
		public static A_SKEW_X:string = "skX";
		/**
		 * y����б��
		 */
		public static A_SKEW_Y:string = "skY";
		/**
		 * x��������
		 */
		public static A_SCALE_X:string = "scX";
		/**
		 * y��������
		 */
		public static A_SCALE_Y:string = "scY";
		/**
		 * ����x����
		 */
		public static A_PIVOT_X:string = "pX";
		/**
		 * ����y����
		 */
		public static A_PIVOT_Y:string = "pY";
		/**
		 * ͸���ȵ�ƫ��
		 */
		public static A_ALPHA_OFFSET:string = "aO";
		/**
		 * ��ɫ��ƫ��
		 */
		public static A_RED_OFFSET:string = "rO";
		/**
		 * ��ɫ��ƫ��
		 */
		public static A_GREEN_OFFSET:string = "gO";
		/**
		 * ��ɫ��ƫ��
		 */
		public static A_BLUE_OFFSET:string = "bO";
		/**
		 * ͸���ȵı���
		 */
		public static A_ALPHA_MULTIPLIER:string = "aM";
		/**
		 * ��ɫ�ı���
		 */
		public static A_RED_MULTIPLIER:string = "rM";
		/**
		 * ��ɫ�ı���
		 */
		public static A_GREEN_MULTIPLIER:string = "gM";
		/**
		 * ��ɫ�ı���
		 */
		public static A_BLUE_MULTIPLIER:string = "bM";
		/**
		 * x�������ŵ�ƫ��
		 */
		public static A_SCALE_X_OFFSET:string = "scXOffset";
		/**
		 * y�����ƫ��
		 */
		public static A_SCALE_Y_OFFSET:string = "scYOffset";
		/**
		 * ����ģʽ
		 */
		public static A_SCALE_MODE:string = "scaleMode";
		/**
		 * ��ת����
		 */
		public static A_FIXED_ROTATION:string = "fixedRotation";
	}
}