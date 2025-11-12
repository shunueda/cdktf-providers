// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmazonWorkspacesCoreHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API key used to authenticate with the AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#api_key AmazonWorkspacesCoreHypervisor#api_key}
  */
  readonly apiKey?: string;
  /**
  * Metadata for the Hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#metadata AmazonWorkspacesCoreHypervisor#metadata}
  */
  readonly metadata?: AmazonWorkspacesCoreHypervisorMetadata[] | cdktf.IResolvable;
  /**
  * Name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#name AmazonWorkspacesCoreHypervisor#name}
  */
  readonly name: string;
  /**
  * AWS region to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#region AmazonWorkspacesCoreHypervisor#region}
  */
  readonly region: string;
  /**
  * The IDs of the scopes for the hypervisor to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#scopes AmazonWorkspacesCoreHypervisor#scopes}
  */
  readonly scopes?: string[];
  /**
  * The secret key used to authenticate with the AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#secret_key AmazonWorkspacesCoreHypervisor#secret_key}
  */
  readonly secretKey?: string;
  /**
  * When set to `true`, the provider will use the IAM role configured on the Citrix Cloud Connector or Delivery Controller instead of the `api_key` and `secret_key` for authentication. Omit this attribute if you want to use `api_key` and `secret_key` for authentication. Default value is `false`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#use_iam_role AmazonWorkspacesCoreHypervisor#use_iam_role}
  */
  readonly useIamRole?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the hypervisor connection will be setup with the proxy configured during connector installation. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#use_system_proxy_for_hypervisor_traffic_on_connectors AmazonWorkspacesCoreHypervisor#use_system_proxy_for_hypervisor_traffic_on_connectors}
  */
  readonly useSystemProxyForHypervisorTrafficOnConnectors?: boolean | cdktf.IResolvable;
  /**
  * Id of the zone the hypervisor is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#zone AmazonWorkspacesCoreHypervisor#zone}
  */
  readonly zone: string;
}
export interface AmazonWorkspacesCoreHypervisorMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#name AmazonWorkspacesCoreHypervisor#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#value AmazonWorkspacesCoreHypervisor#value}
  */
  readonly value: string;
}

export function amazonWorkspacesCoreHypervisorMetadataToTerraform(struct?: AmazonWorkspacesCoreHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function amazonWorkspacesCoreHypervisorMetadataToHclTerraform(struct?: AmazonWorkspacesCoreHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmazonWorkspacesCoreHypervisorMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AmazonWorkspacesCoreHypervisorMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonWorkspacesCoreHypervisorMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AmazonWorkspacesCoreHypervisorMetadataList extends cdktf.ComplexList {
  public internalValue? : AmazonWorkspacesCoreHypervisorMetadata[] | cdktf.IResolvable

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
  public get(index: number): AmazonWorkspacesCoreHypervisorMetadataOutputReference {
    return new AmazonWorkspacesCoreHypervisorMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor citrix_amazon_workspaces_core_hypervisor}
*/
export class AmazonWorkspacesCoreHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_amazon_workspaces_core_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmazonWorkspacesCoreHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmazonWorkspacesCoreHypervisor to import
  * @param importFromId The id of the existing AmazonWorkspacesCoreHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmazonWorkspacesCoreHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_amazon_workspaces_core_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/amazon_workspaces_core_hypervisor citrix_amazon_workspaces_core_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmazonWorkspacesCoreHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: AmazonWorkspacesCoreHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_amazon_workspaces_core_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._scopes = config.scopes;
    this._secretKey = config.secretKey;
    this._useIamRole = config.useIamRole;
    this._useSystemProxyForHypervisorTrafficOnConnectors = config.useSystemProxyForHypervisorTrafficOnConnectors;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AmazonWorkspacesCoreHypervisorMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AmazonWorkspacesCoreHypervisorMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // use_iam_role - computed: true, optional: true, required: false
  private _useIamRole?: boolean | cdktf.IResolvable; 
  public get useIamRole() {
    return this.getBooleanAttribute('use_iam_role');
  }
  public set useIamRole(value: boolean | cdktf.IResolvable) {
    this._useIamRole = value;
  }
  public resetUseIamRole() {
    this._useIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamRoleInput() {
    return this._useIamRole;
  }

  // use_system_proxy_for_hypervisor_traffic_on_connectors - computed: true, optional: true, required: false
  private _useSystemProxyForHypervisorTrafficOnConnectors?: boolean | cdktf.IResolvable; 
  public get useSystemProxyForHypervisorTrafficOnConnectors() {
    return this.getBooleanAttribute('use_system_proxy_for_hypervisor_traffic_on_connectors');
  }
  public set useSystemProxyForHypervisorTrafficOnConnectors(value: boolean | cdktf.IResolvable) {
    this._useSystemProxyForHypervisorTrafficOnConnectors = value;
  }
  public resetUseSystemProxyForHypervisorTrafficOnConnectors() {
    this._useSystemProxyForHypervisorTrafficOnConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemProxyForHypervisorTrafficOnConnectorsInput() {
    return this._useSystemProxyForHypervisorTrafficOnConnectors;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      metadata: cdktf.listMapper(amazonWorkspacesCoreHypervisorMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      use_iam_role: cdktf.booleanToTerraform(this._useIamRole),
      use_system_proxy_for_hypervisor_traffic_on_connectors: cdktf.booleanToTerraform(this._useSystemProxyForHypervisorTrafficOnConnectors),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(amazonWorkspacesCoreHypervisorMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AmazonWorkspacesCoreHypervisorMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_iam_role: {
        value: cdktf.booleanToHclTerraform(this._useIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_system_proxy_for_hypervisor_traffic_on_connectors: {
        value: cdktf.booleanToHclTerraform(this._useSystemProxyForHypervisorTrafficOnConnectors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
