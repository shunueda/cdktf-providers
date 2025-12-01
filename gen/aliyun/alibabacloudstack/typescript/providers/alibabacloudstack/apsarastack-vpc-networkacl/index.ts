// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackVpcNetworkaclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#description ApsarastackVpcNetworkacl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#id ApsarastackVpcNetworkacl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#name ApsarastackVpcNetworkacl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#network_acl_name ApsarastackVpcNetworkacl#network_acl_name}
  */
  readonly networkAclName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#vpc_id ApsarastackVpcNetworkacl#vpc_id}
  */
  readonly vpcId: string;
  /**
  * egress_acl_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#egress_acl_entries ApsarastackVpcNetworkacl#egress_acl_entries}
  */
  readonly egressAclEntries?: ApsarastackVpcNetworkaclEgressAclEntries[] | cdktf.IResolvable;
  /**
  * ingress_acl_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#ingress_acl_entries ApsarastackVpcNetworkacl#ingress_acl_entries}
  */
  readonly ingressAclEntries?: ApsarastackVpcNetworkaclIngressAclEntries[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#resources ApsarastackVpcNetworkacl#resources}
  */
  readonly resources?: ApsarastackVpcNetworkaclResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#timeouts ApsarastackVpcNetworkacl#timeouts}
  */
  readonly timeouts?: ApsarastackVpcNetworkaclTimeouts;
}
export interface ApsarastackVpcNetworkaclEgressAclEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#description ApsarastackVpcNetworkacl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#destination_cidr_ip ApsarastackVpcNetworkacl#destination_cidr_ip}
  */
  readonly destinationCidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#network_acl_entry_name ApsarastackVpcNetworkacl#network_acl_entry_name}
  */
  readonly networkAclEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#policy ApsarastackVpcNetworkacl#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#port ApsarastackVpcNetworkacl#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#protocol ApsarastackVpcNetworkacl#protocol}
  */
  readonly protocol?: string;
}

export function apsarastackVpcNetworkaclEgressAclEntriesToTerraform(struct?: ApsarastackVpcNetworkaclEgressAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_cidr_ip: cdktf.stringToTerraform(struct!.destinationCidrIp),
    network_acl_entry_name: cdktf.stringToTerraform(struct!.networkAclEntryName),
    policy: cdktf.stringToTerraform(struct!.policy),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function apsarastackVpcNetworkaclEgressAclEntriesToHclTerraform(struct?: ApsarastackVpcNetworkaclEgressAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_entry_name: {
      value: cdktf.stringToHclTerraform(struct!.networkAclEntryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackVpcNetworkaclEgressAclEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackVpcNetworkaclEgressAclEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrIp = this._destinationCidrIp;
    }
    if (this._networkAclEntryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclEntryName = this._networkAclEntryName;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackVpcNetworkaclEgressAclEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationCidrIp = undefined;
      this._networkAclEntryName = undefined;
      this._policy = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destinationCidrIp = value.destinationCidrIp;
      this._networkAclEntryName = value.networkAclEntryName;
      this._policy = value.policy;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // destination_cidr_ip - computed: false, optional: true, required: false
  private _destinationCidrIp?: string; 
  public get destinationCidrIp() {
    return this.getStringAttribute('destination_cidr_ip');
  }
  public set destinationCidrIp(value: string) {
    this._destinationCidrIp = value;
  }
  public resetDestinationCidrIp() {
    this._destinationCidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrIpInput() {
    return this._destinationCidrIp;
  }

  // network_acl_entry_name - computed: false, optional: true, required: false
  private _networkAclEntryName?: string; 
  public get networkAclEntryName() {
    return this.getStringAttribute('network_acl_entry_name');
  }
  public set networkAclEntryName(value: string) {
    this._networkAclEntryName = value;
  }
  public resetNetworkAclEntryName() {
    this._networkAclEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclEntryNameInput() {
    return this._networkAclEntryName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ApsarastackVpcNetworkaclEgressAclEntriesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackVpcNetworkaclEgressAclEntries[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackVpcNetworkaclEgressAclEntriesOutputReference {
    return new ApsarastackVpcNetworkaclEgressAclEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackVpcNetworkaclIngressAclEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#description ApsarastackVpcNetworkacl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#network_acl_entry_name ApsarastackVpcNetworkacl#network_acl_entry_name}
  */
  readonly networkAclEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#policy ApsarastackVpcNetworkacl#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#port ApsarastackVpcNetworkacl#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#protocol ApsarastackVpcNetworkacl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#source_cidr_ip ApsarastackVpcNetworkacl#source_cidr_ip}
  */
  readonly sourceCidrIp?: string;
}

export function apsarastackVpcNetworkaclIngressAclEntriesToTerraform(struct?: ApsarastackVpcNetworkaclIngressAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network_acl_entry_name: cdktf.stringToTerraform(struct!.networkAclEntryName),
    policy: cdktf.stringToTerraform(struct!.policy),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr_ip: cdktf.stringToTerraform(struct!.sourceCidrIp),
  }
}


export function apsarastackVpcNetworkaclIngressAclEntriesToHclTerraform(struct?: ApsarastackVpcNetworkaclIngressAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_entry_name: {
      value: cdktf.stringToHclTerraform(struct!.networkAclEntryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackVpcNetworkaclIngressAclEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackVpcNetworkaclIngressAclEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._networkAclEntryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclEntryName = this._networkAclEntryName;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidrIp = this._sourceCidrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackVpcNetworkaclIngressAclEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._networkAclEntryName = undefined;
      this._policy = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._sourceCidrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._networkAclEntryName = value.networkAclEntryName;
      this._policy = value.policy;
      this._port = value.port;
      this._protocol = value.protocol;
      this._sourceCidrIp = value.sourceCidrIp;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // network_acl_entry_name - computed: false, optional: true, required: false
  private _networkAclEntryName?: string; 
  public get networkAclEntryName() {
    return this.getStringAttribute('network_acl_entry_name');
  }
  public set networkAclEntryName(value: string) {
    this._networkAclEntryName = value;
  }
  public resetNetworkAclEntryName() {
    this._networkAclEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclEntryNameInput() {
    return this._networkAclEntryName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_cidr_ip - computed: false, optional: true, required: false
  private _sourceCidrIp?: string; 
  public get sourceCidrIp() {
    return this.getStringAttribute('source_cidr_ip');
  }
  public set sourceCidrIp(value: string) {
    this._sourceCidrIp = value;
  }
  public resetSourceCidrIp() {
    this._sourceCidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrIpInput() {
    return this._sourceCidrIp;
  }
}

export class ApsarastackVpcNetworkaclIngressAclEntriesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackVpcNetworkaclIngressAclEntries[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackVpcNetworkaclIngressAclEntriesOutputReference {
    return new ApsarastackVpcNetworkaclIngressAclEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackVpcNetworkaclResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#resource_id ApsarastackVpcNetworkacl#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#resource_type ApsarastackVpcNetworkacl#resource_type}
  */
  readonly resourceType?: string;
}

export function apsarastackVpcNetworkaclResourcesToTerraform(struct?: ApsarastackVpcNetworkaclResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function apsarastackVpcNetworkaclResourcesToHclTerraform(struct?: ApsarastackVpcNetworkaclResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackVpcNetworkaclResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackVpcNetworkaclResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackVpcNetworkaclResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ApsarastackVpcNetworkaclResourcesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackVpcNetworkaclResources[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackVpcNetworkaclResourcesOutputReference {
    return new ApsarastackVpcNetworkaclResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackVpcNetworkaclTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#create ApsarastackVpcNetworkacl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#delete ApsarastackVpcNetworkacl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#update ApsarastackVpcNetworkacl#update}
  */
  readonly update?: string;
}

export function apsarastackVpcNetworkaclTimeoutsToTerraform(struct?: ApsarastackVpcNetworkaclTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apsarastackVpcNetworkaclTimeoutsToHclTerraform(struct?: ApsarastackVpcNetworkaclTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackVpcNetworkaclTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackVpcNetworkaclTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackVpcNetworkaclTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl apsarastack_vpc_networkacl}
*/
export class ApsarastackVpcNetworkacl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_vpc_networkacl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackVpcNetworkacl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackVpcNetworkacl to import
  * @param importFromId The id of the existing ApsarastackVpcNetworkacl that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackVpcNetworkacl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_vpc_networkacl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_vpc_networkacl apsarastack_vpc_networkacl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackVpcNetworkaclConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackVpcNetworkaclConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_vpc_networkacl',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._networkAclName = config.networkAclName;
    this._vpcId = config.vpcId;
    this._egressAclEntries.internalValue = config.egressAclEntries;
    this._ingressAclEntries.internalValue = config.ingressAclEntries;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_acl_name - computed: true, optional: true, required: false
  private _networkAclName?: string; 
  public get networkAclName() {
    return this.getStringAttribute('network_acl_name');
  }
  public set networkAclName(value: string) {
    this._networkAclName = value;
  }
  public resetNetworkAclName() {
    this._networkAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclNameInput() {
    return this._networkAclName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // egress_acl_entries - computed: false, optional: true, required: false
  private _egressAclEntries = new ApsarastackVpcNetworkaclEgressAclEntriesList(this, "egress_acl_entries", false);
  public get egressAclEntries() {
    return this._egressAclEntries;
  }
  public putEgressAclEntries(value: ApsarastackVpcNetworkaclEgressAclEntries[] | cdktf.IResolvable) {
    this._egressAclEntries.internalValue = value;
  }
  public resetEgressAclEntries() {
    this._egressAclEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAclEntriesInput() {
    return this._egressAclEntries.internalValue;
  }

  // ingress_acl_entries - computed: false, optional: true, required: false
  private _ingressAclEntries = new ApsarastackVpcNetworkaclIngressAclEntriesList(this, "ingress_acl_entries", false);
  public get ingressAclEntries() {
    return this._ingressAclEntries;
  }
  public putIngressAclEntries(value: ApsarastackVpcNetworkaclIngressAclEntries[] | cdktf.IResolvable) {
    this._ingressAclEntries.internalValue = value;
  }
  public resetIngressAclEntries() {
    this._ingressAclEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAclEntriesInput() {
    return this._ingressAclEntries.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ApsarastackVpcNetworkaclResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ApsarastackVpcNetworkaclResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackVpcNetworkaclTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackVpcNetworkaclTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_acl_name: cdktf.stringToTerraform(this._networkAclName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      egress_acl_entries: cdktf.listMapper(apsarastackVpcNetworkaclEgressAclEntriesToTerraform, true)(this._egressAclEntries.internalValue),
      ingress_acl_entries: cdktf.listMapper(apsarastackVpcNetworkaclIngressAclEntriesToTerraform, true)(this._ingressAclEntries.internalValue),
      resources: cdktf.listMapper(apsarastackVpcNetworkaclResourcesToTerraform, true)(this._resources.internalValue),
      timeouts: apsarastackVpcNetworkaclTimeoutsToTerraform(this._timeouts.internalValue),
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
      network_acl_name: {
        value: cdktf.stringToHclTerraform(this._networkAclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_acl_entries: {
        value: cdktf.listMapperHcl(apsarastackVpcNetworkaclEgressAclEntriesToHclTerraform, true)(this._egressAclEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackVpcNetworkaclEgressAclEntriesList",
      },
      ingress_acl_entries: {
        value: cdktf.listMapperHcl(apsarastackVpcNetworkaclIngressAclEntriesToHclTerraform, true)(this._ingressAclEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackVpcNetworkaclIngressAclEntriesList",
      },
      resources: {
        value: cdktf.listMapperHcl(apsarastackVpcNetworkaclResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackVpcNetworkaclResourcesList",
      },
      timeouts: {
        value: apsarastackVpcNetworkaclTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackVpcNetworkaclTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
