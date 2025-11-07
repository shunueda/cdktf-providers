// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitResourceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the ResourceSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set#id DataAembitResourceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Standalone Certificate Authority ID configured for this ResourceSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set#standalone_certificate_authority DataAembitResourceSet#standalone_certificate_authority}
  */
  readonly standaloneCertificateAuthority?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set aembit_resource_set}
*/
export class DataAembitResourceSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_resource_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitResourceSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitResourceSet to import
  * @param importFromId The id of the existing DataAembitResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitResourceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_resource_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_set aembit_resource_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAembitResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_resource_set',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
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
    this._standaloneCertificateAuthority = config.standaloneCertificateAuthority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // standalone_certificate_authority - computed: true, optional: true, required: false
  private _standaloneCertificateAuthority?: string; 
  public get standaloneCertificateAuthority() {
    return this.getStringAttribute('standalone_certificate_authority');
  }
  public set standaloneCertificateAuthority(value: string) {
    this._standaloneCertificateAuthority = value;
  }
  public resetStandaloneCertificateAuthority() {
    this._standaloneCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneCertificateAuthorityInput() {
    return this._standaloneCertificateAuthority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      standalone_certificate_authority: cdktf.stringToTerraform(this._standaloneCertificateAuthority),
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
      standalone_certificate_authority: {
        value: cdktf.stringToHclTerraform(this._standaloneCertificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
