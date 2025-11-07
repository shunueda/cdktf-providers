// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CedgeMulticastFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#description CedgeMulticastFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#device_types CedgeMulticastFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Replicator is local to this device
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#local_replicator CedgeMulticastFeatureTemplate#local_replicator}
  */
  readonly localReplicator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#local_replicator_variable CedgeMulticastFeatureTemplate#local_replicator_variable}
  */
  readonly localReplicatorVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#name CedgeMulticastFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Shortest Path Tree (SPT) Only Mode
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#spt_only CedgeMulticastFeatureTemplate#spt_only}
  */
  readonly sptOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#spt_only_variable CedgeMulticastFeatureTemplate#spt_only_variable}
  */
  readonly sptOnlyVariable?: string;
  /**
  * Set number of joins per group the router supports
  *   - Range: `0`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#threshold CedgeMulticastFeatureTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#threshold_variable CedgeMulticastFeatureTemplate#threshold_variable}
  */
  readonly thresholdVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template sdwan_cedge_multicast_feature_template}
*/
export class CedgeMulticastFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_multicast_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CedgeMulticastFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CedgeMulticastFeatureTemplate to import
  * @param importFromId The id of the existing CedgeMulticastFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CedgeMulticastFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_multicast_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_multicast_feature_template sdwan_cedge_multicast_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CedgeMulticastFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CedgeMulticastFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_multicast_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._localReplicator = config.localReplicator;
    this._localReplicatorVariable = config.localReplicatorVariable;
    this._name = config.name;
    this._sptOnly = config.sptOnly;
    this._sptOnlyVariable = config.sptOnlyVariable;
    this._threshold = config.threshold;
    this._thresholdVariable = config.thresholdVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_replicator - computed: false, optional: true, required: false
  private _localReplicator?: boolean | cdktf.IResolvable; 
  public get localReplicator() {
    return this.getBooleanAttribute('local_replicator');
  }
  public set localReplicator(value: boolean | cdktf.IResolvable) {
    this._localReplicator = value;
  }
  public resetLocalReplicator() {
    this._localReplicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorInput() {
    return this._localReplicator;
  }

  // local_replicator_variable - computed: false, optional: true, required: false
  private _localReplicatorVariable?: string; 
  public get localReplicatorVariable() {
    return this.getStringAttribute('local_replicator_variable');
  }
  public set localReplicatorVariable(value: string) {
    this._localReplicatorVariable = value;
  }
  public resetLocalReplicatorVariable() {
    this._localReplicatorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorVariableInput() {
    return this._localReplicatorVariable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // spt_only - computed: false, optional: true, required: false
  private _sptOnly?: boolean | cdktf.IResolvable; 
  public get sptOnly() {
    return this.getBooleanAttribute('spt_only');
  }
  public set sptOnly(value: boolean | cdktf.IResolvable) {
    this._sptOnly = value;
  }
  public resetSptOnly() {
    this._sptOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptOnlyInput() {
    return this._sptOnly;
  }

  // spt_only_variable - computed: false, optional: true, required: false
  private _sptOnlyVariable?: string; 
  public get sptOnlyVariable() {
    return this.getStringAttribute('spt_only_variable');
  }
  public set sptOnlyVariable(value: string) {
    this._sptOnlyVariable = value;
  }
  public resetSptOnlyVariable() {
    this._sptOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptOnlyVariableInput() {
    return this._sptOnlyVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_variable - computed: false, optional: true, required: false
  private _thresholdVariable?: string; 
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
  public set thresholdVariable(value: string) {
    this._thresholdVariable = value;
  }
  public resetThresholdVariable() {
    this._thresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVariableInput() {
    return this._thresholdVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      local_replicator: cdktf.booleanToTerraform(this._localReplicator),
      local_replicator_variable: cdktf.stringToTerraform(this._localReplicatorVariable),
      name: cdktf.stringToTerraform(this._name),
      spt_only: cdktf.booleanToTerraform(this._sptOnly),
      spt_only_variable: cdktf.stringToTerraform(this._sptOnlyVariable),
      threshold: cdktf.numberToTerraform(this._threshold),
      threshold_variable: cdktf.stringToTerraform(this._thresholdVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_replicator: {
        value: cdktf.booleanToHclTerraform(this._localReplicator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_replicator_variable: {
        value: cdktf.stringToHclTerraform(this._localReplicatorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spt_only: {
        value: cdktf.booleanToHclTerraform(this._sptOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spt_only_variable: {
        value: cdktf.stringToHclTerraform(this._sptOnlyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_variable: {
        value: cdktf.stringToHclTerraform(this._thresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
