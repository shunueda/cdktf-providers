// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmPrometheusAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#id TcmPrometheusAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mesh ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#mesh_id TcmPrometheusAttachment#mesh_id}
  */
  readonly meshId: string;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#prometheus TcmPrometheusAttachment#prometheus}
  */
  readonly prometheus: TcmPrometheusAttachmentPrometheus;
}
export interface TcmPrometheusAttachmentPrometheusCustomProm {
  /**
  * Authentication type of the prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#auth_type TcmPrometheusAttachment#auth_type}
  */
  readonly authType: string;
  /**
  * Whether it is public address, default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#is_public_addr TcmPrometheusAttachment#is_public_addr}
  */
  readonly isPublicAddr?: boolean | cdktf.IResolvable;
  /**
  * Password of the prometheus, used in basic authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#password TcmPrometheusAttachment#password}
  */
  readonly password?: string;
  /**
  * Url of the prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#url TcmPrometheusAttachment#url}
  */
  readonly url: string;
  /**
  * Username of the prometheus, used in basic authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#username TcmPrometheusAttachment#username}
  */
  readonly username?: string;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#vpc_id TcmPrometheusAttachment#vpc_id}
  */
  readonly vpcId?: string;
}

export function tcmPrometheusAttachmentPrometheusCustomPromToTerraform(struct?: TcmPrometheusAttachmentPrometheusCustomPromOutputReference | TcmPrometheusAttachmentPrometheusCustomProm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    is_public_addr: cdktf.booleanToTerraform(struct!.isPublicAddr),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function tcmPrometheusAttachmentPrometheusCustomPromToHclTerraform(struct?: TcmPrometheusAttachmentPrometheusCustomPromOutputReference | TcmPrometheusAttachmentPrometheusCustomProm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public_addr: {
      value: cdktf.booleanToHclTerraform(struct!.isPublicAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmPrometheusAttachmentPrometheusCustomPromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmPrometheusAttachmentPrometheusCustomProm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._isPublicAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublicAddr = this._isPublicAddr;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmPrometheusAttachmentPrometheusCustomProm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._isPublicAddr = undefined;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._isPublicAddr = value.isPublicAddr;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
      this._vpcId = value.vpcId;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // is_public_addr - computed: true, optional: true, required: false
  private _isPublicAddr?: boolean | cdktf.IResolvable; 
  public get isPublicAddr() {
    return this.getBooleanAttribute('is_public_addr');
  }
  public set isPublicAddr(value: boolean | cdktf.IResolvable) {
    this._isPublicAddr = value;
  }
  public resetIsPublicAddr() {
    this._isPublicAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicAddrInput() {
    return this._isPublicAddr;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TcmPrometheusAttachmentPrometheus {
  /**
  * Existed TMP id, auto create TMP if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#instance_id TcmPrometheusAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Region for TMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#region TcmPrometheusAttachment#region}
  */
  readonly region?: string;
  /**
  * Subnet id for TMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#subnet_id TcmPrometheusAttachment#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Vpc id for TMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#vpc_id TcmPrometheusAttachment#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * custom_prom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#custom_prom TcmPrometheusAttachment#custom_prom}
  */
  readonly customProm?: TcmPrometheusAttachmentPrometheusCustomProm;
}

export function tcmPrometheusAttachmentPrometheusToTerraform(struct?: TcmPrometheusAttachmentPrometheusOutputReference | TcmPrometheusAttachmentPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    custom_prom: tcmPrometheusAttachmentPrometheusCustomPromToTerraform(struct!.customProm),
  }
}


export function tcmPrometheusAttachmentPrometheusToHclTerraform(struct?: TcmPrometheusAttachmentPrometheusOutputReference | TcmPrometheusAttachmentPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_prom: {
      value: tcmPrometheusAttachmentPrometheusCustomPromToHclTerraform(struct!.customProm),
      isBlock: true,
      type: "list",
      storageClassType: "TcmPrometheusAttachmentPrometheusCustomPromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmPrometheusAttachmentPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmPrometheusAttachmentPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._customProm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProm = this._customProm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmPrometheusAttachmentPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._region = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
      this._customProm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._region = value.region;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
      this._customProm.internalValue = value.customProm;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // custom_prom - computed: false, optional: true, required: false
  private _customProm = new TcmPrometheusAttachmentPrometheusCustomPromOutputReference(this, "custom_prom");
  public get customProm() {
    return this._customProm;
  }
  public putCustomProm(value: TcmPrometheusAttachmentPrometheusCustomProm) {
    this._customProm.internalValue = value;
  }
  public resetCustomProm() {
    this._customProm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPromInput() {
    return this._customProm.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment tencentcloud_tcm_prometheus_attachment}
*/
export class TcmPrometheusAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcm_prometheus_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmPrometheusAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmPrometheusAttachment to import
  * @param importFromId The id of the existing TcmPrometheusAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmPrometheusAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcm_prometheus_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tcm_prometheus_attachment tencentcloud_tcm_prometheus_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmPrometheusAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: TcmPrometheusAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcm_prometheus_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._meshId = config.meshId;
    this._prometheus.internalValue = config.prometheus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mesh_id - computed: false, optional: false, required: true
  private _meshId?: string; 
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }
  public set meshId(value: string) {
    this._meshId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
  }

  // prometheus - computed: false, optional: false, required: true
  private _prometheus = new TcmPrometheusAttachmentPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: TcmPrometheusAttachmentPrometheus) {
    this._prometheus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mesh_id: cdktf.stringToTerraform(this._meshId),
      prometheus: tcmPrometheusAttachmentPrometheusToTerraform(this._prometheus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_id: {
        value: cdktf.stringToHclTerraform(this._meshId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus: {
        value: tcmPrometheusAttachmentPrometheusToHclTerraform(this._prometheus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcmPrometheusAttachmentPrometheusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
