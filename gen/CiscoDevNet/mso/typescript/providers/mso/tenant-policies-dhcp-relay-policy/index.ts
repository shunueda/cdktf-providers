// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantPoliciesDhcpRelayPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#description TenantPoliciesDhcpRelayPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#id TenantPoliciesDhcpRelayPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#name TenantPoliciesDhcpRelayPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#template_id TenantPoliciesDhcpRelayPolicy#template_id}
  */
  readonly templateId: string;
  /**
  * dhcp_relay_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#dhcp_relay_providers TenantPoliciesDhcpRelayPolicy#dhcp_relay_providers}
  */
  readonly dhcpRelayProviders: TenantPoliciesDhcpRelayPolicyDhcpRelayProviders[] | cdktf.IResolvable;
}
export interface TenantPoliciesDhcpRelayPolicyDhcpRelayProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#application_epg_uuid TenantPoliciesDhcpRelayPolicy#application_epg_uuid}
  */
  readonly applicationEpgUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#dhcp_server_address TenantPoliciesDhcpRelayPolicy#dhcp_server_address}
  */
  readonly dhcpServerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#dhcp_server_vrf_preference TenantPoliciesDhcpRelayPolicy#dhcp_server_vrf_preference}
  */
  readonly dhcpServerVrfPreference?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#external_epg_uuid TenantPoliciesDhcpRelayPolicy#external_epg_uuid}
  */
  readonly externalEpgUuid?: string;
}

export function tenantPoliciesDhcpRelayPolicyDhcpRelayProvidersToTerraform(struct?: TenantPoliciesDhcpRelayPolicyDhcpRelayProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_epg_uuid: cdktf.stringToTerraform(struct!.applicationEpgUuid),
    dhcp_server_address: cdktf.stringToTerraform(struct!.dhcpServerAddress),
    dhcp_server_vrf_preference: cdktf.booleanToTerraform(struct!.dhcpServerVrfPreference),
    external_epg_uuid: cdktf.stringToTerraform(struct!.externalEpgUuid),
  }
}


export function tenantPoliciesDhcpRelayPolicyDhcpRelayProvidersToHclTerraform(struct?: TenantPoliciesDhcpRelayPolicyDhcpRelayProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_epg_uuid: {
      value: cdktf.stringToHclTerraform(struct!.applicationEpgUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_address: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_vrf_preference: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpServerVrfPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_epg_uuid: {
      value: cdktf.stringToHclTerraform(struct!.externalEpgUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantPoliciesDhcpRelayPolicyDhcpRelayProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationEpgUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEpgUuid = this._applicationEpgUuid;
    }
    if (this._dhcpServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAddress = this._dhcpServerAddress;
    }
    if (this._dhcpServerVrfPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerVrfPreference = this._dhcpServerVrfPreference;
    }
    if (this._externalEpgUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEpgUuid = this._externalEpgUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPoliciesDhcpRelayPolicyDhcpRelayProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationEpgUuid = undefined;
      this._dhcpServerAddress = undefined;
      this._dhcpServerVrfPreference = undefined;
      this._externalEpgUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationEpgUuid = value.applicationEpgUuid;
      this._dhcpServerAddress = value.dhcpServerAddress;
      this._dhcpServerVrfPreference = value.dhcpServerVrfPreference;
      this._externalEpgUuid = value.externalEpgUuid;
    }
  }

  // application_epg_uuid - computed: false, optional: true, required: false
  private _applicationEpgUuid?: string; 
  public get applicationEpgUuid() {
    return this.getStringAttribute('application_epg_uuid');
  }
  public set applicationEpgUuid(value: string) {
    this._applicationEpgUuid = value;
  }
  public resetApplicationEpgUuid() {
    this._applicationEpgUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEpgUuidInput() {
    return this._applicationEpgUuid;
  }

  // dhcp_server_address - computed: false, optional: false, required: true
  private _dhcpServerAddress?: string; 
  public get dhcpServerAddress() {
    return this.getStringAttribute('dhcp_server_address');
  }
  public set dhcpServerAddress(value: string) {
    this._dhcpServerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddressInput() {
    return this._dhcpServerAddress;
  }

  // dhcp_server_vrf_preference - computed: false, optional: true, required: false
  private _dhcpServerVrfPreference?: boolean | cdktf.IResolvable; 
  public get dhcpServerVrfPreference() {
    return this.getBooleanAttribute('dhcp_server_vrf_preference');
  }
  public set dhcpServerVrfPreference(value: boolean | cdktf.IResolvable) {
    this._dhcpServerVrfPreference = value;
  }
  public resetDhcpServerVrfPreference() {
    this._dhcpServerVrfPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerVrfPreferenceInput() {
    return this._dhcpServerVrfPreference;
  }

  // external_epg_uuid - computed: false, optional: true, required: false
  private _externalEpgUuid?: string; 
  public get externalEpgUuid() {
    return this.getStringAttribute('external_epg_uuid');
  }
  public set externalEpgUuid(value: string) {
    this._externalEpgUuid = value;
  }
  public resetExternalEpgUuid() {
    this._externalEpgUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEpgUuidInput() {
    return this._externalEpgUuid;
  }
}

export class TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersList extends cdktf.ComplexList {
  public internalValue? : TenantPoliciesDhcpRelayPolicyDhcpRelayProviders[] | cdktf.IResolvable

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
  public get(index: number): TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersOutputReference {
    return new TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy mso_tenant_policies_dhcp_relay_policy}
*/
export class TenantPoliciesDhcpRelayPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_dhcp_relay_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantPoliciesDhcpRelayPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantPoliciesDhcpRelayPolicy to import
  * @param importFromId The id of the existing TenantPoliciesDhcpRelayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantPoliciesDhcpRelayPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_dhcp_relay_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_dhcp_relay_policy mso_tenant_policies_dhcp_relay_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantPoliciesDhcpRelayPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TenantPoliciesDhcpRelayPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_dhcp_relay_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
    this._dhcpRelayProviders.internalValue = config.dhcpRelayProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // dhcp_relay_providers - computed: false, optional: false, required: true
  private _dhcpRelayProviders = new TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersList(this, "dhcp_relay_providers", true);
  public get dhcpRelayProviders() {
    return this._dhcpRelayProviders;
  }
  public putDhcpRelayProviders(value: TenantPoliciesDhcpRelayPolicyDhcpRelayProviders[] | cdktf.IResolvable) {
    this._dhcpRelayProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayProvidersInput() {
    return this._dhcpRelayProviders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
      dhcp_relay_providers: cdktf.listMapper(tenantPoliciesDhcpRelayPolicyDhcpRelayProvidersToTerraform, true)(this._dhcpRelayProviders.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_providers: {
        value: cdktf.listMapperHcl(tenantPoliciesDhcpRelayPolicyDhcpRelayProvidersToHclTerraform, true)(this._dhcpRelayProviders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantPoliciesDhcpRelayPolicyDhcpRelayProvidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
