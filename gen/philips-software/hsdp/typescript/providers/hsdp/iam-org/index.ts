// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#description IamOrg#description}
  */
  readonly description?: string;
  /**
  * The display name to use for this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#display_name IamOrg#display_name}
  */
  readonly displayName?: string;
  /**
  * An optional external identifier for this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#external_id IamOrg#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#id IamOrg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Deprecated, do not use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#is_root_org IamOrg#is_root_org}
  */
  readonly isRootOrg?: boolean | cdktf.IResolvable;
  /**
  * The name of the IAM Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#name IamOrg#name}
  */
  readonly name: string;
  /**
  * The parent organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#parent_org_id IamOrg#parent_org_id}
  */
  readonly parentOrgId?: string;
  /**
  * The organization type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#type IamOrg#type}
  */
  readonly type?: string;
  /**
  * Blocks until the organization delete has completed. Default: false. The organization delete process can take some time as all its associated resources like users, groups, roles etc. are removed recursively. This option is useful for ephemeral environments where the same organization might be recreated shortly after a destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#wait_for_delete IamOrg#wait_for_delete}
  */
  readonly waitForDelete?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org hsdp_iam_org}
*/
export class IamOrg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOrg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOrg to import
  * @param importFromId The id of the existing IamOrg that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOrg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_org hsdp_iam_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOrgConfig
  */
  public constructor(scope: Construct, id: string, config: IamOrgConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_org',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
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
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._id = config.id;
    this._isRootOrg = config.isRootOrg;
    this._name = config.name;
    this._parentOrgId = config.parentOrgId;
    this._type = config.type;
    this._waitForDelete = config.waitForDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // is_root_org - computed: false, optional: true, required: false
  private _isRootOrg?: boolean | cdktf.IResolvable; 
  public get isRootOrg() {
    return this.getBooleanAttribute('is_root_org');
  }
  public set isRootOrg(value: boolean | cdktf.IResolvable) {
    this._isRootOrg = value;
  }
  public resetIsRootOrg() {
    this._isRootOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootOrgInput() {
    return this._isRootOrg;
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

  // parent_org_id - computed: false, optional: true, required: false
  private _parentOrgId?: string; 
  public get parentOrgId() {
    return this.getStringAttribute('parent_org_id');
  }
  public set parentOrgId(value: string) {
    this._parentOrgId = value;
  }
  public resetParentOrgId() {
    this._parentOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOrgIdInput() {
    return this._parentOrgId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait_for_delete - computed: false, optional: true, required: false
  private _waitForDelete?: boolean | cdktf.IResolvable; 
  public get waitForDelete() {
    return this.getBooleanAttribute('wait_for_delete');
  }
  public set waitForDelete(value: boolean | cdktf.IResolvable) {
    this._waitForDelete = value;
  }
  public resetWaitForDelete() {
    this._waitForDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeleteInput() {
    return this._waitForDelete;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      is_root_org: cdktf.booleanToTerraform(this._isRootOrg),
      name: cdktf.stringToTerraform(this._name),
      parent_org_id: cdktf.stringToTerraform(this._parentOrgId),
      type: cdktf.stringToTerraform(this._type),
      wait_for_delete: cdktf.booleanToTerraform(this._waitForDelete),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      is_root_org: {
        value: cdktf.booleanToHclTerraform(this._isRootOrg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_org_id: {
        value: cdktf.stringToHclTerraform(this._parentOrgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_delete: {
        value: cdktf.booleanToHclTerraform(this._waitForDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
