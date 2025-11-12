// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessServiceDiscoverySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Correlation ID for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting#correlation_id DataHarnessServiceDiscoverySetting#correlation_id}
  */
  readonly correlationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting#id DataHarnessServiceDiscoverySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting#org_identifier DataHarnessServiceDiscoverySetting#org_identifier}
  */
  readonly orgIdentifier?: string;
  /**
  * The project identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting#project_identifier DataHarnessServiceDiscoverySetting#project_identifier}
  */
  readonly projectIdentifier?: string;
}
export interface DataHarnessServiceDiscoverySettingImageRegistry {
}

export function dataHarnessServiceDiscoverySettingImageRegistryToTerraform(struct?: DataHarnessServiceDiscoverySettingImageRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoverySettingImageRegistryToHclTerraform(struct?: DataHarnessServiceDiscoverySettingImageRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoverySettingImageRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoverySettingImageRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoverySettingImageRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.getListAttribute('secrets');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataHarnessServiceDiscoverySettingImageRegistryList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoverySettingImageRegistryOutputReference {
    return new DataHarnessServiceDiscoverySettingImageRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting harness_service_discovery_setting}
*/
export class DataHarnessServiceDiscoverySetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_service_discovery_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessServiceDiscoverySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessServiceDiscoverySetting to import
  * @param importFromId The id of the existing DataHarnessServiceDiscoverySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessServiceDiscoverySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_service_discovery_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/service_discovery_setting harness_service_discovery_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessServiceDiscoverySettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHarnessServiceDiscoverySettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness_service_discovery_setting',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._correlationId = config.correlationId;
    this._id = config.id;
    this._orgIdentifier = config.orgIdentifier;
    this._projectIdentifier = config.projectIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlation_id - computed: false, optional: true, required: false
  private _correlationId?: string; 
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }
  public set correlationId(value: string) {
    this._correlationId = value;
  }
  public resetCorrelationId() {
    this._correlationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdInput() {
    return this._correlationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // image_registry - computed: true, optional: false, required: false
  private _imageRegistry = new DataHarnessServiceDiscoverySettingImageRegistryList(this, "image_registry", false);
  public get imageRegistry() {
    return this._imageRegistry;
  }

  // org_identifier - computed: false, optional: true, required: false
  private _orgIdentifier?: string; 
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }
  public set orgIdentifier(value: string) {
    this._orgIdentifier = value;
  }
  public resetOrgIdentifier() {
    this._orgIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdentifierInput() {
    return this._orgIdentifier;
  }

  // project_identifier - computed: false, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlation_id: cdktf.stringToTerraform(this._correlationId),
      id: cdktf.stringToTerraform(this._id),
      org_identifier: cdktf.stringToTerraform(this._orgIdentifier),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlation_id: {
        value: cdktf.stringToHclTerraform(this._correlationId),
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
      org_identifier: {
        value: cdktf.stringToHclTerraform(this._orgIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
