// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#camera_redirect EcdPolicyGroup#camera_redirect}
  */
  readonly cameraRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#clipboard EcdPolicyGroup#clipboard}
  */
  readonly clipboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#domain_list EcdPolicyGroup#domain_list}
  */
  readonly domainList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#html_access EcdPolicyGroup#html_access}
  */
  readonly htmlAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#html_file_transfer EcdPolicyGroup#html_file_transfer}
  */
  readonly htmlFileTransfer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#id EcdPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#local_drive EcdPolicyGroup#local_drive}
  */
  readonly localDrive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#policy_group_name EcdPolicyGroup#policy_group_name}
  */
  readonly policyGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#recording EcdPolicyGroup#recording}
  */
  readonly recording?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#recording_end_time EcdPolicyGroup#recording_end_time}
  */
  readonly recordingEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#recording_expires EcdPolicyGroup#recording_expires}
  */
  readonly recordingExpires?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#recording_fps EcdPolicyGroup#recording_fps}
  */
  readonly recordingFps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#recording_start_time EcdPolicyGroup#recording_start_time}
  */
  readonly recordingStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#usb_redirect EcdPolicyGroup#usb_redirect}
  */
  readonly usbRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#visual_quality EcdPolicyGroup#visual_quality}
  */
  readonly visualQuality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#watermark EcdPolicyGroup#watermark}
  */
  readonly watermark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#watermark_transparency EcdPolicyGroup#watermark_transparency}
  */
  readonly watermarkTransparency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#watermark_type EcdPolicyGroup#watermark_type}
  */
  readonly watermarkType?: string;
  /**
  * authorize_access_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#authorize_access_policy_rules EcdPolicyGroup#authorize_access_policy_rules}
  */
  readonly authorizeAccessPolicyRules?: EcdPolicyGroupAuthorizeAccessPolicyRules[] | cdktf.IResolvable;
  /**
  * authorize_security_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#authorize_security_policy_rules EcdPolicyGroup#authorize_security_policy_rules}
  */
  readonly authorizeSecurityPolicyRules?: EcdPolicyGroupAuthorizeSecurityPolicyRules[] | cdktf.IResolvable;
}
export interface EcdPolicyGroupAuthorizeAccessPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#cidr_ip EcdPolicyGroup#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#description EcdPolicyGroup#description}
  */
  readonly description?: string;
}

export function ecdPolicyGroupAuthorizeAccessPolicyRulesToTerraform(struct?: EcdPolicyGroupAuthorizeAccessPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function ecdPolicyGroupAuthorizeAccessPolicyRulesToHclTerraform(struct?: EcdPolicyGroupAuthorizeAccessPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcdPolicyGroupAuthorizeAccessPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcdPolicyGroupAuthorizeAccessPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcdPolicyGroupAuthorizeAccessPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._description = value.description;
    }
  }

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class EcdPolicyGroupAuthorizeAccessPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : EcdPolicyGroupAuthorizeAccessPolicyRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcdPolicyGroupAuthorizeAccessPolicyRulesOutputReference {
    return new EcdPolicyGroupAuthorizeAccessPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcdPolicyGroupAuthorizeSecurityPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#cidr_ip EcdPolicyGroup#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#description EcdPolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#ip_protocol EcdPolicyGroup#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#policy EcdPolicyGroup#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#port_range EcdPolicyGroup#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#priority EcdPolicyGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#type EcdPolicyGroup#type}
  */
  readonly type?: string;
}

export function ecdPolicyGroupAuthorizeSecurityPolicyRulesToTerraform(struct?: EcdPolicyGroupAuthorizeSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    description: cdktf.stringToTerraform(struct!.description),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    policy: cdktf.stringToTerraform(struct!.policy),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    priority: cdktf.stringToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecdPolicyGroupAuthorizeSecurityPolicyRulesToHclTerraform(struct?: EcdPolicyGroupAuthorizeSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcdPolicyGroupAuthorizeSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcdPolicyGroupAuthorizeSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcdPolicyGroupAuthorizeSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._description = undefined;
      this._ipProtocol = undefined;
      this._policy = undefined;
      this._portRange = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._description = value.description;
      this._ipProtocol = value.ipProtocol;
      this._policy = value.policy;
      this._portRange = value.portRange;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EcdPolicyGroupAuthorizeSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : EcdPolicyGroupAuthorizeSecurityPolicyRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcdPolicyGroupAuthorizeSecurityPolicyRulesOutputReference {
    return new EcdPolicyGroupAuthorizeSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group alicloud_ecd_policy_group}
*/
export class EcdPolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdPolicyGroup to import
  * @param importFromId The id of the existing EcdPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_policy_group alicloud_ecd_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdPolicyGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcdPolicyGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_policy_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cameraRedirect = config.cameraRedirect;
    this._clipboard = config.clipboard;
    this._domainList = config.domainList;
    this._htmlAccess = config.htmlAccess;
    this._htmlFileTransfer = config.htmlFileTransfer;
    this._id = config.id;
    this._localDrive = config.localDrive;
    this._policyGroupName = config.policyGroupName;
    this._recording = config.recording;
    this._recordingEndTime = config.recordingEndTime;
    this._recordingExpires = config.recordingExpires;
    this._recordingFps = config.recordingFps;
    this._recordingStartTime = config.recordingStartTime;
    this._usbRedirect = config.usbRedirect;
    this._visualQuality = config.visualQuality;
    this._watermark = config.watermark;
    this._watermarkTransparency = config.watermarkTransparency;
    this._watermarkType = config.watermarkType;
    this._authorizeAccessPolicyRules.internalValue = config.authorizeAccessPolicyRules;
    this._authorizeSecurityPolicyRules.internalValue = config.authorizeSecurityPolicyRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // camera_redirect - computed: true, optional: true, required: false
  private _cameraRedirect?: string; 
  public get cameraRedirect() {
    return this.getStringAttribute('camera_redirect');
  }
  public set cameraRedirect(value: string) {
    this._cameraRedirect = value;
  }
  public resetCameraRedirect() {
    this._cameraRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cameraRedirectInput() {
    return this._cameraRedirect;
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList?: string; 
  public get domainList() {
    return this.getStringAttribute('domain_list');
  }
  public set domainList(value: string) {
    this._domainList = value;
  }
  public resetDomainList() {
    this._domainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList;
  }

  // html_access - computed: true, optional: true, required: false
  private _htmlAccess?: string; 
  public get htmlAccess() {
    return this.getStringAttribute('html_access');
  }
  public set htmlAccess(value: string) {
    this._htmlAccess = value;
  }
  public resetHtmlAccess() {
    this._htmlAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlAccessInput() {
    return this._htmlAccess;
  }

  // html_file_transfer - computed: true, optional: true, required: false
  private _htmlFileTransfer?: string; 
  public get htmlFileTransfer() {
    return this.getStringAttribute('html_file_transfer');
  }
  public set htmlFileTransfer(value: string) {
    this._htmlFileTransfer = value;
  }
  public resetHtmlFileTransfer() {
    this._htmlFileTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlFileTransferInput() {
    return this._htmlFileTransfer;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_drive - computed: true, optional: true, required: false
  private _localDrive?: string; 
  public get localDrive() {
    return this.getStringAttribute('local_drive');
  }
  public set localDrive(value: string) {
    this._localDrive = value;
  }
  public resetLocalDrive() {
    this._localDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDriveInput() {
    return this._localDrive;
  }

  // policy_group_name - computed: false, optional: true, required: false
  private _policyGroupName?: string; 
  public get policyGroupName() {
    return this.getStringAttribute('policy_group_name');
  }
  public set policyGroupName(value: string) {
    this._policyGroupName = value;
  }
  public resetPolicyGroupName() {
    this._policyGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupNameInput() {
    return this._policyGroupName;
  }

  // recording - computed: true, optional: true, required: false
  private _recording?: string; 
  public get recording() {
    return this.getStringAttribute('recording');
  }
  public set recording(value: string) {
    this._recording = value;
  }
  public resetRecording() {
    this._recording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingInput() {
    return this._recording;
  }

  // recording_end_time - computed: false, optional: true, required: false
  private _recordingEndTime?: string; 
  public get recordingEndTime() {
    return this.getStringAttribute('recording_end_time');
  }
  public set recordingEndTime(value: string) {
    this._recordingEndTime = value;
  }
  public resetRecordingEndTime() {
    this._recordingEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingEndTimeInput() {
    return this._recordingEndTime;
  }

  // recording_expires - computed: true, optional: true, required: false
  private _recordingExpires?: number; 
  public get recordingExpires() {
    return this.getNumberAttribute('recording_expires');
  }
  public set recordingExpires(value: number) {
    this._recordingExpires = value;
  }
  public resetRecordingExpires() {
    this._recordingExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingExpiresInput() {
    return this._recordingExpires;
  }

  // recording_fps - computed: true, optional: true, required: false
  private _recordingFps?: number; 
  public get recordingFps() {
    return this.getNumberAttribute('recording_fps');
  }
  public set recordingFps(value: number) {
    this._recordingFps = value;
  }
  public resetRecordingFps() {
    this._recordingFps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingFpsInput() {
    return this._recordingFps;
  }

  // recording_start_time - computed: false, optional: true, required: false
  private _recordingStartTime?: string; 
  public get recordingStartTime() {
    return this.getStringAttribute('recording_start_time');
  }
  public set recordingStartTime(value: string) {
    this._recordingStartTime = value;
  }
  public resetRecordingStartTime() {
    this._recordingStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStartTimeInput() {
    return this._recordingStartTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // usb_redirect - computed: true, optional: true, required: false
  private _usbRedirect?: string; 
  public get usbRedirect() {
    return this.getStringAttribute('usb_redirect');
  }
  public set usbRedirect(value: string) {
    this._usbRedirect = value;
  }
  public resetUsbRedirect() {
    this._usbRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbRedirectInput() {
    return this._usbRedirect;
  }

  // visual_quality - computed: true, optional: true, required: false
  private _visualQuality?: string; 
  public get visualQuality() {
    return this.getStringAttribute('visual_quality');
  }
  public set visualQuality(value: string) {
    this._visualQuality = value;
  }
  public resetVisualQuality() {
    this._visualQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualQualityInput() {
    return this._visualQuality;
  }

  // watermark - computed: true, optional: true, required: false
  private _watermark?: string; 
  public get watermark() {
    return this.getStringAttribute('watermark');
  }
  public set watermark(value: string) {
    this._watermark = value;
  }
  public resetWatermark() {
    this._watermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkInput() {
    return this._watermark;
  }

  // watermark_transparency - computed: true, optional: true, required: false
  private _watermarkTransparency?: string; 
  public get watermarkTransparency() {
    return this.getStringAttribute('watermark_transparency');
  }
  public set watermarkTransparency(value: string) {
    this._watermarkTransparency = value;
  }
  public resetWatermarkTransparency() {
    this._watermarkTransparency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkTransparencyInput() {
    return this._watermarkTransparency;
  }

  // watermark_type - computed: true, optional: true, required: false
  private _watermarkType?: string; 
  public get watermarkType() {
    return this.getStringAttribute('watermark_type');
  }
  public set watermarkType(value: string) {
    this._watermarkType = value;
  }
  public resetWatermarkType() {
    this._watermarkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkTypeInput() {
    return this._watermarkType;
  }

  // authorize_access_policy_rules - computed: false, optional: true, required: false
  private _authorizeAccessPolicyRules = new EcdPolicyGroupAuthorizeAccessPolicyRulesList(this, "authorize_access_policy_rules", true);
  public get authorizeAccessPolicyRules() {
    return this._authorizeAccessPolicyRules;
  }
  public putAuthorizeAccessPolicyRules(value: EcdPolicyGroupAuthorizeAccessPolicyRules[] | cdktf.IResolvable) {
    this._authorizeAccessPolicyRules.internalValue = value;
  }
  public resetAuthorizeAccessPolicyRules() {
    this._authorizeAccessPolicyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeAccessPolicyRulesInput() {
    return this._authorizeAccessPolicyRules.internalValue;
  }

  // authorize_security_policy_rules - computed: false, optional: true, required: false
  private _authorizeSecurityPolicyRules = new EcdPolicyGroupAuthorizeSecurityPolicyRulesList(this, "authorize_security_policy_rules", true);
  public get authorizeSecurityPolicyRules() {
    return this._authorizeSecurityPolicyRules;
  }
  public putAuthorizeSecurityPolicyRules(value: EcdPolicyGroupAuthorizeSecurityPolicyRules[] | cdktf.IResolvable) {
    this._authorizeSecurityPolicyRules.internalValue = value;
  }
  public resetAuthorizeSecurityPolicyRules() {
    this._authorizeSecurityPolicyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeSecurityPolicyRulesInput() {
    return this._authorizeSecurityPolicyRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      camera_redirect: cdktf.stringToTerraform(this._cameraRedirect),
      clipboard: cdktf.stringToTerraform(this._clipboard),
      domain_list: cdktf.stringToTerraform(this._domainList),
      html_access: cdktf.stringToTerraform(this._htmlAccess),
      html_file_transfer: cdktf.stringToTerraform(this._htmlFileTransfer),
      id: cdktf.stringToTerraform(this._id),
      local_drive: cdktf.stringToTerraform(this._localDrive),
      policy_group_name: cdktf.stringToTerraform(this._policyGroupName),
      recording: cdktf.stringToTerraform(this._recording),
      recording_end_time: cdktf.stringToTerraform(this._recordingEndTime),
      recording_expires: cdktf.numberToTerraform(this._recordingExpires),
      recording_fps: cdktf.numberToTerraform(this._recordingFps),
      recording_start_time: cdktf.stringToTerraform(this._recordingStartTime),
      usb_redirect: cdktf.stringToTerraform(this._usbRedirect),
      visual_quality: cdktf.stringToTerraform(this._visualQuality),
      watermark: cdktf.stringToTerraform(this._watermark),
      watermark_transparency: cdktf.stringToTerraform(this._watermarkTransparency),
      watermark_type: cdktf.stringToTerraform(this._watermarkType),
      authorize_access_policy_rules: cdktf.listMapper(ecdPolicyGroupAuthorizeAccessPolicyRulesToTerraform, true)(this._authorizeAccessPolicyRules.internalValue),
      authorize_security_policy_rules: cdktf.listMapper(ecdPolicyGroupAuthorizeSecurityPolicyRulesToTerraform, true)(this._authorizeSecurityPolicyRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      camera_redirect: {
        value: cdktf.stringToHclTerraform(this._cameraRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clipboard: {
        value: cdktf.stringToHclTerraform(this._clipboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list: {
        value: cdktf.stringToHclTerraform(this._domainList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      html_access: {
        value: cdktf.stringToHclTerraform(this._htmlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      html_file_transfer: {
        value: cdktf.stringToHclTerraform(this._htmlFileTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_drive: {
        value: cdktf.stringToHclTerraform(this._localDrive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group_name: {
        value: cdktf.stringToHclTerraform(this._policyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording: {
        value: cdktf.stringToHclTerraform(this._recording),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_end_time: {
        value: cdktf.stringToHclTerraform(this._recordingEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_expires: {
        value: cdktf.numberToHclTerraform(this._recordingExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recording_fps: {
        value: cdktf.numberToHclTerraform(this._recordingFps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recording_start_time: {
        value: cdktf.stringToHclTerraform(this._recordingStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_redirect: {
        value: cdktf.stringToHclTerraform(this._usbRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visual_quality: {
        value: cdktf.stringToHclTerraform(this._visualQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark: {
        value: cdktf.stringToHclTerraform(this._watermark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark_transparency: {
        value: cdktf.stringToHclTerraform(this._watermarkTransparency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watermark_type: {
        value: cdktf.stringToHclTerraform(this._watermarkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorize_access_policy_rules: {
        value: cdktf.listMapperHcl(ecdPolicyGroupAuthorizeAccessPolicyRulesToHclTerraform, true)(this._authorizeAccessPolicyRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcdPolicyGroupAuthorizeAccessPolicyRulesList",
      },
      authorize_security_policy_rules: {
        value: cdktf.listMapperHcl(ecdPolicyGroupAuthorizeSecurityPolicyRulesToHclTerraform, true)(this._authorizeSecurityPolicyRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcdPolicyGroupAuthorizeSecurityPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
