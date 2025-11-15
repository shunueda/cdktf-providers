// https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoreweaveNetworkingVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc#id DataCoreweaveNetworkingVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCoreweaveNetworkingVpcDhcpDns {
  /**
  * The DNS servers advertised to DHCP clients within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc#servers DataCoreweaveNetworkingVpc#servers}
  */
  readonly servers?: string[];
}

export function dataCoreweaveNetworkingVpcDhcpDnsToTerraform(struct?: DataCoreweaveNetworkingVpcDhcpDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function dataCoreweaveNetworkingVpcDhcpDnsToHclTerraform(struct?: DataCoreweaveNetworkingVpcDhcpDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoreweaveNetworkingVpcDhcpDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveNetworkingVpcDhcpDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveNetworkingVpcDhcpDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servers = value.servers;
    }
  }

  // servers - computed: true, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface DataCoreweaveNetworkingVpcDhcp {
}

export function dataCoreweaveNetworkingVpcDhcpToTerraform(struct?: DataCoreweaveNetworkingVpcDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveNetworkingVpcDhcpToHclTerraform(struct?: DataCoreweaveNetworkingVpcDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveNetworkingVpcDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveNetworkingVpcDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveNetworkingVpcDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataCoreweaveNetworkingVpcDhcpDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
}
export interface DataCoreweaveNetworkingVpcEgress {
}

export function dataCoreweaveNetworkingVpcEgressToTerraform(struct?: DataCoreweaveNetworkingVpcEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveNetworkingVpcEgressToHclTerraform(struct?: DataCoreweaveNetworkingVpcEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveNetworkingVpcEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveNetworkingVpcEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveNetworkingVpcEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_public_access - computed: true, optional: false, required: false
  public get disablePublicAccess() {
    return this.getBooleanAttribute('disable_public_access');
  }
}
export interface DataCoreweaveNetworkingVpcIngress {
}

export function dataCoreweaveNetworkingVpcIngressToTerraform(struct?: DataCoreweaveNetworkingVpcIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveNetworkingVpcIngressToHclTerraform(struct?: DataCoreweaveNetworkingVpcIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveNetworkingVpcIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveNetworkingVpcIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveNetworkingVpcIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_public_services - computed: true, optional: false, required: false
  public get disablePublicServices() {
    return this.getBooleanAttribute('disable_public_services');
  }
}
export interface DataCoreweaveNetworkingVpcVpcPrefixes {
}

export function dataCoreweaveNetworkingVpcVpcPrefixesToTerraform(struct?: DataCoreweaveNetworkingVpcVpcPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveNetworkingVpcVpcPrefixesToHclTerraform(struct?: DataCoreweaveNetworkingVpcVpcPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveNetworkingVpcVpcPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoreweaveNetworkingVpcVpcPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveNetworkingVpcVpcPrefixes | undefined) {
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

export class DataCoreweaveNetworkingVpcVpcPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoreweaveNetworkingVpcVpcPrefixesOutputReference {
    return new DataCoreweaveNetworkingVpcVpcPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc coreweave_networking_vpc}
*/
export class DataCoreweaveNetworkingVpc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_networking_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoreweaveNetworkingVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoreweaveNetworkingVpc to import
  * @param importFromId The id of the existing DataCoreweaveNetworkingVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoreweaveNetworkingVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_networking_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.1/docs/data-sources/networking_vpc coreweave_networking_vpc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoreweaveNetworkingVpcConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoreweaveNetworkingVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_networking_vpc',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
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

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataCoreweaveNetworkingVpcDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataCoreweaveNetworkingVpcEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // host_prefix - computed: true, optional: false, required: false
  public get hostPrefix() {
    return this.getStringAttribute('host_prefix');
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

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataCoreweaveNetworkingVpcIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vpc_prefixes - computed: true, optional: false, required: false
  private _vpcPrefixes = new DataCoreweaveNetworkingVpcVpcPrefixesList(this, "vpc_prefixes", false);
  public get vpcPrefixes() {
    return this._vpcPrefixes;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
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
