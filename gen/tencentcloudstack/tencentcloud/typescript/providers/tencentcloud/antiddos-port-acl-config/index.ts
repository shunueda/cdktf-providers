// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosPortAclConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#id AntiddosPortAclConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceIdList.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#instance_id AntiddosPortAclConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * acl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#acl_config AntiddosPortAclConfig#acl_config}
  */
  readonly aclConfig: AntiddosPortAclConfigAclConfig;
}
export interface AntiddosPortAclConfigAclConfig {
  /**
  * Action, can take values: drop, transmit, forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#action AntiddosPortAclConfig#action}
  */
  readonly action: string;
  /**
  * end from port, with a range of 0~65535 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#d_port_end AntiddosPortAclConfig#d_port_end}
  */
  readonly dPortEnd: number;
  /**
  * Starting from port, with a range of 0~65535 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#d_port_start AntiddosPortAclConfig#d_port_start}
  */
  readonly dPortStart: number;
  /**
  * Protocol type, can take TCP, udp, all values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#forward_protocol AntiddosPortAclConfig#forward_protocol}
  */
  readonly forwardProtocol: string;
  /**
  * The policy priority, the smaller the number, the higher the level, and the higher the matching of the rule, with values ranging from 1 to 1000. Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#priority AntiddosPortAclConfig#priority}
  */
  readonly priority?: number;
  /**
  * end from the source port, with a value range of 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#s_port_end AntiddosPortAclConfig#s_port_end}
  */
  readonly sPortEnd: number;
  /**
  * Starting from the source port, with a value range of 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#s_port_start AntiddosPortAclConfig#s_port_start}
  */
  readonly sPortStart: number;
}

export function antiddosPortAclConfigAclConfigToTerraform(struct?: AntiddosPortAclConfigAclConfigOutputReference | AntiddosPortAclConfigAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    d_port_end: cdktf.numberToTerraform(struct!.dPortEnd),
    d_port_start: cdktf.numberToTerraform(struct!.dPortStart),
    forward_protocol: cdktf.stringToTerraform(struct!.forwardProtocol),
    priority: cdktf.numberToTerraform(struct!.priority),
    s_port_end: cdktf.numberToTerraform(struct!.sPortEnd),
    s_port_start: cdktf.numberToTerraform(struct!.sPortStart),
  }
}


export function antiddosPortAclConfigAclConfigToHclTerraform(struct?: AntiddosPortAclConfigAclConfigOutputReference | AntiddosPortAclConfigAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_protocol: {
      value: cdktf.stringToHclTerraform(struct!.forwardProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_port_end: {
      value: cdktf.numberToHclTerraform(struct!.sPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_port_start: {
      value: cdktf.numberToHclTerraform(struct!.sPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosPortAclConfigAclConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosPortAclConfigAclConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortEnd = this._dPortEnd;
    }
    if (this._dPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortStart = this._dPortStart;
    }
    if (this._forwardProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProtocol = this._forwardProtocol;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortEnd = this._sPortEnd;
    }
    if (this._sPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortStart = this._sPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosPortAclConfigAclConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._dPortEnd = undefined;
      this._dPortStart = undefined;
      this._forwardProtocol = undefined;
      this._priority = undefined;
      this._sPortEnd = undefined;
      this._sPortStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._dPortEnd = value.dPortEnd;
      this._dPortStart = value.dPortStart;
      this._forwardProtocol = value.forwardProtocol;
      this._priority = value.priority;
      this._sPortEnd = value.sPortEnd;
      this._sPortStart = value.sPortStart;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // d_port_end - computed: false, optional: false, required: true
  private _dPortEnd?: number; 
  public get dPortEnd() {
    return this.getNumberAttribute('d_port_end');
  }
  public set dPortEnd(value: number) {
    this._dPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortEndInput() {
    return this._dPortEnd;
  }

  // d_port_start - computed: false, optional: false, required: true
  private _dPortStart?: number; 
  public get dPortStart() {
    return this.getNumberAttribute('d_port_start');
  }
  public set dPortStart(value: number) {
    this._dPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortStartInput() {
    return this._dPortStart;
  }

  // forward_protocol - computed: false, optional: false, required: true
  private _forwardProtocol?: string; 
  public get forwardProtocol() {
    return this.getStringAttribute('forward_protocol');
  }
  public set forwardProtocol(value: string) {
    this._forwardProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProtocolInput() {
    return this._forwardProtocol;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // s_port_end - computed: false, optional: false, required: true
  private _sPortEnd?: number; 
  public get sPortEnd() {
    return this.getNumberAttribute('s_port_end');
  }
  public set sPortEnd(value: number) {
    this._sPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortEndInput() {
    return this._sPortEnd;
  }

  // s_port_start - computed: false, optional: false, required: true
  private _sPortStart?: number; 
  public get sPortStart() {
    return this.getNumberAttribute('s_port_start');
  }
  public set sPortStart(value: number) {
    this._sPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortStartInput() {
    return this._sPortStart;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config tencentcloud_antiddos_port_acl_config}
*/
export class AntiddosPortAclConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_port_acl_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosPortAclConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosPortAclConfig to import
  * @param importFromId The id of the existing AntiddosPortAclConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosPortAclConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_port_acl_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_port_acl_config tencentcloud_antiddos_port_acl_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosPortAclConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosPortAclConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_port_acl_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._instanceId = config.instanceId;
    this._aclConfig.internalValue = config.aclConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // acl_config - computed: false, optional: false, required: true
  private _aclConfig = new AntiddosPortAclConfigAclConfigOutputReference(this, "acl_config");
  public get aclConfig() {
    return this._aclConfig;
  }
  public putAclConfig(value: AntiddosPortAclConfigAclConfig) {
    this._aclConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigInput() {
    return this._aclConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      acl_config: antiddosPortAclConfigAclConfigToTerraform(this._aclConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_config: {
        value: antiddosPortAclConfigAclConfigToHclTerraform(this._aclConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosPortAclConfigAclConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
