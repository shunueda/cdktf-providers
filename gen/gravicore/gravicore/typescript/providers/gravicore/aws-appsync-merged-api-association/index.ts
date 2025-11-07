// https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAppsyncMergedApiAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the merged API association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#description AwsAppsyncMergedApiAssociation#description}
  */
  readonly description?: string;
  /**
  * The identifier of the merged API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#merged_api_id AwsAppsyncMergedApiAssociation#merged_api_id}
  */
  readonly mergedApiId?: string;
  /**
  * The identifier of the source API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#source_api_id AwsAppsyncMergedApiAssociation#source_api_id}
  */
  readonly sourceApiId?: string;
  /**
  * source_api_association_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#source_api_association_config AwsAppsyncMergedApiAssociation#source_api_association_config}
  */
  readonly sourceApiAssociationConfig?: AwsAppsyncMergedApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable;
}
export interface AwsAppsyncMergedApiAssociationSourceApiAssociationConfig {
  /**
  * The type of merge to perform. Valid values are AUTO_MERGE and MANUAL_MERGE. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#merge_type AwsAppsyncMergedApiAssociation#merge_type}
  */
  readonly mergeType?: string;
}

export function awsAppsyncMergedApiAssociationSourceApiAssociationConfigToTerraform(struct?: AwsAppsyncMergedApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merge_type: cdktf.stringToTerraform(struct!.mergeType),
  }
}


export function awsAppsyncMergedApiAssociationSourceApiAssociationConfigToHclTerraform(struct?: AwsAppsyncMergedApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merge_type: {
      value: cdktf.stringToHclTerraform(struct!.mergeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncMergedApiAssociationSourceApiAssociationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsAppsyncMergedApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mergeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeType = this._mergeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncMergedApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mergeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mergeType = value.mergeType;
    }
  }

  // merge_type - computed: false, optional: true, required: false
  private _mergeType?: string; 
  public get mergeType() {
    return this.getStringAttribute('merge_type');
  }
  public set mergeType(value: string) {
    this._mergeType = value;
  }
  public resetMergeType() {
    this._mergeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTypeInput() {
    return this._mergeType;
  }
}

export class AwsAppsyncMergedApiAssociationSourceApiAssociationConfigList extends cdktf.ComplexList {
  public internalValue? : AwsAppsyncMergedApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AwsAppsyncMergedApiAssociationSourceApiAssociationConfigOutputReference {
    return new AwsAppsyncMergedApiAssociationSourceApiAssociationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association gravicore_aws_appsync_merged_api_association}
*/
export class AwsAppsyncMergedApiAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gravicore_aws_appsync_merged_api_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAppsyncMergedApiAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppsyncMergedApiAssociation to import
  * @param importFromId The id of the existing AwsAppsyncMergedApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppsyncMergedApiAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gravicore_aws_appsync_merged_api_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_merged_api_association gravicore_aws_appsync_merged_api_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppsyncMergedApiAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAppsyncMergedApiAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gravicore_aws_appsync_merged_api_association',
      terraformGeneratorMetadata: {
        providerName: 'gravicore',
        providerVersion: '1.0.8'
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
    this._mergedApiId = config.mergedApiId;
    this._sourceApiId = config.sourceApiId;
    this._sourceApiAssociationConfig.internalValue = config.sourceApiAssociationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merged_api_id - computed: false, optional: true, required: false
  private _mergedApiId?: string; 
  public get mergedApiId() {
    return this.getStringAttribute('merged_api_id');
  }
  public set mergedApiId(value: string) {
    this._mergedApiId = value;
  }
  public resetMergedApiId() {
    this._mergedApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiIdInput() {
    return this._mergedApiId;
  }

  // source_api_id - computed: false, optional: true, required: false
  private _sourceApiId?: string; 
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }
  public set sourceApiId(value: string) {
    this._sourceApiId = value;
  }
  public resetSourceApiId() {
    this._sourceApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiIdInput() {
    return this._sourceApiId;
  }

  // source_api_association_config - computed: false, optional: true, required: false
  private _sourceApiAssociationConfig = new AwsAppsyncMergedApiAssociationSourceApiAssociationConfigList(this, "source_api_association_config", false);
  public get sourceApiAssociationConfig() {
    return this._sourceApiAssociationConfig;
  }
  public putSourceApiAssociationConfig(value: AwsAppsyncMergedApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable) {
    this._sourceApiAssociationConfig.internalValue = value;
  }
  public resetSourceApiAssociationConfig() {
    this._sourceApiAssociationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiAssociationConfigInput() {
    return this._sourceApiAssociationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      merged_api_id: cdktf.stringToTerraform(this._mergedApiId),
      source_api_id: cdktf.stringToTerraform(this._sourceApiId),
      source_api_association_config: cdktf.listMapper(awsAppsyncMergedApiAssociationSourceApiAssociationConfigToTerraform, true)(this._sourceApiAssociationConfig.internalValue),
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
      merged_api_id: {
        value: cdktf.stringToHclTerraform(this._mergedApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_api_id: {
        value: cdktf.stringToHclTerraform(this._sourceApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_api_association_config: {
        value: cdktf.listMapperHcl(awsAppsyncMergedApiAssociationSourceApiAssociationConfigToHclTerraform, true)(this._sourceApiAssociationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncMergedApiAssociationSourceApiAssociationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
