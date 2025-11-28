// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportTransportPackageResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Business justification for the import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource#business_justification ImportTransportPackageResource#business_justification}
  */
  readonly businessJustification?: string;
  /**
  * Version identifier for the import package. Change this value to trigger re-import of the same package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource#import_package_version ImportTransportPackageResource#import_package_version}
  */
  readonly importPackageVersion?: string;
  /**
  * Complete path of the package that needs to be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource#package_path ImportTransportPackageResource#package_path}
  */
  readonly packagePath: string;
  /**
  * Username of the user importing the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource#update_user ImportTransportPackageResource#update_user}
  */
  readonly updateUser?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource saviynt_import_transport_package_resource}
*/
export class ImportTransportPackageResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_import_transport_package_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportTransportPackageResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportTransportPackageResource to import
  * @param importFromId The id of the existing ImportTransportPackageResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportTransportPackageResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_import_transport_package_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/import_transport_package_resource saviynt_import_transport_package_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportTransportPackageResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ImportTransportPackageResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_import_transport_package_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessJustification = config.businessJustification;
    this._importPackageVersion = config.importPackageVersion;
    this._packagePath = config.packagePath;
    this._updateUser = config.updateUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_justification - computed: false, optional: true, required: false
  private _businessJustification?: string; 
  public get businessJustification() {
    return this.getStringAttribute('business_justification');
  }
  public set businessJustification(value: string) {
    this._businessJustification = value;
  }
  public resetBusinessJustification() {
    this._businessJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessJustificationInput() {
    return this._businessJustification;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_package_version - computed: false, optional: true, required: false
  private _importPackageVersion?: string; 
  public get importPackageVersion() {
    return this.getStringAttribute('import_package_version');
  }
  public set importPackageVersion(value: string) {
    this._importPackageVersion = value;
  }
  public resetImportPackageVersion() {
    this._importPackageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPackageVersionInput() {
    return this._importPackageVersion;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // package_path - computed: false, optional: false, required: true
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // update_user - computed: false, optional: true, required: false
  private _updateUser?: string; 
  public get updateUser() {
    return this.getStringAttribute('update_user');
  }
  public set updateUser(value: string) {
    this._updateUser = value;
  }
  public resetUpdateUser() {
    this._updateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserInput() {
    return this._updateUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_justification: cdktf.stringToTerraform(this._businessJustification),
      import_package_version: cdktf.stringToTerraform(this._importPackageVersion),
      package_path: cdktf.stringToTerraform(this._packagePath),
      update_user: cdktf.stringToTerraform(this._updateUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_justification: {
        value: cdktf.stringToHclTerraform(this._businessJustification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_package_version: {
        value: cdktf.stringToHclTerraform(this._importPackageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_path: {
        value: cdktf.stringToHclTerraform(this._packagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user: {
        value: cdktf.stringToHclTerraform(this._updateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
