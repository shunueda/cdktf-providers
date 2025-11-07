// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_key_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudaccessKeyPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_key_properties#access_key_name DataAkamaiCloudaccessKeyProperties#access_key_name}
  */
  readonly accessKeyName: string;
}
export interface DataAkamaiCloudaccessKeyPropertiesProperties {
}

export function dataAkamaiCloudaccessKeyPropertiesPropertiesToTerraform(struct?: DataAkamaiCloudaccessKeyPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudaccessKeyPropertiesPropertiesToHclTerraform(struct?: DataAkamaiCloudaccessKeyPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudaccessKeyPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudaccessKeyPropertiesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudaccessKeyPropertiesProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_version - computed: true, optional: false, required: false
  public get accessKeyVersion() {
    return this.getNumberAttribute('access_key_version');
  }

  // production_version - computed: true, optional: false, required: false
  public get productionVersion() {
    return this.getNumberAttribute('production_version');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // staging_version - computed: true, optional: false, required: false
  public get stagingVersion() {
    return this.getNumberAttribute('staging_version');
  }
}

export class DataAkamaiCloudaccessKeyPropertiesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCloudaccessKeyPropertiesPropertiesOutputReference {
    return new DataAkamaiCloudaccessKeyPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_key_properties akamai_cloudaccess_key_properties}
*/
export class DataAkamaiCloudaccessKeyProperties extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudaccess_key_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudaccessKeyProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudaccessKeyProperties to import
  * @param importFromId The id of the existing DataAkamaiCloudaccessKeyProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_key_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudaccessKeyProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudaccess_key_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudaccess_key_properties akamai_cloudaccess_key_properties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudaccessKeyPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudaccessKeyPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudaccess_key_properties',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyName = config.accessKeyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_name - computed: false, optional: false, required: true
  private _accessKeyName?: string; 
  public get accessKeyName() {
    return this.getStringAttribute('access_key_name');
  }
  public set accessKeyName(value: string) {
    this._accessKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyNameInput() {
    return this._accessKeyName;
  }

  // access_key_uid - computed: true, optional: false, required: false
  public get accessKeyUid() {
    return this.getNumberAttribute('access_key_uid');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAkamaiCloudaccessKeyPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_name: cdktf.stringToTerraform(this._accessKeyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_name: {
        value: cdktf.stringToHclTerraform(this._accessKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
