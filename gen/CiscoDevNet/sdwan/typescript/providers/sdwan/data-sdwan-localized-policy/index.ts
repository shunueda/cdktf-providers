// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/localized_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanLocalizedPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/localized_policy#id DataSdwanLocalizedPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanLocalizedPolicyDefinitions {
}

export function dataSdwanLocalizedPolicyDefinitionsToTerraform(struct?: DataSdwanLocalizedPolicyDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanLocalizedPolicyDefinitionsToHclTerraform(struct?: DataSdwanLocalizedPolicyDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanLocalizedPolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanLocalizedPolicyDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanLocalizedPolicyDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataSdwanLocalizedPolicyDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanLocalizedPolicyDefinitionsOutputReference {
    return new DataSdwanLocalizedPolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/localized_policy sdwan_localized_policy}
*/
export class DataSdwanLocalizedPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_localized_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanLocalizedPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanLocalizedPolicy to import
  * @param importFromId The id of the existing DataSdwanLocalizedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/localized_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanLocalizedPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_localized_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/localized_policy sdwan_localized_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanLocalizedPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanLocalizedPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_localized_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_visibility_ipv4 - computed: true, optional: false, required: false
  public get applicationVisibilityIpv4() {
    return this.getBooleanAttribute('application_visibility_ipv4');
  }

  // application_visibility_ipv6 - computed: true, optional: false, required: false
  public get applicationVisibilityIpv6() {
    return this.getBooleanAttribute('application_visibility_ipv6');
  }

  // cloud_qos - computed: true, optional: false, required: false
  public get cloudQos() {
    return this.getBooleanAttribute('cloud_qos');
  }

  // cloud_qos_service_side - computed: true, optional: false, required: false
  public get cloudQosServiceSide() {
    return this.getBooleanAttribute('cloud_qos_service_side');
  }

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataSdwanLocalizedPolicyDefinitionsList(this, "definitions", true);
  public get definitions() {
    return this._definitions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // flow_visibility_ipv4 - computed: true, optional: false, required: false
  public get flowVisibilityIpv4() {
    return this.getBooleanAttribute('flow_visibility_ipv4');
  }

  // flow_visibility_ipv6 - computed: true, optional: false, required: false
  public get flowVisibilityIpv6() {
    return this.getBooleanAttribute('flow_visibility_ipv6');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // implicit_acl_logging - computed: true, optional: false, required: false
  public get implicitAclLogging() {
    return this.getBooleanAttribute('implicit_acl_logging');
  }

  // ipv4_visibility_cache_entries - computed: true, optional: false, required: false
  public get ipv4VisibilityCacheEntries() {
    return this.getNumberAttribute('ipv4_visibility_cache_entries');
  }

  // ipv6_visibility_cache_entries - computed: true, optional: false, required: false
  public get ipv6VisibilityCacheEntries() {
    return this.getNumberAttribute('ipv6_visibility_cache_entries');
  }

  // log_frequency - computed: true, optional: false, required: false
  public get logFrequency() {
    return this.getNumberAttribute('log_frequency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
