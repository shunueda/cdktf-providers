// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeClassMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map#device DataIosxeClassMap#device}
  */
  readonly device?: string;
  /**
  * name of the class map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map#name DataIosxeClassMap#name}
  */
  readonly name: string;
}
export interface DataIosxeClassMapMatchActivatedServiceTemplates {
}

export function dataIosxeClassMapMatchActivatedServiceTemplatesToTerraform(struct?: DataIosxeClassMapMatchActivatedServiceTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeClassMapMatchActivatedServiceTemplatesToHclTerraform(struct?: DataIosxeClassMapMatchActivatedServiceTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeClassMapMatchActivatedServiceTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeClassMapMatchActivatedServiceTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeClassMapMatchActivatedServiceTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataIosxeClassMapMatchActivatedServiceTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeClassMapMatchActivatedServiceTemplatesOutputReference {
    return new DataIosxeClassMapMatchActivatedServiceTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map iosxe_class_map}
*/
export class DataIosxeClassMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_class_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeClassMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeClassMap to import
  * @param importFromId The id of the existing DataIosxeClassMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeClassMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_class_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/class_map iosxe_class_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeClassMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeClassMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_class_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_access_group_name - computed: true, optional: false, required: false
  public get matchAccessGroupName() {
    return this.getListAttribute('match_access_group_name');
  }

  // match_activated_service_templates - computed: true, optional: false, required: false
  private _matchActivatedServiceTemplates = new DataIosxeClassMapMatchActivatedServiceTemplatesList(this, "match_activated_service_templates", false);
  public get matchActivatedServiceTemplates() {
    return this._matchActivatedServiceTemplates;
  }

  // match_authorization_status_authorized - computed: true, optional: false, required: false
  public get matchAuthorizationStatusAuthorized() {
    return this.getBooleanAttribute('match_authorization_status_authorized');
  }

  // match_authorization_status_unauthorized - computed: true, optional: false, required: false
  public get matchAuthorizationStatusUnauthorized() {
    return this.getBooleanAttribute('match_authorization_status_unauthorized');
  }

  // match_authorizing_method_priority_greater_than - computed: true, optional: false, required: false
  public get matchAuthorizingMethodPriorityGreaterThan() {
    return this.getNumberListAttribute('match_authorizing_method_priority_greater_than');
  }

  // match_dscp - computed: true, optional: false, required: false
  public get matchDscp() {
    return this.getListAttribute('match_dscp');
  }

  // match_ip_dscp - computed: true, optional: false, required: false
  public get matchIpDscp() {
    return this.getListAttribute('match_ip_dscp');
  }

  // match_ip_precedence - computed: true, optional: false, required: false
  public get matchIpPrecedence() {
    return this.getListAttribute('match_ip_precedence');
  }

  // match_method_dot1x - computed: true, optional: false, required: false
  public get matchMethodDot1X() {
    return this.getBooleanAttribute('match_method_dot1x');
  }

  // match_method_mab - computed: true, optional: false, required: false
  public get matchMethodMab() {
    return this.getBooleanAttribute('match_method_mab');
  }

  // match_result_type_aaa_timeout - computed: true, optional: false, required: false
  public get matchResultTypeAaaTimeout() {
    return this.getBooleanAttribute('match_result_type_aaa_timeout');
  }

  // match_result_type_method_dot1x_agent_not_found - computed: true, optional: false, required: false
  public get matchResultTypeMethodDot1XAgentNotFound() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_agent_not_found');
  }

  // match_result_type_method_dot1x_authoritative - computed: true, optional: false, required: false
  public get matchResultTypeMethodDot1XAuthoritative() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_authoritative');
  }

  // match_result_type_method_dot1x_method_timeout - computed: true, optional: false, required: false
  public get matchResultTypeMethodDot1XMethodTimeout() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_method_timeout');
  }

  // match_result_type_method_mab_authoritative - computed: true, optional: false, required: false
  public get matchResultTypeMethodMabAuthoritative() {
    return this.getBooleanAttribute('match_result_type_method_mab_authoritative');
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

  // prematch - computed: true, optional: false, required: false
  public get prematch() {
    return this.getStringAttribute('prematch');
  }

  // subscriber - computed: true, optional: false, required: false
  public get subscriber() {
    return this.getBooleanAttribute('subscriber');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
