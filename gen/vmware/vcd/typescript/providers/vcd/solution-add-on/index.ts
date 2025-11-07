// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolutionAddOnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Absolute or relative path to Solution Add-On ISO file available locally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on#add_on_path SolutionAddOn#add_on_path}
  */
  readonly addOnPath: string;
  /**
  * Defines if the resource should automatically trust Solution Add-On certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on#auto_trust_certificate SolutionAddOn#auto_trust_certificate}
  */
  readonly autoTrustCertificate?: boolean | cdktf.IResolvable;
  /**
  * Solution Add-On Catalog Item ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on#catalog_item_id SolutionAddOn#catalog_item_id}
  */
  readonly catalogItemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on#id SolutionAddOn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on vcd_solution_add_on}
*/
export class SolutionAddOn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_solution_add_on";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolutionAddOn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolutionAddOn to import
  * @param importFromId The id of the existing SolutionAddOn that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolutionAddOn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_solution_add_on", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on vcd_solution_add_on} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolutionAddOnConfig
  */
  public constructor(scope: Construct, id: string, config: SolutionAddOnConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_solution_add_on',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addOnPath = config.addOnPath;
    this._autoTrustCertificate = config.autoTrustCertificate;
    this._catalogItemId = config.catalogItemId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_path - computed: false, optional: false, required: true
  private _addOnPath?: string; 
  public get addOnPath() {
    return this.getStringAttribute('add_on_path');
  }
  public set addOnPath(value: string) {
    this._addOnPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnPathInput() {
    return this._addOnPath;
  }

  // auto_trust_certificate - computed: false, optional: true, required: false
  private _autoTrustCertificate?: boolean | cdktf.IResolvable; 
  public get autoTrustCertificate() {
    return this.getBooleanAttribute('auto_trust_certificate');
  }
  public set autoTrustCertificate(value: boolean | cdktf.IResolvable) {
    this._autoTrustCertificate = value;
  }
  public resetAutoTrustCertificate() {
    this._autoTrustCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTrustCertificateInput() {
    return this._autoTrustCertificate;
  }

  // catalog_item_id - computed: false, optional: false, required: true
  private _catalogItemId?: string; 
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }
  public set catalogItemId(value: string) {
    this._catalogItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemIdInput() {
    return this._catalogItemId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rde_state - computed: true, optional: false, required: false
  public get rdeState() {
    return this.getStringAttribute('rde_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_path: cdktf.stringToTerraform(this._addOnPath),
      auto_trust_certificate: cdktf.booleanToTerraform(this._autoTrustCertificate),
      catalog_item_id: cdktf.stringToTerraform(this._catalogItemId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_path: {
        value: cdktf.stringToHclTerraform(this._addOnPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_trust_certificate: {
        value: cdktf.booleanToHclTerraform(this._autoTrustCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._catalogItemId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
