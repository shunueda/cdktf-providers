// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployFeedsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by feed type. Valid feed types are `AwsElasticContainerRegistry`, `BuiltIn`, `Docker`, `GitHub`, `Helm`, `Maven`, `NuGet`, `S3`, `OciRegistry` or `OctopusProject`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#feed_type DataOctopusdeployFeeds#feed_type}
  */
  readonly feedType?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#ids DataOctopusdeployFeeds#ids}
  */
  readonly ids?: string[];
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#name DataOctopusdeployFeeds#name}
  */
  readonly name?: string;
  /**
  * A filter to search by a partial name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#partial_name DataOctopusdeployFeeds#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#skip DataOctopusdeployFeeds#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this feeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#space_id DataOctopusdeployFeeds#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#take DataOctopusdeployFeeds#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployFeedsFeeds {
}

export function dataOctopusdeployFeedsFeedsToTerraform(struct?: DataOctopusdeployFeedsFeeds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployFeedsFeedsToHclTerraform(struct?: DataOctopusdeployFeedsFeeds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployFeedsFeedsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployFeedsFeeds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployFeedsFeeds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // delete_unreleased_packages_after_days - computed: true, optional: false, required: false
  public get deleteUnreleasedPackagesAfterDays() {
    return this.getNumberAttribute('delete_unreleased_packages_after_days');
  }

  // download_attempts - computed: true, optional: false, required: false
  public get downloadAttempts() {
    return this.getNumberAttribute('download_attempts');
  }

  // download_retry_backoff_seconds - computed: true, optional: false, required: false
  public get downloadRetryBackoffSeconds() {
    return this.getNumberAttribute('download_retry_backoff_seconds');
  }

  // feed_type - computed: true, optional: false, required: false
  public get feedType() {
    return this.getStringAttribute('feed_type');
  }

  // feed_uri - computed: true, optional: false, required: false
  public get feedUri() {
    return this.getStringAttribute('feed_uri');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enhanced_mode - computed: true, optional: false, required: false
  public get isEnhancedMode() {
    return this.getBooleanAttribute('is_enhanced_mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_acquisition_location_options - computed: true, optional: false, required: false
  public get packageAcquisitionLocationOptions() {
    return this.getListAttribute('package_acquisition_location_options');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // registry_path - computed: true, optional: false, required: false
  public get registryPath() {
    return this.getStringAttribute('registry_path');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // use_machine_credentials - computed: true, optional: false, required: false
  public get useMachineCredentials() {
    return this.getBooleanAttribute('use_machine_credentials');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOctopusdeployFeedsFeedsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployFeedsFeedsOutputReference {
    return new DataOctopusdeployFeedsFeedsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds octopusdeploy_feeds}
*/
export class DataOctopusdeployFeeds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_feeds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployFeeds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployFeeds to import
  * @param importFromId The id of the existing DataOctopusdeployFeeds that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployFeeds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_feeds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/feeds octopusdeploy_feeds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployFeedsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployFeedsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_feeds',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feedType = config.feedType;
    this._ids = config.ids;
    this._name = config.name;
    this._partialName = config.partialName;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feed_type - computed: false, optional: true, required: false
  private _feedType?: string; 
  public get feedType() {
    return this.getStringAttribute('feed_type');
  }
  public set feedType(value: string) {
    this._feedType = value;
  }
  public resetFeedType() {
    this._feedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedTypeInput() {
    return this._feedType;
  }

  // feeds - computed: true, optional: false, required: false
  private _feeds = new DataOctopusdeployFeedsFeedsList(this, "feeds", false);
  public get feeds() {
    return this._feeds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feed_type: cdktf.stringToTerraform(this._feedType),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name: cdktf.stringToTerraform(this._name),
      partial_name: cdktf.stringToTerraform(this._partialName),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feed_type: {
        value: cdktf.stringToHclTerraform(this._feedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
