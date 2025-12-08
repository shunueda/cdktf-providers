// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionHoneypotNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#allow_honeypot_access_internet ThreatDetectionHoneypotNode#allow_honeypot_access_internet}
  */
  readonly allowHoneypotAccessInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#available_probe_num ThreatDetectionHoneypotNode#available_probe_num}
  */
  readonly availableProbeNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#id ThreatDetectionHoneypotNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#node_name ThreatDetectionHoneypotNode#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#security_group_probe_ip_list ThreatDetectionHoneypotNode#security_group_probe_ip_list}
  */
  readonly securityGroupProbeIpList?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#timeouts ThreatDetectionHoneypotNode#timeouts}
  */
  readonly timeouts?: ThreatDetectionHoneypotNodeTimeouts;
}
export interface ThreatDetectionHoneypotNodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#create ThreatDetectionHoneypotNode#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#delete ThreatDetectionHoneypotNode#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#update ThreatDetectionHoneypotNode#update}
  */
  readonly update?: string;
}

export function threatDetectionHoneypotNodeTimeoutsToTerraform(struct?: ThreatDetectionHoneypotNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function threatDetectionHoneypotNodeTimeoutsToHclTerraform(struct?: ThreatDetectionHoneypotNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionHoneypotNodeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionHoneypotNodeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionHoneypotNodeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node alicloud_threat_detection_honeypot_node}
*/
export class ThreatDetectionHoneypotNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honeypot_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionHoneypotNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionHoneypotNode to import
  * @param importFromId The id of the existing ThreatDetectionHoneypotNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionHoneypotNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honeypot_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_honeypot_node alicloud_threat_detection_honeypot_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionHoneypotNodeConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionHoneypotNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honeypot_node',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowHoneypotAccessInternet = config.allowHoneypotAccessInternet;
    this._availableProbeNum = config.availableProbeNum;
    this._id = config.id;
    this._nodeName = config.nodeName;
    this._securityGroupProbeIpList = config.securityGroupProbeIpList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_honeypot_access_internet - computed: false, optional: true, required: false
  private _allowHoneypotAccessInternet?: boolean | cdktf.IResolvable; 
  public get allowHoneypotAccessInternet() {
    return this.getBooleanAttribute('allow_honeypot_access_internet');
  }
  public set allowHoneypotAccessInternet(value: boolean | cdktf.IResolvable) {
    this._allowHoneypotAccessInternet = value;
  }
  public resetAllowHoneypotAccessInternet() {
    this._allowHoneypotAccessInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHoneypotAccessInternetInput() {
    return this._allowHoneypotAccessInternet;
  }

  // available_probe_num - computed: false, optional: false, required: true
  private _availableProbeNum?: number; 
  public get availableProbeNum() {
    return this.getNumberAttribute('available_probe_num');
  }
  public set availableProbeNum(value: number) {
    this._availableProbeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableProbeNumInput() {
    return this._availableProbeNum;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // security_group_probe_ip_list - computed: false, optional: true, required: false
  private _securityGroupProbeIpList?: string[]; 
  public get securityGroupProbeIpList() {
    return this.getListAttribute('security_group_probe_ip_list');
  }
  public set securityGroupProbeIpList(value: string[]) {
    this._securityGroupProbeIpList = value;
  }
  public resetSecurityGroupProbeIpList() {
    this._securityGroupProbeIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupProbeIpListInput() {
    return this._securityGroupProbeIpList;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionHoneypotNodeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionHoneypotNodeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_honeypot_access_internet: cdktf.booleanToTerraform(this._allowHoneypotAccessInternet),
      available_probe_num: cdktf.numberToTerraform(this._availableProbeNum),
      id: cdktf.stringToTerraform(this._id),
      node_name: cdktf.stringToTerraform(this._nodeName),
      security_group_probe_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupProbeIpList),
      timeouts: threatDetectionHoneypotNodeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_honeypot_access_internet: {
        value: cdktf.booleanToHclTerraform(this._allowHoneypotAccessInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      available_probe_num: {
        value: cdktf.numberToHclTerraform(this._availableProbeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_probe_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupProbeIpList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: threatDetectionHoneypotNodeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionHoneypotNodeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
