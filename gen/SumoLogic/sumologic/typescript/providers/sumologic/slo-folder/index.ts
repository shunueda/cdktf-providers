// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#content_type SloFolder#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#created_at SloFolder#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#created_by SloFolder#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#description SloFolder#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#id SloFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#is_locked SloFolder#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#is_mutable SloFolder#is_mutable}
  */
  readonly isMutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#is_system SloFolder#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#modified_at SloFolder#modified_at}
  */
  readonly modifiedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#modified_by SloFolder#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#name SloFolder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#parent_id SloFolder#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#post_request_map SloFolder#post_request_map}
  */
  readonly postRequestMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#type SloFolder#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#version SloFolder#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder sumologic_slo_folder}
*/
export class SloFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_slo_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SloFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SloFolder to import
  * @param importFromId The id of the existing SloFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SloFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_slo_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/slo_folder sumologic_slo_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloFolderConfig
  */
  public constructor(scope: Construct, id: string, config: SloFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_slo_folder',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentType = config.contentType;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._id = config.id;
    this._isLocked = config.isLocked;
    this._isMutable = config.isMutable;
    this._isSystem = config.isSystem;
    this._modifiedAt = config.modifiedAt;
    this._modifiedBy = config.modifiedBy;
    this._name = config.name;
    this._parentId = config.parentId;
    this._postRequestMap = config.postRequestMap;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

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

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_mutable - computed: true, optional: true, required: false
  private _isMutable?: boolean | cdktf.IResolvable; 
  public get isMutable() {
    return this.getBooleanAttribute('is_mutable');
  }
  public set isMutable(value: boolean | cdktf.IResolvable) {
    this._isMutable = value;
  }
  public resetIsMutable() {
    this._isMutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMutableInput() {
    return this._isMutable;
  }

  // is_system - computed: true, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // modified_at - computed: true, optional: true, required: false
  private _modifiedAt?: string; 
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }
  public set modifiedAt(value: string) {
    this._modifiedAt = value;
  }
  public resetModifiedAt() {
    this._modifiedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedAtInput() {
    return this._modifiedAt;
  }

  // modified_by - computed: true, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // post_request_map - computed: false, optional: true, required: false
  private _postRequestMap?: { [key: string]: string }; 
  public get postRequestMap() {
    return this.getStringMapAttribute('post_request_map');
  }
  public set postRequestMap(value: { [key: string]: string }) {
    this._postRequestMap = value;
  }
  public resetPostRequestMap() {
    this._postRequestMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestMapInput() {
    return this._postRequestMap;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: cdktf.stringToTerraform(this._contentType),
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      is_mutable: cdktf.booleanToTerraform(this._isMutable),
      is_system: cdktf.booleanToTerraform(this._isSystem),
      modified_at: cdktf.stringToTerraform(this._modifiedAt),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      post_request_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._postRequestMap),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_locked: {
        value: cdktf.booleanToHclTerraform(this._isLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mutable: {
        value: cdktf.booleanToHclTerraform(this._isMutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_system: {
        value: cdktf.booleanToHclTerraform(this._isSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      modified_at: {
        value: cdktf.stringToHclTerraform(this._modifiedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_request_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._postRequestMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
