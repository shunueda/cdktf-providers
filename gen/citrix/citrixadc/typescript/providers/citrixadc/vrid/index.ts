// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#all Vrid#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#id Vrid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#ownernode Vrid#ownernode}
  */
  readonly ownernode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#preemption Vrid#preemption}
  */
  readonly preemption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#preemptiondelaytimer Vrid#preemptiondelaytimer}
  */
  readonly preemptiondelaytimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#priority Vrid#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#sharing Vrid#sharing}
  */
  readonly sharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#trackifnumpriority Vrid#trackifnumpriority}
  */
  readonly trackifnumpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#tracking Vrid#tracking}
  */
  readonly tracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#vrid_id Vrid#vrid_id}
  */
  readonly vridId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid citrixadc_vrid}
*/
export class Vrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vrid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrid to import
  * @param importFromId The id of the existing Vrid that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vrid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vrid citrixadc_vrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VridConfig
  */
  public constructor(scope: Construct, id: string, config: VridConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vrid',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._id = config.id;
    this._ownernode = config.ownernode;
    this._preemption = config.preemption;
    this._preemptiondelaytimer = config.preemptiondelaytimer;
    this._priority = config.priority;
    this._sharing = config.sharing;
    this._trackifnumpriority = config.trackifnumpriority;
    this._tracking = config.tracking;
    this._vridId = config.vridId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
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

  // ownernode - computed: true, optional: true, required: false
  private _ownernode?: number; 
  public get ownernode() {
    return this.getNumberAttribute('ownernode');
  }
  public set ownernode(value: number) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // preemption - computed: true, optional: true, required: false
  private _preemption?: string; 
  public get preemption() {
    return this.getStringAttribute('preemption');
  }
  public set preemption(value: string) {
    this._preemption = value;
  }
  public resetPreemption() {
    this._preemption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionInput() {
    return this._preemption;
  }

  // preemptiondelaytimer - computed: true, optional: true, required: false
  private _preemptiondelaytimer?: number; 
  public get preemptiondelaytimer() {
    return this.getNumberAttribute('preemptiondelaytimer');
  }
  public set preemptiondelaytimer(value: number) {
    this._preemptiondelaytimer = value;
  }
  public resetPreemptiondelaytimer() {
    this._preemptiondelaytimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptiondelaytimerInput() {
    return this._preemptiondelaytimer;
  }

  // priority - computed: true, optional: true, required: false
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

  // sharing - computed: true, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }

  // trackifnumpriority - computed: true, optional: true, required: false
  private _trackifnumpriority?: number; 
  public get trackifnumpriority() {
    return this.getNumberAttribute('trackifnumpriority');
  }
  public set trackifnumpriority(value: number) {
    this._trackifnumpriority = value;
  }
  public resetTrackifnumpriority() {
    this._trackifnumpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackifnumpriorityInput() {
    return this._trackifnumpriority;
  }

  // tracking - computed: true, optional: true, required: false
  private _tracking?: string; 
  public get tracking() {
    return this.getStringAttribute('tracking');
  }
  public set tracking(value: string) {
    this._tracking = value;
  }
  public resetTracking() {
    this._tracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingInput() {
    return this._tracking;
  }

  // vrid_id - computed: false, optional: false, required: true
  private _vridId?: number; 
  public get vridId() {
    return this.getNumberAttribute('vrid_id');
  }
  public set vridId(value: number) {
    this._vridId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridIdInput() {
    return this._vridId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.booleanToTerraform(this._all),
      id: cdktf.stringToTerraform(this._id),
      ownernode: cdktf.numberToTerraform(this._ownernode),
      preemption: cdktf.stringToTerraform(this._preemption),
      preemptiondelaytimer: cdktf.numberToTerraform(this._preemptiondelaytimer),
      priority: cdktf.numberToTerraform(this._priority),
      sharing: cdktf.stringToTerraform(this._sharing),
      trackifnumpriority: cdktf.numberToTerraform(this._trackifnumpriority),
      tracking: cdktf.stringToTerraform(this._tracking),
      vrid_id: cdktf.numberToTerraform(this._vridId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownernode: {
        value: cdktf.numberToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preemption: {
        value: cdktf.stringToHclTerraform(this._preemption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preemptiondelaytimer: {
        value: cdktf.numberToHclTerraform(this._preemptiondelaytimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sharing: {
        value: cdktf.stringToHclTerraform(this._sharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trackifnumpriority: {
        value: cdktf.numberToHclTerraform(this._trackifnumpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tracking: {
        value: cdktf.stringToHclTerraform(this._tracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid_id: {
        value: cdktf.numberToHclTerraform(this._vridId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
