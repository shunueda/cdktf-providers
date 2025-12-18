// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsvpxparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#cpuyield Nsvpxparam#cpuyield}
  */
  readonly cpuyield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#id Nsvpxparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#kvmvirtiomultiqueue Nsvpxparam#kvmvirtiomultiqueue}
  */
  readonly kvmvirtiomultiqueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#masterclockcpu1 Nsvpxparam#masterclockcpu1}
  */
  readonly masterclockcpu1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#ownernode Nsvpxparam#ownernode}
  */
  readonly ownernode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam citrixadc_nsvpxparam}
*/
export class Nsvpxparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsvpxparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsvpxparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsvpxparam to import
  * @param importFromId The id of the existing Nsvpxparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsvpxparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsvpxparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsvpxparam citrixadc_nsvpxparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsvpxparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsvpxparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsvpxparam',
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
    this._cpuyield = config.cpuyield;
    this._id = config.id;
    this._kvmvirtiomultiqueue = config.kvmvirtiomultiqueue;
    this._masterclockcpu1 = config.masterclockcpu1;
    this._ownernode = config.ownernode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpuyield - computed: true, optional: true, required: false
  private _cpuyield?: string; 
  public get cpuyield() {
    return this.getStringAttribute('cpuyield');
  }
  public set cpuyield(value: string) {
    this._cpuyield = value;
  }
  public resetCpuyield() {
    this._cpuyield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuyieldInput() {
    return this._cpuyield;
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

  // kvmvirtiomultiqueue - computed: true, optional: true, required: false
  private _kvmvirtiomultiqueue?: string; 
  public get kvmvirtiomultiqueue() {
    return this.getStringAttribute('kvmvirtiomultiqueue');
  }
  public set kvmvirtiomultiqueue(value: string) {
    this._kvmvirtiomultiqueue = value;
  }
  public resetKvmvirtiomultiqueue() {
    this._kvmvirtiomultiqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmvirtiomultiqueueInput() {
    return this._kvmvirtiomultiqueue;
  }

  // masterclockcpu1 - computed: true, optional: true, required: false
  private _masterclockcpu1?: string; 
  public get masterclockcpu1() {
    return this.getStringAttribute('masterclockcpu1');
  }
  public set masterclockcpu1(value: string) {
    this._masterclockcpu1 = value;
  }
  public resetMasterclockcpu1() {
    this._masterclockcpu1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterclockcpu1Input() {
    return this._masterclockcpu1;
  }

  // ownernode - computed: true, optional: true, required: false
  private _ownernode?: string; 
  public get ownernode() {
    return this.getStringAttribute('ownernode');
  }
  public set ownernode(value: string) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpuyield: cdktf.stringToTerraform(this._cpuyield),
      id: cdktf.stringToTerraform(this._id),
      kvmvirtiomultiqueue: cdktf.stringToTerraform(this._kvmvirtiomultiqueue),
      masterclockcpu1: cdktf.stringToTerraform(this._masterclockcpu1),
      ownernode: cdktf.stringToTerraform(this._ownernode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpuyield: {
        value: cdktf.stringToHclTerraform(this._cpuyield),
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
      kvmvirtiomultiqueue: {
        value: cdktf.stringToHclTerraform(this._kvmvirtiomultiqueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masterclockcpu1: {
        value: cdktf.stringToHclTerraform(this._masterclockcpu1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownernode: {
        value: cdktf.stringToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
