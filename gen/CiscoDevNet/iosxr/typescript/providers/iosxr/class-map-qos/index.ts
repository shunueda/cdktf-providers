// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClassMapQosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the class-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#class_map_name ClassMapQos#class_map_name}
  */
  readonly classMapName: string;
  /**
  * Set description for this class-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#description ClassMapQos#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#device ClassMapQos#device}
  */
  readonly device?: string;
  /**
  * Match any match criteria (default)
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#match_any ClassMapQos#match_any}
  */
  readonly matchAny?: boolean | cdktf.IResolvable;
  /**
  * DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#match_dscp ClassMapQos#match_dscp}
  */
  readonly matchDscp?: string[];
  /**
  * MPLS experimental label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#match_mpls_experimental_topmost ClassMapQos#match_mpls_experimental_topmost}
  */
  readonly matchMplsExperimentalTopmost?: number[];
  /**
  * QoS Group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#match_qos_group ClassMapQos#match_qos_group}
  */
  readonly matchQosGroup?: string[];
  /**
  * Traffic Class Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#match_traffic_class ClassMapQos#match_traffic_class}
  */
  readonly matchTrafficClass?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos iosxr_class_map_qos}
*/
export class ClassMapQos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_class_map_qos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClassMapQos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClassMapQos to import
  * @param importFromId The id of the existing ClassMapQos that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClassMapQos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_class_map_qos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/class_map_qos iosxr_class_map_qos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClassMapQosConfig
  */
  public constructor(scope: Construct, id: string, config: ClassMapQosConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_class_map_qos',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classMapName = config.classMapName;
    this._description = config.description;
    this._device = config.device;
    this._matchAny = config.matchAny;
    this._matchDscp = config.matchDscp;
    this._matchMplsExperimentalTopmost = config.matchMplsExperimentalTopmost;
    this._matchQosGroup = config.matchQosGroup;
    this._matchTrafficClass = config.matchTrafficClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_map_name - computed: false, optional: false, required: true
  private _classMapName?: string; 
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }
  public set classMapName(value: string) {
    this._classMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapNameInput() {
    return this._classMapName;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_any - computed: true, optional: true, required: false
  private _matchAny?: boolean | cdktf.IResolvable; 
  public get matchAny() {
    return this.getBooleanAttribute('match_any');
  }
  public set matchAny(value: boolean | cdktf.IResolvable) {
    this._matchAny = value;
  }
  public resetMatchAny() {
    this._matchAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyInput() {
    return this._matchAny;
  }

  // match_dscp - computed: false, optional: true, required: false
  private _matchDscp?: string[]; 
  public get matchDscp() {
    return this.getListAttribute('match_dscp');
  }
  public set matchDscp(value: string[]) {
    this._matchDscp = value;
  }
  public resetMatchDscp() {
    this._matchDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDscpInput() {
    return this._matchDscp;
  }

  // match_mpls_experimental_topmost - computed: false, optional: true, required: false
  private _matchMplsExperimentalTopmost?: number[]; 
  public get matchMplsExperimentalTopmost() {
    return this.getNumberListAttribute('match_mpls_experimental_topmost');
  }
  public set matchMplsExperimentalTopmost(value: number[]) {
    this._matchMplsExperimentalTopmost = value;
  }
  public resetMatchMplsExperimentalTopmost() {
    this._matchMplsExperimentalTopmost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMplsExperimentalTopmostInput() {
    return this._matchMplsExperimentalTopmost;
  }

  // match_qos_group - computed: false, optional: true, required: false
  private _matchQosGroup?: string[]; 
  public get matchQosGroup() {
    return this.getListAttribute('match_qos_group');
  }
  public set matchQosGroup(value: string[]) {
    this._matchQosGroup = value;
  }
  public resetMatchQosGroup() {
    this._matchQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchQosGroupInput() {
    return this._matchQosGroup;
  }

  // match_traffic_class - computed: false, optional: true, required: false
  private _matchTrafficClass?: string[]; 
  public get matchTrafficClass() {
    return this.getListAttribute('match_traffic_class');
  }
  public set matchTrafficClass(value: string[]) {
    this._matchTrafficClass = value;
  }
  public resetMatchTrafficClass() {
    this._matchTrafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTrafficClassInput() {
    return this._matchTrafficClass;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      match_any: cdktf.booleanToTerraform(this._matchAny),
      match_dscp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchDscp),
      match_mpls_experimental_topmost: cdktf.listMapper(cdktf.numberToTerraform, false)(this._matchMplsExperimentalTopmost),
      match_qos_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchQosGroup),
      match_traffic_class: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchTrafficClass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_map_name: {
        value: cdktf.stringToHclTerraform(this._classMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_any: {
        value: cdktf.booleanToHclTerraform(this._matchAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_dscp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchDscp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_mpls_experimental_topmost: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._matchMplsExperimentalTopmost),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      match_qos_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchQosGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_traffic_class: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchTrafficClass),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
