// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationExtensionsThousandEyesNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the ThousandEyes agent is enabled for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#enabled OrganizationExtensionsThousandEyesNetwork#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Network that will have the ThousandEyes agent installed on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#network_id OrganizationExtensionsThousandEyesNetwork#network_id}
  */
  readonly networkId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#organization_id OrganizationExtensionsThousandEyesNetwork#organization_id}
  */
  readonly organizationId: string;
  /**
  * An array of tests to be created, this can only be configured during resource creation and cannot be changed afterwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#tests OrganizationExtensionsThousandEyesNetwork#tests}
  */
  readonly tests?: OrganizationExtensionsThousandEyesNetworkTests[] | cdktf.IResolvable;
}
export interface OrganizationExtensionsThousandEyesNetworkTests {
  /**
  * Network Id e.g. N_12345
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#network_id OrganizationExtensionsThousandEyesNetwork#network_id}
  */
  readonly networkId?: string;
  /**
  * Template id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#template_id OrganizationExtensionsThousandEyesNetwork#template_id}
  */
  readonly templateId?: string;
  /**
  * Tenant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#template_user_inputs_tenant OrganizationExtensionsThousandEyesNetwork#template_user_inputs_tenant}
  */
  readonly templateUserInputsTenant?: string;
}

export function organizationExtensionsThousandEyesNetworkTestsToTerraform(struct?: OrganizationExtensionsThousandEyesNetworkTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    template_user_inputs_tenant: cdktf.stringToTerraform(struct!.templateUserInputsTenant),
  }
}


export function organizationExtensionsThousandEyesNetworkTestsToHclTerraform(struct?: OrganizationExtensionsThousandEyesNetworkTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_user_inputs_tenant: {
      value: cdktf.stringToHclTerraform(struct!.templateUserInputsTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationExtensionsThousandEyesNetworkTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationExtensionsThousandEyesNetworkTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._templateUserInputsTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUserInputsTenant = this._templateUserInputsTenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationExtensionsThousandEyesNetworkTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._templateId = undefined;
      this._templateUserInputsTenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._templateId = value.templateId;
      this._templateUserInputsTenant = value.templateUserInputsTenant;
    }
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_user_inputs_tenant - computed: false, optional: true, required: false
  private _templateUserInputsTenant?: string; 
  public get templateUserInputsTenant() {
    return this.getStringAttribute('template_user_inputs_tenant');
  }
  public set templateUserInputsTenant(value: string) {
    this._templateUserInputsTenant = value;
  }
  public resetTemplateUserInputsTenant() {
    this._templateUserInputsTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUserInputsTenantInput() {
    return this._templateUserInputsTenant;
  }
}

export class OrganizationExtensionsThousandEyesNetworkTestsList extends cdktf.ComplexList {
  public internalValue? : OrganizationExtensionsThousandEyesNetworkTests[] | cdktf.IResolvable

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
  public get(index: number): OrganizationExtensionsThousandEyesNetworkTestsOutputReference {
    return new OrganizationExtensionsThousandEyesNetworkTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network meraki_organization_extensions_thousand_eyes_network}
*/
export class OrganizationExtensionsThousandEyesNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_extensions_thousand_eyes_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationExtensionsThousandEyesNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationExtensionsThousandEyesNetwork to import
  * @param importFromId The id of the existing OrganizationExtensionsThousandEyesNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationExtensionsThousandEyesNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_extensions_thousand_eyes_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_extensions_thousand_eyes_network meraki_organization_extensions_thousand_eyes_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationExtensionsThousandEyesNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationExtensionsThousandEyesNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_extensions_thousand_eyes_network',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
    this._tests.internalValue = config.tests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // tests - computed: false, optional: true, required: false
  private _tests = new OrganizationExtensionsThousandEyesNetworkTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }
  public putTests(value: OrganizationExtensionsThousandEyesNetworkTests[] | cdktf.IResolvable) {
    this._tests.internalValue = value;
  }
  public resetTests() {
    this._tests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      tests: cdktf.listMapper(organizationExtensionsThousandEyesNetworkTestsToTerraform, false)(this._tests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tests: {
        value: cdktf.listMapperHcl(organizationExtensionsThousandEyesNetworkTestsToHclTerraform, false)(this._tests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationExtensionsThousandEyesNetworkTestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
