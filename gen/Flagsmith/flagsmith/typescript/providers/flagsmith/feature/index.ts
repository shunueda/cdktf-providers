// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the feature is enabled by default. If unspecified, it will default to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#default_enabled Feature#default_enabled}
  */
  readonly defaultEnabled?: boolean | cdktf.IResolvable;
  /**
  * Description of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#description Feature#description}
  */
  readonly description?: string;
  /**
  * Name of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#feature_name Feature#feature_name}
  */
  readonly featureName: string;
  /**
  * Determines the initial value of the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#initial_value Feature#initial_value}
  */
  readonly initialValue?: string;
  /**
  * Can be used to archive/unarchive a feature. If unspecified, it will default to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#is_archived Feature#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * List of user IDs representing the owners of the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#owners Feature#owners}
  */
  readonly owners?: number[];
  /**
  * UUID of project the feature belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#project_uuid Feature#project_uuid}
  */
  readonly projectUuid: string;
  /**
  * List of tag IDs representing the tags attached to the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#tags Feature#tags}
  */
  readonly tags?: number[];
  /**
  * Type of the feature, can be STANDARD, or MULTIVARIATE. if unspecified, it will default to STANDARD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#type Feature#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature flagsmith_feature}
*/
export class Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Feature to import
  * @param importFromId The id of the existing Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature flagsmith_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_feature',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultEnabled = config.defaultEnabled;
    this._description = config.description;
    this._featureName = config.featureName;
    this._initialValue = config.initialValue;
    this._isArchived = config.isArchived;
    this._owners = config.owners;
    this._projectUuid = config.projectUuid;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_enabled - computed: true, optional: true, required: false
  private _defaultEnabled?: boolean | cdktf.IResolvable; 
  public get defaultEnabled() {
    return this.getBooleanAttribute('default_enabled');
  }
  public set defaultEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultEnabled = value;
  }
  public resetDefaultEnabled() {
    this._defaultEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEnabledInput() {
    return this._defaultEnabled;
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

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // initial_value - computed: true, optional: true, required: false
  private _initialValue?: string; 
  public get initialValue() {
    return this.getStringAttribute('initial_value');
  }
  public set initialValue(value: string) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // is_archived - computed: true, optional: true, required: false
  private _isArchived?: boolean | cdktf.IResolvable; 
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }
  public set isArchived(value: boolean | cdktf.IResolvable) {
    this._isArchived = value;
  }
  public resetIsArchived() {
    this._isArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArchivedInput() {
    return this._isArchived;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: number[]; 
  public get owners() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('owners')));
  }
  public set owners(value: number[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_uuid - computed: false, optional: false, required: true
  private _projectUuid?: string; 
  public get projectUuid() {
    return this.getStringAttribute('project_uuid');
  }
  public set projectUuid(value: string) {
    this._projectUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectUuidInput() {
    return this._projectUuid;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_enabled: cdktf.booleanToTerraform(this._defaultEnabled),
      description: cdktf.stringToTerraform(this._description),
      feature_name: cdktf.stringToTerraform(this._featureName),
      initial_value: cdktf.stringToTerraform(this._initialValue),
      is_archived: cdktf.booleanToTerraform(this._isArchived),
      owners: cdktf.listMapper(cdktf.numberToTerraform, false)(this._owners),
      project_uuid: cdktf.stringToTerraform(this._projectUuid),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_value: {
        value: cdktf.stringToHclTerraform(this._initialValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_archived: {
        value: cdktf.booleanToHclTerraform(this._isArchived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      project_uuid: {
        value: cdktf.stringToHclTerraform(this._projectUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
