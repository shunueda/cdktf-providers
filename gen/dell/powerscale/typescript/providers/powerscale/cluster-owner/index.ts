// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterOwnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Company Name of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#company ClusterOwner#company}
  */
  readonly company?: string;
  /**
  * Location of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#location ClusterOwner#location}
  */
  readonly location?: string;
  /**
  * Primary Email of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#primary_email ClusterOwner#primary_email}
  */
  readonly primaryEmail?: string;
  /**
  * Primary Name of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#primary_name ClusterOwner#primary_name}
  */
  readonly primaryName?: string;
  /**
  * Primary Phone of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#primary_phone1 ClusterOwner#primary_phone1}
  */
  readonly primaryPhone1?: string;
  /**
  * Primary Alternate Phone of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#primary_phone2 ClusterOwner#primary_phone2}
  */
  readonly primaryPhone2?: string;
  /**
  * Secondary Email of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#secondary_email ClusterOwner#secondary_email}
  */
  readonly secondaryEmail?: string;
  /**
  * Secondary Name of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#secondary_name ClusterOwner#secondary_name}
  */
  readonly secondaryName?: string;
  /**
  * Secondary Phone of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#secondary_phone1 ClusterOwner#secondary_phone1}
  */
  readonly secondaryPhone1?: string;
  /**
  * Secondary Alternate Phone of the Cluster Owner Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#secondary_phone2 ClusterOwner#secondary_phone2}
  */
  readonly secondaryPhone2?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner powerscale_cluster_owner}
*/
export class ClusterOwner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterOwner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterOwner to import
  * @param importFromId The id of the existing ClusterOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterOwner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_owner powerscale_cluster_owner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterOwnerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterOwnerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_owner',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._company = config.company;
    this._location = config.location;
    this._primaryEmail = config.primaryEmail;
    this._primaryName = config.primaryName;
    this._primaryPhone1 = config.primaryPhone1;
    this._primaryPhone2 = config.primaryPhone2;
    this._secondaryEmail = config.secondaryEmail;
    this._secondaryName = config.secondaryName;
    this._secondaryPhone1 = config.secondaryPhone1;
    this._secondaryPhone2 = config.secondaryPhone2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company - computed: true, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // primary_email - computed: true, optional: true, required: false
  private _primaryEmail?: string; 
  public get primaryEmail() {
    return this.getStringAttribute('primary_email');
  }
  public set primaryEmail(value: string) {
    this._primaryEmail = value;
  }
  public resetPrimaryEmail() {
    this._primaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // primary_name - computed: true, optional: true, required: false
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  public resetPrimaryName() {
    this._primaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_phone1 - computed: true, optional: true, required: false
  private _primaryPhone1?: string; 
  public get primaryPhone1() {
    return this.getStringAttribute('primary_phone1');
  }
  public set primaryPhone1(value: string) {
    this._primaryPhone1 = value;
  }
  public resetPrimaryPhone1() {
    this._primaryPhone1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPhone1Input() {
    return this._primaryPhone1;
  }

  // primary_phone2 - computed: true, optional: true, required: false
  private _primaryPhone2?: string; 
  public get primaryPhone2() {
    return this.getStringAttribute('primary_phone2');
  }
  public set primaryPhone2(value: string) {
    this._primaryPhone2 = value;
  }
  public resetPrimaryPhone2() {
    this._primaryPhone2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPhone2Input() {
    return this._primaryPhone2;
  }

  // secondary_email - computed: true, optional: true, required: false
  private _secondaryEmail?: string; 
  public get secondaryEmail() {
    return this.getStringAttribute('secondary_email');
  }
  public set secondaryEmail(value: string) {
    this._secondaryEmail = value;
  }
  public resetSecondaryEmail() {
    this._secondaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEmailInput() {
    return this._secondaryEmail;
  }

  // secondary_name - computed: true, optional: true, required: false
  private _secondaryName?: string; 
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }
  public set secondaryName(value: string) {
    this._secondaryName = value;
  }
  public resetSecondaryName() {
    this._secondaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNameInput() {
    return this._secondaryName;
  }

  // secondary_phone1 - computed: true, optional: true, required: false
  private _secondaryPhone1?: string; 
  public get secondaryPhone1() {
    return this.getStringAttribute('secondary_phone1');
  }
  public set secondaryPhone1(value: string) {
    this._secondaryPhone1 = value;
  }
  public resetSecondaryPhone1() {
    this._secondaryPhone1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPhone1Input() {
    return this._secondaryPhone1;
  }

  // secondary_phone2 - computed: true, optional: true, required: false
  private _secondaryPhone2?: string; 
  public get secondaryPhone2() {
    return this.getStringAttribute('secondary_phone2');
  }
  public set secondaryPhone2(value: string) {
    this._secondaryPhone2 = value;
  }
  public resetSecondaryPhone2() {
    this._secondaryPhone2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPhone2Input() {
    return this._secondaryPhone2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company: cdktf.stringToTerraform(this._company),
      location: cdktf.stringToTerraform(this._location),
      primary_email: cdktf.stringToTerraform(this._primaryEmail),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_phone1: cdktf.stringToTerraform(this._primaryPhone1),
      primary_phone2: cdktf.stringToTerraform(this._primaryPhone2),
      secondary_email: cdktf.stringToTerraform(this._secondaryEmail),
      secondary_name: cdktf.stringToTerraform(this._secondaryName),
      secondary_phone1: cdktf.stringToTerraform(this._secondaryPhone1),
      secondary_phone2: cdktf.stringToTerraform(this._secondaryPhone2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_email: {
        value: cdktf.stringToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_name: {
        value: cdktf.stringToHclTerraform(this._primaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_phone1: {
        value: cdktf.stringToHclTerraform(this._primaryPhone1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_phone2: {
        value: cdktf.stringToHclTerraform(this._primaryPhone2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_email: {
        value: cdktf.stringToHclTerraform(this._secondaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_name: {
        value: cdktf.stringToHclTerraform(this._secondaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_phone1: {
        value: cdktf.stringToHclTerraform(this._secondaryPhone1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_phone2: {
        value: cdktf.stringToHclTerraform(this._secondaryPhone2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
