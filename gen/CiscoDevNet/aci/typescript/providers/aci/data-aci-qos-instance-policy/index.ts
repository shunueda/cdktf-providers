// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciQosInstancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#annotation DataAciQosInstancePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#ctrl DataAciQosInstancePolicy#ctrl}
  */
  readonly ctrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#description DataAciQosInstancePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#etrap_age_timer DataAciQosInstancePolicy#etrap_age_timer}
  */
  readonly etrapAgeTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#etrap_bw_thresh DataAciQosInstancePolicy#etrap_bw_thresh}
  */
  readonly etrapBwThresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#etrap_byte_ct DataAciQosInstancePolicy#etrap_byte_ct}
  */
  readonly etrapByteCt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#etrap_st DataAciQosInstancePolicy#etrap_st}
  */
  readonly etrapSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#fabric_flush_interval DataAciQosInstancePolicy#fabric_flush_interval}
  */
  readonly fabricFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#fabric_flush_st DataAciQosInstancePolicy#fabric_flush_st}
  */
  readonly fabricFlushSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#id DataAciQosInstancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#name_alias DataAciQosInstancePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#uburst_spine_queues DataAciQosInstancePolicy#uburst_spine_queues}
  */
  readonly uburstSpineQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#uburst_tor_queues DataAciQosInstancePolicy#uburst_tor_queues}
  */
  readonly uburstTorQueues?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy aci_qos_instance_policy}
*/
export class DataAciQosInstancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_qos_instance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciQosInstancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciQosInstancePolicy to import
  * @param importFromId The id of the existing DataAciQosInstancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciQosInstancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_qos_instance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/qos_instance_policy aci_qos_instance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciQosInstancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciQosInstancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_qos_instance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._etrapAgeTimer = config.etrapAgeTimer;
    this._etrapBwThresh = config.etrapBwThresh;
    this._etrapByteCt = config.etrapByteCt;
    this._etrapSt = config.etrapSt;
    this._fabricFlushInterval = config.fabricFlushInterval;
    this._fabricFlushSt = config.fabricFlushSt;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._uburstSpineQueues = config.uburstSpineQueues;
    this._uburstTorQueues = config.uburstTorQueues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string; 
  public get ctrl() {
    return this.getStringAttribute('ctrl');
  }
  public set ctrl(value: string) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
  }

  // description - computed: true, optional: true, required: false
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

  // etrap_age_timer - computed: true, optional: true, required: false
  private _etrapAgeTimer?: string; 
  public get etrapAgeTimer() {
    return this.getStringAttribute('etrap_age_timer');
  }
  public set etrapAgeTimer(value: string) {
    this._etrapAgeTimer = value;
  }
  public resetEtrapAgeTimer() {
    this._etrapAgeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etrapAgeTimerInput() {
    return this._etrapAgeTimer;
  }

  // etrap_bw_thresh - computed: true, optional: true, required: false
  private _etrapBwThresh?: string; 
  public get etrapBwThresh() {
    return this.getStringAttribute('etrap_bw_thresh');
  }
  public set etrapBwThresh(value: string) {
    this._etrapBwThresh = value;
  }
  public resetEtrapBwThresh() {
    this._etrapBwThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etrapBwThreshInput() {
    return this._etrapBwThresh;
  }

  // etrap_byte_ct - computed: true, optional: true, required: false
  private _etrapByteCt?: string; 
  public get etrapByteCt() {
    return this.getStringAttribute('etrap_byte_ct');
  }
  public set etrapByteCt(value: string) {
    this._etrapByteCt = value;
  }
  public resetEtrapByteCt() {
    this._etrapByteCt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etrapByteCtInput() {
    return this._etrapByteCt;
  }

  // etrap_st - computed: true, optional: true, required: false
  private _etrapSt?: string; 
  public get etrapSt() {
    return this.getStringAttribute('etrap_st');
  }
  public set etrapSt(value: string) {
    this._etrapSt = value;
  }
  public resetEtrapSt() {
    this._etrapSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etrapStInput() {
    return this._etrapSt;
  }

  // fabric_flush_interval - computed: true, optional: true, required: false
  private _fabricFlushInterval?: string; 
  public get fabricFlushInterval() {
    return this.getStringAttribute('fabric_flush_interval');
  }
  public set fabricFlushInterval(value: string) {
    this._fabricFlushInterval = value;
  }
  public resetFabricFlushInterval() {
    this._fabricFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricFlushIntervalInput() {
    return this._fabricFlushInterval;
  }

  // fabric_flush_st - computed: true, optional: true, required: false
  private _fabricFlushSt?: string; 
  public get fabricFlushSt() {
    return this.getStringAttribute('fabric_flush_st');
  }
  public set fabricFlushSt(value: string) {
    this._fabricFlushSt = value;
  }
  public resetFabricFlushSt() {
    this._fabricFlushSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricFlushStInput() {
    return this._fabricFlushSt;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // uburst_spine_queues - computed: true, optional: true, required: false
  private _uburstSpineQueues?: string; 
  public get uburstSpineQueues() {
    return this.getStringAttribute('uburst_spine_queues');
  }
  public set uburstSpineQueues(value: string) {
    this._uburstSpineQueues = value;
  }
  public resetUburstSpineQueues() {
    this._uburstSpineQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uburstSpineQueuesInput() {
    return this._uburstSpineQueues;
  }

  // uburst_tor_queues - computed: true, optional: true, required: false
  private _uburstTorQueues?: string; 
  public get uburstTorQueues() {
    return this.getStringAttribute('uburst_tor_queues');
  }
  public set uburstTorQueues(value: string) {
    this._uburstTorQueues = value;
  }
  public resetUburstTorQueues() {
    this._uburstTorQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uburstTorQueuesInput() {
    return this._uburstTorQueues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      ctrl: cdktf.stringToTerraform(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      etrap_age_timer: cdktf.stringToTerraform(this._etrapAgeTimer),
      etrap_bw_thresh: cdktf.stringToTerraform(this._etrapBwThresh),
      etrap_byte_ct: cdktf.stringToTerraform(this._etrapByteCt),
      etrap_st: cdktf.stringToTerraform(this._etrapSt),
      fabric_flush_interval: cdktf.stringToTerraform(this._fabricFlushInterval),
      fabric_flush_st: cdktf.stringToTerraform(this._fabricFlushSt),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      uburst_spine_queues: cdktf.stringToTerraform(this._uburstSpineQueues),
      uburst_tor_queues: cdktf.stringToTerraform(this._uburstTorQueues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.stringToHclTerraform(this._ctrl),
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
      etrap_age_timer: {
        value: cdktf.stringToHclTerraform(this._etrapAgeTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etrap_bw_thresh: {
        value: cdktf.stringToHclTerraform(this._etrapBwThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etrap_byte_ct: {
        value: cdktf.stringToHclTerraform(this._etrapByteCt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etrap_st: {
        value: cdktf.stringToHclTerraform(this._etrapSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_flush_interval: {
        value: cdktf.stringToHclTerraform(this._fabricFlushInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_flush_st: {
        value: cdktf.stringToHclTerraform(this._fabricFlushSt),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uburst_spine_queues: {
        value: cdktf.stringToHclTerraform(this._uburstSpineQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uburst_tor_queues: {
        value: cdktf.stringToHclTerraform(this._uburstTorQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
