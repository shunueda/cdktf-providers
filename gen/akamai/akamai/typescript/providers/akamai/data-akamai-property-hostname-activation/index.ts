// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiPropertyHostnameActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#contract_id DataAkamaiPropertyHostnameActivation#contract_id}
  */
  readonly contractId?: string;
  /**
  * The unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#group_id DataAkamaiPropertyHostnameActivation#group_id}
  */
  readonly groupId?: string;
  /**
  * The unique identifier for the hostname activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#hostname_activation_id DataAkamaiPropertyHostnameActivation#hostname_activation_id}
  */
  readonly hostnameActivationId: string;
  /**
  * Whether the response should include the property hostnames associated with an activation and the related certificate status on staging and production networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#include_hostnames DataAkamaiPropertyHostnameActivation#include_hostnames}
  */
  readonly includeHostnames?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#property_id DataAkamaiPropertyHostnameActivation#property_id}
  */
  readonly propertyId: string;
}
export interface DataAkamaiPropertyHostnameActivationHostnames {
}

export function dataAkamaiPropertyHostnameActivationHostnamesToTerraform(struct?: DataAkamaiPropertyHostnameActivationHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiPropertyHostnameActivationHostnamesToHclTerraform(struct?: DataAkamaiPropertyHostnameActivationHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiPropertyHostnameActivationHostnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiPropertyHostnameActivationHostnames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiPropertyHostnameActivationHostnames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // cert_provisioning_type - computed: true, optional: false, required: false
  public get certProvisioningType() {
    return this.getStringAttribute('cert_provisioning_type');
  }

  // cname_from - computed: true, optional: false, required: false
  public get cnameFrom() {
    return this.getStringAttribute('cname_from');
  }

  // cname_to - computed: true, optional: false, required: false
  public get cnameTo() {
    return this.getStringAttribute('cname_to');
  }

  // edge_hostname_id - computed: true, optional: false, required: false
  public get edgeHostnameId() {
    return this.getStringAttribute('edge_hostname_id');
  }
}

export class DataAkamaiPropertyHostnameActivationHostnamesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiPropertyHostnameActivationHostnamesOutputReference {
    return new DataAkamaiPropertyHostnameActivationHostnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation akamai_property_hostname_activation}
*/
export class DataAkamaiPropertyHostnameActivation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_hostname_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiPropertyHostnameActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiPropertyHostnameActivation to import
  * @param importFromId The id of the existing DataAkamaiPropertyHostnameActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiPropertyHostnameActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_hostname_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostname_activation akamai_property_hostname_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiPropertyHostnameActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiPropertyHostnameActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_hostname_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._hostnameActivationId = config.hostnameActivationId;
    this._includeHostnames = config.includeHostnames;
    this._propertyId = config.propertyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // activation_type - computed: true, optional: false, required: false
  public get activationType() {
    return this.getStringAttribute('activation_type');
  }

  // contract_id - computed: true, optional: true, required: false
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  public resetContractId() {
    this._contractId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hostname_activation_id - computed: false, optional: false, required: true
  private _hostnameActivationId?: string; 
  public get hostnameActivationId() {
    return this.getStringAttribute('hostname_activation_id');
  }
  public set hostnameActivationId(value: string) {
    this._hostnameActivationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameActivationIdInput() {
    return this._hostnameActivationId;
  }

  // hostnames - computed: true, optional: false, required: false
  private _hostnames = new DataAkamaiPropertyHostnameActivationHostnamesList(this, "hostnames", false);
  public get hostnames() {
    return this._hostnames;
  }

  // include_hostnames - computed: false, optional: true, required: false
  private _includeHostnames?: boolean | cdktf.IResolvable; 
  public get includeHostnames() {
    return this.getBooleanAttribute('include_hostnames');
  }
  public set includeHostnames(value: boolean | cdktf.IResolvable) {
    this._includeHostnames = value;
  }
  public resetIncludeHostnames() {
    this._includeHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostnamesInput() {
    return this._includeHostnames;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // notify_emails - computed: true, optional: false, required: false
  public get notifyEmails() {
    return this.getListAttribute('notify_emails');
  }

  // property_id - computed: false, optional: false, required: true
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submit_date - computed: true, optional: false, required: false
  public get submitDate() {
    return this.getStringAttribute('submit_date');
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      hostname_activation_id: cdktf.stringToTerraform(this._hostnameActivationId),
      include_hostnames: cdktf.booleanToTerraform(this._includeHostnames),
      property_id: cdktf.stringToTerraform(this._propertyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_activation_id: {
        value: cdktf.stringToHclTerraform(this._hostnameActivationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_hostnames: {
        value: cdktf.booleanToHclTerraform(this._includeHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      property_id: {
        value: cdktf.stringToHclTerraform(this._propertyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
