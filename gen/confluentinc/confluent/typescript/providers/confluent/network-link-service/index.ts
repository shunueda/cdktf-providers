// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLinkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#description NetworkLinkService#description}
  */
  readonly description?: string;
  /**
  * The display name of the Network Link Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#display_name NetworkLinkService#display_name}
  */
  readonly displayName?: string;
  /**
  * accept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#accept NetworkLinkService#accept}
  */
  readonly accept?: NetworkLinkServiceAccept;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#environment NetworkLinkService#environment}
  */
  readonly environment: NetworkLinkServiceEnvironment;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#network NetworkLinkService#network}
  */
  readonly network: NetworkLinkServiceNetwork;
}
export interface NetworkLinkServiceAccept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#environments NetworkLinkService#environments}
  */
  readonly environments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#networks NetworkLinkService#networks}
  */
  readonly networks?: string[];
}

export function networkLinkServiceAcceptToTerraform(struct?: NetworkLinkServiceAcceptOutputReference | NetworkLinkServiceAccept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function networkLinkServiceAcceptToHclTerraform(struct?: NetworkLinkServiceAcceptOutputReference | NetworkLinkServiceAccept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLinkServiceAcceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLinkServiceAccept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLinkServiceAccept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environments = undefined;
      this._networks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environments = value.environments;
      this._networks = value.networks;
    }
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // networks - computed: true, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return cdktf.Fn.tolist(this.getListAttribute('networks'));
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}
export interface NetworkLinkServiceEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#id NetworkLinkService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function networkLinkServiceEnvironmentToTerraform(struct?: NetworkLinkServiceEnvironmentOutputReference | NetworkLinkServiceEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function networkLinkServiceEnvironmentToHclTerraform(struct?: NetworkLinkServiceEnvironmentOutputReference | NetworkLinkServiceEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLinkServiceEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLinkServiceEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLinkServiceEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface NetworkLinkServiceNetwork {
  /**
  * The unique identifier for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#id NetworkLinkService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function networkLinkServiceNetworkToTerraform(struct?: NetworkLinkServiceNetworkOutputReference | NetworkLinkServiceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function networkLinkServiceNetworkToHclTerraform(struct?: NetworkLinkServiceNetworkOutputReference | NetworkLinkServiceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLinkServiceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLinkServiceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLinkServiceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service confluent_network_link_service}
*/
export class NetworkLinkService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_network_link_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLinkService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLinkService to import
  * @param importFromId The id of the existing NetworkLinkService that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLinkService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_network_link_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/network_link_service confluent_network_link_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLinkServiceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLinkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_network_link_service',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
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
    this._displayName = config.displayName;
    this._accept.internalValue = config.accept;
    this._environment.internalValue = config.environment;
    this._network.internalValue = config.network;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // accept - computed: false, optional: true, required: false
  private _accept = new NetworkLinkServiceAcceptOutputReference(this, "accept");
  public get accept() {
    return this._accept;
  }
  public putAccept(value: NetworkLinkServiceAccept) {
    this._accept.internalValue = value;
  }
  public resetAccept() {
    this._accept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new NetworkLinkServiceEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: NetworkLinkServiceEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new NetworkLinkServiceNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: NetworkLinkServiceNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      accept: networkLinkServiceAcceptToTerraform(this._accept.internalValue),
      environment: networkLinkServiceEnvironmentToTerraform(this._environment.internalValue),
      network: networkLinkServiceNetworkToTerraform(this._network.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accept: {
        value: networkLinkServiceAcceptToHclTerraform(this._accept.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLinkServiceAcceptList",
      },
      environment: {
        value: networkLinkServiceEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLinkServiceEnvironmentList",
      },
      network: {
        value: networkLinkServiceNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLinkServiceNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
