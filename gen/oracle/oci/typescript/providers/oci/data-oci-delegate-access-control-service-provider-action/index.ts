// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDelegateAccessControlServiceProviderActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action#id DataOciDelegateAccessControlServiceProviderAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action#service_provider_action_id DataOciDelegateAccessControlServiceProviderAction#service_provider_action_id}
  */
  readonly serviceProviderActionId: string;
}
export interface DataOciDelegateAccessControlServiceProviderActionProperties {
}

export function dataOciDelegateAccessControlServiceProviderActionPropertiesToTerraform(struct?: DataOciDelegateAccessControlServiceProviderActionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDelegateAccessControlServiceProviderActionPropertiesToHclTerraform(struct?: DataOciDelegateAccessControlServiceProviderActionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDelegateAccessControlServiceProviderActionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDelegateAccessControlServiceProviderActionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDelegateAccessControlServiceProviderActionPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference {
    return new DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action oci_delegate_access_control_service_provider_action}
*/
export class DataOciDelegateAccessControlServiceProviderAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_service_provider_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviderAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDelegateAccessControlServiceProviderAction to import
  * @param importFromId The id of the existing DataOciDelegateAccessControlServiceProviderAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDelegateAccessControlServiceProviderAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_service_provider_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_service_provider_action oci_delegate_access_control_service_provider_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDelegateAccessControlServiceProviderActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDelegateAccessControlServiceProviderActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_service_provider_action',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._serviceProviderActionId = config.serviceProviderActionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // customer_display_name - computed: true, optional: false, required: false
  public get customerDisplayName() {
    return this.getStringAttribute('customer_display_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciDelegateAccessControlServiceProviderActionPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // service_provider_action_id - computed: false, optional: false, required: true
  private _serviceProviderActionId?: string; 
  public get serviceProviderActionId() {
    return this.getStringAttribute('service_provider_action_id');
  }
  public set serviceProviderActionId(value: string) {
    this._serviceProviderActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderActionIdInput() {
    return this._serviceProviderActionId;
  }

  // service_provider_service_types - computed: true, optional: false, required: false
  public get serviceProviderServiceTypes() {
    return this.getListAttribute('service_provider_service_types');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_provider_action_id: cdktf.stringToTerraform(this._serviceProviderActionId),
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
      service_provider_action_id: {
        value: cdktf.stringToHclTerraform(this._serviceProviderActionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
