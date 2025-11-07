// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cloud_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZillizcloudCloudProvidersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataZillizcloudCloudProvidersCloudProviders {
}

export function dataZillizcloudCloudProvidersCloudProvidersToTerraform(struct?: DataZillizcloudCloudProvidersCloudProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZillizcloudCloudProvidersCloudProvidersToHclTerraform(struct?: DataZillizcloudCloudProvidersCloudProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZillizcloudCloudProvidersCloudProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZillizcloudCloudProvidersCloudProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZillizcloudCloudProvidersCloudProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataZillizcloudCloudProvidersCloudProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataZillizcloudCloudProvidersCloudProvidersOutputReference {
    return new DataZillizcloudCloudProvidersCloudProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cloud_providers zillizcloud_cloud_providers}
*/
export class DataZillizcloudCloudProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_cloud_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZillizcloudCloudProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZillizcloudCloudProviders to import
  * @param importFromId The id of the existing DataZillizcloudCloudProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cloud_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZillizcloudCloudProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_cloud_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cloud_providers zillizcloud_cloud_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZillizcloudCloudProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZillizcloudCloudProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_cloud_providers',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_providers - computed: true, optional: false, required: false
  private _cloudProviders = new DataZillizcloudCloudProvidersCloudProvidersList(this, "cloud_providers", false);
  public get cloudProviders() {
    return this._cloudProviders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
