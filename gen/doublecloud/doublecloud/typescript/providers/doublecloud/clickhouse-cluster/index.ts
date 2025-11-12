// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider where the cluster is created. Possible values: `aws` and `gcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#cloud_type ClickhouseCluster#cloud_type}
  */
  readonly cloudType: string;
  /**
  * Cluster description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#description ClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * Cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#id ClickhouseCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#name ClickhouseCluster#name}
  */
  readonly name: string;
  /**
  * ID of the network where the cluster is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#network_id ClickhouseCluster#network_id}
  */
  readonly networkId: string;
  /**
  * ID of the project where the ClickHouse cluster is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#project_id ClickhouseCluster#project_id}
  */
  readonly projectId: string;
  /**
  * ID of the region where resources are created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#region_id ClickhouseCluster#region_id}
  */
  readonly regionId: string;
  /**
  * Version of the ClickHouse DBMS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#version ClickhouseCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#access ClickhouseCluster#access}
  */
  readonly access?: ClickhouseClusterAccess;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#config ClickhouseCluster#config}
  */
  readonly config?: ClickhouseClusterConfigA;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#resources ClickhouseCluster#resources}
  */
  readonly resources?: ClickhouseClusterResources;
}
export interface ClickhouseClusterConnectionInfo {
}

export function clickhouseClusterConnectionInfoToTerraform(struct?: ClickhouseClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clickhouseClusterConnectionInfoToHclTerraform(struct?: ClickhouseClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClickhouseClusterConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // https_uri - computed: true, optional: false, required: false
  public get httpsUri() {
    return this.getStringAttribute('https_uri');
  }

  // jdbc_uri - computed: true, optional: false, required: false
  public get jdbcUri() {
    return this.getStringAttribute('jdbc_uri');
  }

  // native_protocol - computed: true, optional: false, required: false
  public get nativeProtocol() {
    return this.getStringAttribute('native_protocol');
  }

  // odbc_uri - computed: true, optional: false, required: false
  public get odbcUri() {
    return this.getStringAttribute('odbc_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // tcp_port_secure - computed: true, optional: false, required: false
  public get tcpPortSecure() {
    return this.getNumberAttribute('tcp_port_secure');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface ClickhouseClusterPrivateConnectionInfo {
}

export function clickhouseClusterPrivateConnectionInfoToTerraform(struct?: ClickhouseClusterPrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clickhouseClusterPrivateConnectionInfoToHclTerraform(struct?: ClickhouseClusterPrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClickhouseClusterPrivateConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterPrivateConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterPrivateConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // https_uri - computed: true, optional: false, required: false
  public get httpsUri() {
    return this.getStringAttribute('https_uri');
  }

  // jdbc_uri - computed: true, optional: false, required: false
  public get jdbcUri() {
    return this.getStringAttribute('jdbc_uri');
  }

  // native_protocol - computed: true, optional: false, required: false
  public get nativeProtocol() {
    return this.getStringAttribute('native_protocol');
  }

  // odbc_uri - computed: true, optional: false, required: false
  public get odbcUri() {
    return this.getStringAttribute('odbc_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // tcp_port_secure - computed: true, optional: false, required: false
  public get tcpPortSecure() {
    return this.getNumberAttribute('tcp_port_secure');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface ClickhouseClusterAccessIpv4CidrBlocks {
  /**
  * CIDR block description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#description ClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#value ClickhouseCluster#value}
  */
  readonly value: string;
}

export function clickhouseClusterAccessIpv4CidrBlocksToTerraform(struct?: ClickhouseClusterAccessIpv4CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clickhouseClusterAccessIpv4CidrBlocksToHclTerraform(struct?: ClickhouseClusterAccessIpv4CidrBlocks | cdktf.IResolvable): any {
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

export class ClickhouseClusterAccessIpv4CidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterAccessIpv4CidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterAccessIpv4CidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
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

export class ClickhouseClusterAccessIpv4CidrBlocksList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterAccessIpv4CidrBlocksOutputReference {
    return new ClickhouseClusterAccessIpv4CidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterAccessIpv6CidrBlocks {
  /**
  * CIDR block description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#description ClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#value ClickhouseCluster#value}
  */
  readonly value: string;
}

export function clickhouseClusterAccessIpv6CidrBlocksToTerraform(struct?: ClickhouseClusterAccessIpv6CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clickhouseClusterAccessIpv6CidrBlocksToHclTerraform(struct?: ClickhouseClusterAccessIpv6CidrBlocks | cdktf.IResolvable): any {
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

export class ClickhouseClusterAccessIpv6CidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterAccessIpv6CidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterAccessIpv6CidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
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

export class ClickhouseClusterAccessIpv6CidrBlocksList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterAccessIpv6CidrBlocksOutputReference {
    return new ClickhouseClusterAccessIpv6CidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterAccess {
  /**
  * List of allowed services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#data_services ClickhouseCluster#data_services}
  */
  readonly dataServices?: string[];
  /**
  * IPv4 CIDR blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#ipv4_cidr_blocks ClickhouseCluster#ipv4_cidr_blocks}
  */
  readonly ipv4CidrBlocks?: ClickhouseClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable;
  /**
  * IPv6 CIDR blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#ipv6_cidr_blocks ClickhouseCluster#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: ClickhouseClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable;
}

export function clickhouseClusterAccessToTerraform(struct?: ClickhouseClusterAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataServices),
    ipv4_cidr_blocks: cdktf.listMapper(clickhouseClusterAccessIpv4CidrBlocksToTerraform, false)(struct!.ipv4CidrBlocks),
    ipv6_cidr_blocks: cdktf.listMapper(clickhouseClusterAccessIpv6CidrBlocksToTerraform, false)(struct!.ipv6CidrBlocks),
  }
}


export function clickhouseClusterAccessToHclTerraform(struct?: ClickhouseClusterAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_cidr_blocks: {
      value: cdktf.listMapperHcl(clickhouseClusterAccessIpv4CidrBlocksToHclTerraform, false)(struct!.ipv4CidrBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterAccessIpv4CidrBlocksList",
    },
    ipv6_cidr_blocks: {
      value: cdktf.listMapperHcl(clickhouseClusterAccessIpv6CidrBlocksToHclTerraform, false)(struct!.ipv6CidrBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterAccessIpv6CidrBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServices = this._dataServices;
    }
    if (this._ipv4CidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4CidrBlocks = this._ipv4CidrBlocks?.internalValue;
    }
    if (this._ipv6CidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlocks = this._ipv6CidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataServices = undefined;
      this._ipv4CidrBlocks.internalValue = undefined;
      this._ipv6CidrBlocks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataServices = value.dataServices;
      this._ipv4CidrBlocks.internalValue = value.ipv4CidrBlocks;
      this._ipv6CidrBlocks.internalValue = value.ipv6CidrBlocks;
    }
  }

  // data_services - computed: false, optional: true, required: false
  private _dataServices?: string[]; 
  public get dataServices() {
    return this.getListAttribute('data_services');
  }
  public set dataServices(value: string[]) {
    this._dataServices = value;
  }
  public resetDataServices() {
    this._dataServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServicesInput() {
    return this._dataServices;
  }

  // ipv4_cidr_blocks - computed: false, optional: true, required: false
  private _ipv4CidrBlocks = new ClickhouseClusterAccessIpv4CidrBlocksList(this, "ipv4_cidr_blocks", false);
  public get ipv4CidrBlocks() {
    return this._ipv4CidrBlocks;
  }
  public putIpv4CidrBlocks(value: ClickhouseClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable) {
    this._ipv4CidrBlocks.internalValue = value;
  }
  public resetIpv4CidrBlocks() {
    this._ipv4CidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlocksInput() {
    return this._ipv4CidrBlocks.internalValue;
  }

  // ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _ipv6CidrBlocks = new ClickhouseClusterAccessIpv6CidrBlocksList(this, "ipv6_cidr_blocks", false);
  public get ipv6CidrBlocks() {
    return this._ipv6CidrBlocks;
  }
  public putIpv6CidrBlocks(value: ClickhouseClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable) {
    this._ipv6CidrBlocks.internalValue = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks.internalValue;
  }
}
export interface ClickhouseClusterConfigKafka {
  /**
  * Enable SSL certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#enable_ssl_certificate_verification ClickhouseCluster#enable_ssl_certificate_verification}
  */
  readonly enableSslCertificateVerification?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval in milliseconds between making poll calls to get messages for high-level consumers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_poll_interval_ms ClickhouseCluster#max_poll_interval_ms}
  */
  readonly maxPollIntervalMs?: string;
  /**
  * SASL authentication mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#sasl_mechanism ClickhouseCluster#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Apache Kafka® account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#sasl_password ClickhouseCluster#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Apache Kafka® account username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#sasl_username ClickhouseCluster#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Security protocol used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#security_protocol ClickhouseCluster#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Timeout to maintain a client group session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#session_timeout_ms ClickhouseCluster#session_timeout_ms}
  */
  readonly sessionTimeoutMs?: string;
}

export function clickhouseClusterConfigKafkaToTerraform(struct?: ClickhouseClusterConfigKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ssl_certificate_verification: cdktf.booleanToTerraform(struct!.enableSslCertificateVerification),
    max_poll_interval_ms: cdktf.stringToTerraform(struct!.maxPollIntervalMs),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    session_timeout_ms: cdktf.stringToTerraform(struct!.sessionTimeoutMs),
  }
}


export function clickhouseClusterConfigKafkaToHclTerraform(struct?: ClickhouseClusterConfigKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ssl_certificate_verification: {
      value: cdktf.booleanToHclTerraform(struct!.enableSslCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_poll_interval_ms: {
      value: cdktf.stringToHclTerraform(struct!.maxPollIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktf.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_ms: {
      value: cdktf.stringToHclTerraform(struct!.sessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterConfigKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSslCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSslCertificateVerification = this._enableSslCertificateVerification;
    }
    if (this._maxPollIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPollIntervalMs = this._maxPollIntervalMs;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMs = this._sessionTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterConfigKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSslCertificateVerification = undefined;
      this._maxPollIntervalMs = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
      this._sessionTimeoutMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSslCertificateVerification = value.enableSslCertificateVerification;
      this._maxPollIntervalMs = value.maxPollIntervalMs;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
      this._sessionTimeoutMs = value.sessionTimeoutMs;
    }
  }

  // enable_ssl_certificate_verification - computed: true, optional: true, required: false
  private _enableSslCertificateVerification?: boolean | cdktf.IResolvable; 
  public get enableSslCertificateVerification() {
    return this.getBooleanAttribute('enable_ssl_certificate_verification');
  }
  public set enableSslCertificateVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslCertificateVerification = value;
  }
  public resetEnableSslCertificateVerification() {
    this._enableSslCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslCertificateVerificationInput() {
    return this._enableSslCertificateVerification;
  }

  // max_poll_interval_ms - computed: false, optional: true, required: false
  private _maxPollIntervalMs?: string; 
  public get maxPollIntervalMs() {
    return this.getStringAttribute('max_poll_interval_ms');
  }
  public set maxPollIntervalMs(value: string) {
    this._maxPollIntervalMs = value;
  }
  public resetMaxPollIntervalMs() {
    this._maxPollIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPollIntervalMsInput() {
    return this._maxPollIntervalMs;
  }

  // sasl_mechanism - computed: true, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: true, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // session_timeout_ms - computed: false, optional: true, required: false
  private _sessionTimeoutMs?: string; 
  public get sessionTimeoutMs() {
    return this.getStringAttribute('session_timeout_ms');
  }
  public set sessionTimeoutMs(value: string) {
    this._sessionTimeoutMs = value;
  }
  public resetSessionTimeoutMs() {
    this._sessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMsInput() {
    return this._sessionTimeoutMs;
  }
}
export interface ClickhouseClusterConfigA {
  /**
  * Enable logging asynchronous inserts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_insert_log_enabled ClickhouseCluster#asynchronous_insert_log_enabled}
  */
  readonly asynchronousInsertLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the asynchronous insert log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_insert_log_retention_size ClickhouseCluster#asynchronous_insert_log_retention_size}
  */
  readonly asynchronousInsertLogRetentionSize?: number;
  /**
  * Retention time of the asynchronous insert log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_insert_log_retention_time ClickhouseCluster#asynchronous_insert_log_retention_time}
  */
  readonly asynchronousInsertLogRetentionTime?: string;
  /**
  * Enable logging asynchronous metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_metric_log_enabled ClickhouseCluster#asynchronous_metric_log_enabled}
  */
  readonly asynchronousMetricLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the asynchronous insert log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_metric_log_retention_size ClickhouseCluster#asynchronous_metric_log_retention_size}
  */
  readonly asynchronousMetricLogRetentionSize?: number;
  /**
  * Retention time of the asynchronous insert log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#asynchronous_metric_log_retention_time ClickhouseCluster#asynchronous_metric_log_retention_time}
  */
  readonly asynchronousMetricLogRetentionTime?: string;
  /**
  * Number of threads performing various operations (mostly garbage collection) for tables with MergeTree engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_common_pool_size ClickhouseCluster#background_common_pool_size}
  */
  readonly backgroundCommonPoolSize?: number;
  /**
  * Number of threads performing background fetches for replicated tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_fetches_pool_size ClickhouseCluster#background_fetches_pool_size}
  */
  readonly backgroundFetchesPoolSize?: number;
  /**
  * Ratio of the number of threads to the number of background merges and mutations that can be executed concurrently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_merges_mutations_concurrency_ratio ClickhouseCluster#background_merges_mutations_concurrency_ratio}
  */
  readonly backgroundMergesMutationsConcurrencyRatio?: number;
  /**
  * Number of threads for executing background message translation operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_message_broker_schedule_pool_size ClickhouseCluster#background_message_broker_schedule_pool_size}
  */
  readonly backgroundMessageBrokerSchedulePoolSize?: number;
  /**
  * Number of threads performing background moves of data parts for tables with MergeTree engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_move_pool_size ClickhouseCluster#background_move_pool_size}
  */
  readonly backgroundMovePoolSize?: number;
  /**
  * Number of threads performing background merges and mutations for tables with MergeTree engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_pool_size ClickhouseCluster#background_pool_size}
  */
  readonly backgroundPoolSize?: number;
  /**
  * Number of threads for background jobs for replicated tables, streams in Apache Kafka, and DNS cache updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#background_schedule_pool_size ClickhouseCluster#background_schedule_pool_size}
  */
  readonly backgroundSchedulePoolSize?: number;
  /**
  * Time in seconds for which ClickHouse waits for incoming requests before closing the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#keep_alive_timeout ClickhouseCluster#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: string;
  /**
  * Level of logged events, such as `ERROR` or `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#log_level ClickhouseCluster#log_level}
  */
  readonly logLevel?: string;
  /**
  * Approximate size in bytes of the mark cache used by table engines in the MergeTree family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#mark_cache_size ClickhouseCluster#mark_cache_size}
  */
  readonly markCacheSize?: number;
  /**
  * Maximum number of requests processed simultaneously
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_concurrent_queries ClickhouseCluster#max_concurrent_queries}
  */
  readonly maxConcurrentQueries?: number;
  /**
  * Maximum number of inbound client connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_connections ClickhouseCluster#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Maximum partition size in bytes for the MergeTree family at which a table can be deleted using the `DROP TABLE` query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_partition_size_to_drop ClickhouseCluster#max_partition_size_to_drop}
  */
  readonly maxPartitionSizeToDrop?: number;
  /**
  * Maximum size in bytes of a table in the MergeTree family that can be deleted using the `DROP TABLE` query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_table_size_to_drop ClickhouseCluster#max_table_size_to_drop}
  */
  readonly maxTableSizeToDrop?: number;
  /**
  * Enable logging metric values from the `system.metrics` and the `system.events` tables to `system.metric_log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#metric_log_enabled ClickhouseCluster#metric_log_enabled}
  */
  readonly metricLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the metric log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#metric_log_retention_size ClickhouseCluster#metric_log_retention_size}
  */
  readonly metricLogRetentionSize?: number;
  /**
  * Retention time of the metric log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#metric_log_retention_time ClickhouseCluster#metric_log_retention_time}
  */
  readonly metricLogRetentionTime?: string;
  /**
  * Enable log trace and metric values from a distributed application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#opentelemetry_span_log_enabled ClickhouseCluster#opentelemetry_span_log_enabled}
  */
  readonly opentelemetrySpanLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the opentelemetry span log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#opentelemetry_span_log_retention_size ClickhouseCluster#opentelemetry_span_log_retention_size}
  */
  readonly opentelemetrySpanLogRetentionSize?: number;
  /**
  * Retention time of the opentelemetry span log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#opentelemetry_span_log_retention_time ClickhouseCluster#opentelemetry_span_log_retention_time}
  */
  readonly opentelemetrySpanLogRetentionTime?: string;
  /**
  * Maximum size of the part log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#part_log_retention_size ClickhouseCluster#part_log_retention_size}
  */
  readonly partLogRetentionSize?: number;
  /**
  * Retention time of the part log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#part_log_retention_time ClickhouseCluster#part_log_retention_time}
  */
  readonly partLogRetentionTime?: string;
  /**
  * Maximum size of the query log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_log_retention_size ClickhouseCluster#query_log_retention_size}
  */
  readonly queryLogRetentionSize?: number;
  /**
  * Retention time of the query log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_log_retention_time ClickhouseCluster#query_log_retention_time}
  */
  readonly queryLogRetentionTime?: string;
  /**
  * Enable logging query threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_thread_log_enabled ClickhouseCluster#query_thread_log_enabled}
  */
  readonly queryThreadLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the query thread log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_thread_log_retention_size ClickhouseCluster#query_thread_log_retention_size}
  */
  readonly queryThreadLogRetentionSize?: number;
  /**
  * Retention time of the query thread log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_thread_log_retention_time ClickhouseCluster#query_thread_log_retention_time}
  */
  readonly queryThreadLogRetentionTime?: string;
  /**
  * Enable logging query views
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_views_log_enabled ClickhouseCluster#query_views_log_enabled}
  */
  readonly queryViewsLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the query views log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_views_log_retention_size ClickhouseCluster#query_views_log_retention_size}
  */
  readonly queryViewsLogRetentionSize?: number;
  /**
  * Retention time of the query views log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#query_views_log_retention_time ClickhouseCluster#query_views_log_retention_time}
  */
  readonly queryViewsLogRetentionTime?: string;
  /**
  * Enable logging successful and failed login/logout events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#session_log_enabled ClickhouseCluster#session_log_enabled}
  */
  readonly sessionLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the session log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#session_log_retention_size ClickhouseCluster#session_log_retention_size}
  */
  readonly sessionLogRetentionSize?: number;
  /**
  * Retention time of the session log in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#session_log_retention_time ClickhouseCluster#session_log_retention_time}
  */
  readonly sessionLogRetentionTime?: string;
  /**
  * Enable system logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#text_log_enabled ClickhouseCluster#text_log_enabled}
  */
  readonly textLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Level of logging, such as `ERROR` or `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#text_log_level ClickhouseCluster#text_log_level}
  */
  readonly textLogLevel?: string;
  /**
  * Maximum size of the text log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#text_log_retention_size ClickhouseCluster#text_log_retention_size}
  */
  readonly textLogRetentionSize?: number;
  /**
  * Retention time of the text log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#text_log_retention_time ClickhouseCluster#text_log_retention_time}
  */
  readonly textLogRetentionTime?: string;
  /**
  * Cluster time zone from the IANA Time Zone Database, such as `Africa/Abidjan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#timezone ClickhouseCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * RAM in bytes for a stack trace at each memory allocation step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#total_memory_profiler_step ClickhouseCluster#total_memory_profiler_step}
  */
  readonly totalMemoryProfilerStep?: number;
  /**
  * Allows collecting and logging informaiton about random memory allocation and release with the specified probability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#total_memory_tracker_sample_probability ClickhouseCluster#total_memory_tracker_sample_probability}
  */
  readonly totalMemoryTrackerSampleProbability?: number;
  /**
  * Enable logging stack traces collected by the query profiler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#trace_log_enabled ClickhouseCluster#trace_log_enabled}
  */
  readonly traceLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the trace log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#trace_log_retention_size ClickhouseCluster#trace_log_retention_size}
  */
  readonly traceLogRetentionSize?: number;
  /**
  * Retention time of the trace log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#trace_log_retention_time ClickhouseCluster#trace_log_retention_time}
  */
  readonly traceLogRetentionTime?: string;
  /**
  * Cache size in bytes for uncompressed data used by table engines in the MergeTree family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#uncompressed_cache_size ClickhouseCluster#uncompressed_cache_size}
  */
  readonly uncompressedCacheSize?: number;
  /**
  * Enable logging parameters of requests to the ZooKeeper server and responses from it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#zookeeper_log_enabled ClickhouseCluster#zookeeper_log_enabled}
  */
  readonly zookeeperLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the ZooKeeper log table in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#zookeeper_log_retention_size ClickhouseCluster#zookeeper_log_retention_size}
  */
  readonly zookeeperLogRetentionSize?: number;
  /**
  * Retention time of the ZooKeeper log table in the duration string format, such as `2h45m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#zookeeper_log_retention_time ClickhouseCluster#zookeeper_log_retention_time}
  */
  readonly zookeeperLogRetentionTime?: string;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#kafka ClickhouseCluster#kafka}
  */
  readonly kafka?: ClickhouseClusterConfigKafka;
}

export function clickhouseClusterConfigAToTerraform(struct?: ClickhouseClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asynchronous_insert_log_enabled: cdktf.booleanToTerraform(struct!.asynchronousInsertLogEnabled),
    asynchronous_insert_log_retention_size: cdktf.numberToTerraform(struct!.asynchronousInsertLogRetentionSize),
    asynchronous_insert_log_retention_time: cdktf.stringToTerraform(struct!.asynchronousInsertLogRetentionTime),
    asynchronous_metric_log_enabled: cdktf.booleanToTerraform(struct!.asynchronousMetricLogEnabled),
    asynchronous_metric_log_retention_size: cdktf.numberToTerraform(struct!.asynchronousMetricLogRetentionSize),
    asynchronous_metric_log_retention_time: cdktf.stringToTerraform(struct!.asynchronousMetricLogRetentionTime),
    background_common_pool_size: cdktf.numberToTerraform(struct!.backgroundCommonPoolSize),
    background_fetches_pool_size: cdktf.numberToTerraform(struct!.backgroundFetchesPoolSize),
    background_merges_mutations_concurrency_ratio: cdktf.numberToTerraform(struct!.backgroundMergesMutationsConcurrencyRatio),
    background_message_broker_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundMessageBrokerSchedulePoolSize),
    background_move_pool_size: cdktf.numberToTerraform(struct!.backgroundMovePoolSize),
    background_pool_size: cdktf.numberToTerraform(struct!.backgroundPoolSize),
    background_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundSchedulePoolSize),
    keep_alive_timeout: cdktf.stringToTerraform(struct!.keepAliveTimeout),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mark_cache_size: cdktf.numberToTerraform(struct!.markCacheSize),
    max_concurrent_queries: cdktf.numberToTerraform(struct!.maxConcurrentQueries),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_partition_size_to_drop: cdktf.numberToTerraform(struct!.maxPartitionSizeToDrop),
    max_table_size_to_drop: cdktf.numberToTerraform(struct!.maxTableSizeToDrop),
    metric_log_enabled: cdktf.booleanToTerraform(struct!.metricLogEnabled),
    metric_log_retention_size: cdktf.numberToTerraform(struct!.metricLogRetentionSize),
    metric_log_retention_time: cdktf.stringToTerraform(struct!.metricLogRetentionTime),
    opentelemetry_span_log_enabled: cdktf.booleanToTerraform(struct!.opentelemetrySpanLogEnabled),
    opentelemetry_span_log_retention_size: cdktf.numberToTerraform(struct!.opentelemetrySpanLogRetentionSize),
    opentelemetry_span_log_retention_time: cdktf.stringToTerraform(struct!.opentelemetrySpanLogRetentionTime),
    part_log_retention_size: cdktf.numberToTerraform(struct!.partLogRetentionSize),
    part_log_retention_time: cdktf.stringToTerraform(struct!.partLogRetentionTime),
    query_log_retention_size: cdktf.numberToTerraform(struct!.queryLogRetentionSize),
    query_log_retention_time: cdktf.stringToTerraform(struct!.queryLogRetentionTime),
    query_thread_log_enabled: cdktf.booleanToTerraform(struct!.queryThreadLogEnabled),
    query_thread_log_retention_size: cdktf.numberToTerraform(struct!.queryThreadLogRetentionSize),
    query_thread_log_retention_time: cdktf.stringToTerraform(struct!.queryThreadLogRetentionTime),
    query_views_log_enabled: cdktf.booleanToTerraform(struct!.queryViewsLogEnabled),
    query_views_log_retention_size: cdktf.numberToTerraform(struct!.queryViewsLogRetentionSize),
    query_views_log_retention_time: cdktf.stringToTerraform(struct!.queryViewsLogRetentionTime),
    session_log_enabled: cdktf.booleanToTerraform(struct!.sessionLogEnabled),
    session_log_retention_size: cdktf.numberToTerraform(struct!.sessionLogRetentionSize),
    session_log_retention_time: cdktf.stringToTerraform(struct!.sessionLogRetentionTime),
    text_log_enabled: cdktf.booleanToTerraform(struct!.textLogEnabled),
    text_log_level: cdktf.stringToTerraform(struct!.textLogLevel),
    text_log_retention_size: cdktf.numberToTerraform(struct!.textLogRetentionSize),
    text_log_retention_time: cdktf.stringToTerraform(struct!.textLogRetentionTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    total_memory_profiler_step: cdktf.numberToTerraform(struct!.totalMemoryProfilerStep),
    total_memory_tracker_sample_probability: cdktf.numberToTerraform(struct!.totalMemoryTrackerSampleProbability),
    trace_log_enabled: cdktf.booleanToTerraform(struct!.traceLogEnabled),
    trace_log_retention_size: cdktf.numberToTerraform(struct!.traceLogRetentionSize),
    trace_log_retention_time: cdktf.stringToTerraform(struct!.traceLogRetentionTime),
    uncompressed_cache_size: cdktf.numberToTerraform(struct!.uncompressedCacheSize),
    zookeeper_log_enabled: cdktf.booleanToTerraform(struct!.zookeeperLogEnabled),
    zookeeper_log_retention_size: cdktf.numberToTerraform(struct!.zookeeperLogRetentionSize),
    zookeeper_log_retention_time: cdktf.stringToTerraform(struct!.zookeeperLogRetentionTime),
    kafka: clickhouseClusterConfigKafkaToTerraform(struct!.kafka),
  }
}


export function clickhouseClusterConfigAToHclTerraform(struct?: ClickhouseClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asynchronous_insert_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.asynchronousInsertLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asynchronous_insert_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousInsertLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asynchronous_insert_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.asynchronousInsertLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asynchronous_metric_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.asynchronousMetricLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asynchronous_metric_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousMetricLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asynchronous_metric_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.asynchronousMetricLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_common_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundCommonPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_fetches_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundFetchesPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_merges_mutations_concurrency_ratio: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMergesMutationsConcurrencyRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_message_broker_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMessageBrokerSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_move_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMovePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.keepAliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mark_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.markCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_partition_size_to_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionSizeToDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_table_size_to_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxTableSizeToDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.metricLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.metricLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.metricLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opentelemetry_span_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.opentelemetrySpanLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opentelemetry_span_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.opentelemetrySpanLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opentelemetry_span_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.opentelemetrySpanLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    part_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.partLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    part_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.partLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.queryLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_thread_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryThreadLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_thread_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryThreadLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_thread_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.queryThreadLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_views_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryViewsLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_views_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryViewsLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_views_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.queryViewsLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.sessionLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.sessionLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.textLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_log_level: {
      value: cdktf.stringToHclTerraform(struct!.textLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.textLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.textLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_memory_profiler_step: {
      value: cdktf.numberToHclTerraform(struct!.totalMemoryProfilerStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memory_tracker_sample_probability: {
      value: cdktf.numberToHclTerraform(struct!.totalMemoryTrackerSampleProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.traceLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.traceLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.traceLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zookeeperLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zookeeper_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_log_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka: {
      value: clickhouseClusterConfigKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "ClickhouseClusterConfigKafka",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asynchronousInsertLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogEnabled = this._asynchronousInsertLogEnabled;
    }
    if (this._asynchronousInsertLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogRetentionSize = this._asynchronousInsertLogRetentionSize;
    }
    if (this._asynchronousInsertLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogRetentionTime = this._asynchronousInsertLogRetentionTime;
    }
    if (this._asynchronousMetricLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogEnabled = this._asynchronousMetricLogEnabled;
    }
    if (this._asynchronousMetricLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogRetentionSize = this._asynchronousMetricLogRetentionSize;
    }
    if (this._asynchronousMetricLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogRetentionTime = this._asynchronousMetricLogRetentionTime;
    }
    if (this._backgroundCommonPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundCommonPoolSize = this._backgroundCommonPoolSize;
    }
    if (this._backgroundFetchesPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundFetchesPoolSize = this._backgroundFetchesPoolSize;
    }
    if (this._backgroundMergesMutationsConcurrencyRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMergesMutationsConcurrencyRatio = this._backgroundMergesMutationsConcurrencyRatio;
    }
    if (this._backgroundMessageBrokerSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMessageBrokerSchedulePoolSize = this._backgroundMessageBrokerSchedulePoolSize;
    }
    if (this._backgroundMovePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMovePoolSize = this._backgroundMovePoolSize;
    }
    if (this._backgroundPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundPoolSize = this._backgroundPoolSize;
    }
    if (this._backgroundSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundSchedulePoolSize = this._backgroundSchedulePoolSize;
    }
    if (this._keepAliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._markCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.markCacheSize = this._markCacheSize;
    }
    if (this._maxConcurrentQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentQueries = this._maxConcurrentQueries;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPartitionSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionSizeToDrop = this._maxPartitionSizeToDrop;
    }
    if (this._maxTableSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTableSizeToDrop = this._maxTableSizeToDrop;
    }
    if (this._metricLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogEnabled = this._metricLogEnabled;
    }
    if (this._metricLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionSize = this._metricLogRetentionSize;
    }
    if (this._metricLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionTime = this._metricLogRetentionTime;
    }
    if (this._opentelemetrySpanLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogEnabled = this._opentelemetrySpanLogEnabled;
    }
    if (this._opentelemetrySpanLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogRetentionSize = this._opentelemetrySpanLogRetentionSize;
    }
    if (this._opentelemetrySpanLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogRetentionTime = this._opentelemetrySpanLogRetentionTime;
    }
    if (this._partLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionSize = this._partLogRetentionSize;
    }
    if (this._partLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionTime = this._partLogRetentionTime;
    }
    if (this._queryLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionSize = this._queryLogRetentionSize;
    }
    if (this._queryLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionTime = this._queryLogRetentionTime;
    }
    if (this._queryThreadLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogEnabled = this._queryThreadLogEnabled;
    }
    if (this._queryThreadLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionSize = this._queryThreadLogRetentionSize;
    }
    if (this._queryThreadLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionTime = this._queryThreadLogRetentionTime;
    }
    if (this._queryViewsLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogEnabled = this._queryViewsLogEnabled;
    }
    if (this._queryViewsLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogRetentionSize = this._queryViewsLogRetentionSize;
    }
    if (this._queryViewsLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogRetentionTime = this._queryViewsLogRetentionTime;
    }
    if (this._sessionLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogEnabled = this._sessionLogEnabled;
    }
    if (this._sessionLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogRetentionSize = this._sessionLogRetentionSize;
    }
    if (this._sessionLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogRetentionTime = this._sessionLogRetentionTime;
    }
    if (this._textLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogEnabled = this._textLogEnabled;
    }
    if (this._textLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogLevel = this._textLogLevel;
    }
    if (this._textLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionSize = this._textLogRetentionSize;
    }
    if (this._textLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionTime = this._textLogRetentionTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._totalMemoryProfilerStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemoryProfilerStep = this._totalMemoryProfilerStep;
    }
    if (this._totalMemoryTrackerSampleProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemoryTrackerSampleProbability = this._totalMemoryTrackerSampleProbability;
    }
    if (this._traceLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogEnabled = this._traceLogEnabled;
    }
    if (this._traceLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionSize = this._traceLogRetentionSize;
    }
    if (this._traceLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionTime = this._traceLogRetentionTime;
    }
    if (this._uncompressedCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedCacheSize = this._uncompressedCacheSize;
    }
    if (this._zookeeperLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogEnabled = this._zookeeperLogEnabled;
    }
    if (this._zookeeperLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogRetentionSize = this._zookeeperLogRetentionSize;
    }
    if (this._zookeeperLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogRetentionTime = this._zookeeperLogRetentionTime;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asynchronousInsertLogEnabled = undefined;
      this._asynchronousInsertLogRetentionSize = undefined;
      this._asynchronousInsertLogRetentionTime = undefined;
      this._asynchronousMetricLogEnabled = undefined;
      this._asynchronousMetricLogRetentionSize = undefined;
      this._asynchronousMetricLogRetentionTime = undefined;
      this._backgroundCommonPoolSize = undefined;
      this._backgroundFetchesPoolSize = undefined;
      this._backgroundMergesMutationsConcurrencyRatio = undefined;
      this._backgroundMessageBrokerSchedulePoolSize = undefined;
      this._backgroundMovePoolSize = undefined;
      this._backgroundPoolSize = undefined;
      this._backgroundSchedulePoolSize = undefined;
      this._keepAliveTimeout = undefined;
      this._logLevel = undefined;
      this._markCacheSize = undefined;
      this._maxConcurrentQueries = undefined;
      this._maxConnections = undefined;
      this._maxPartitionSizeToDrop = undefined;
      this._maxTableSizeToDrop = undefined;
      this._metricLogEnabled = undefined;
      this._metricLogRetentionSize = undefined;
      this._metricLogRetentionTime = undefined;
      this._opentelemetrySpanLogEnabled = undefined;
      this._opentelemetrySpanLogRetentionSize = undefined;
      this._opentelemetrySpanLogRetentionTime = undefined;
      this._partLogRetentionSize = undefined;
      this._partLogRetentionTime = undefined;
      this._queryLogRetentionSize = undefined;
      this._queryLogRetentionTime = undefined;
      this._queryThreadLogEnabled = undefined;
      this._queryThreadLogRetentionSize = undefined;
      this._queryThreadLogRetentionTime = undefined;
      this._queryViewsLogEnabled = undefined;
      this._queryViewsLogRetentionSize = undefined;
      this._queryViewsLogRetentionTime = undefined;
      this._sessionLogEnabled = undefined;
      this._sessionLogRetentionSize = undefined;
      this._sessionLogRetentionTime = undefined;
      this._textLogEnabled = undefined;
      this._textLogLevel = undefined;
      this._textLogRetentionSize = undefined;
      this._textLogRetentionTime = undefined;
      this._timezone = undefined;
      this._totalMemoryProfilerStep = undefined;
      this._totalMemoryTrackerSampleProbability = undefined;
      this._traceLogEnabled = undefined;
      this._traceLogRetentionSize = undefined;
      this._traceLogRetentionTime = undefined;
      this._uncompressedCacheSize = undefined;
      this._zookeeperLogEnabled = undefined;
      this._zookeeperLogRetentionSize = undefined;
      this._zookeeperLogRetentionTime = undefined;
      this._kafka.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asynchronousInsertLogEnabled = value.asynchronousInsertLogEnabled;
      this._asynchronousInsertLogRetentionSize = value.asynchronousInsertLogRetentionSize;
      this._asynchronousInsertLogRetentionTime = value.asynchronousInsertLogRetentionTime;
      this._asynchronousMetricLogEnabled = value.asynchronousMetricLogEnabled;
      this._asynchronousMetricLogRetentionSize = value.asynchronousMetricLogRetentionSize;
      this._asynchronousMetricLogRetentionTime = value.asynchronousMetricLogRetentionTime;
      this._backgroundCommonPoolSize = value.backgroundCommonPoolSize;
      this._backgroundFetchesPoolSize = value.backgroundFetchesPoolSize;
      this._backgroundMergesMutationsConcurrencyRatio = value.backgroundMergesMutationsConcurrencyRatio;
      this._backgroundMessageBrokerSchedulePoolSize = value.backgroundMessageBrokerSchedulePoolSize;
      this._backgroundMovePoolSize = value.backgroundMovePoolSize;
      this._backgroundPoolSize = value.backgroundPoolSize;
      this._backgroundSchedulePoolSize = value.backgroundSchedulePoolSize;
      this._keepAliveTimeout = value.keepAliveTimeout;
      this._logLevel = value.logLevel;
      this._markCacheSize = value.markCacheSize;
      this._maxConcurrentQueries = value.maxConcurrentQueries;
      this._maxConnections = value.maxConnections;
      this._maxPartitionSizeToDrop = value.maxPartitionSizeToDrop;
      this._maxTableSizeToDrop = value.maxTableSizeToDrop;
      this._metricLogEnabled = value.metricLogEnabled;
      this._metricLogRetentionSize = value.metricLogRetentionSize;
      this._metricLogRetentionTime = value.metricLogRetentionTime;
      this._opentelemetrySpanLogEnabled = value.opentelemetrySpanLogEnabled;
      this._opentelemetrySpanLogRetentionSize = value.opentelemetrySpanLogRetentionSize;
      this._opentelemetrySpanLogRetentionTime = value.opentelemetrySpanLogRetentionTime;
      this._partLogRetentionSize = value.partLogRetentionSize;
      this._partLogRetentionTime = value.partLogRetentionTime;
      this._queryLogRetentionSize = value.queryLogRetentionSize;
      this._queryLogRetentionTime = value.queryLogRetentionTime;
      this._queryThreadLogEnabled = value.queryThreadLogEnabled;
      this._queryThreadLogRetentionSize = value.queryThreadLogRetentionSize;
      this._queryThreadLogRetentionTime = value.queryThreadLogRetentionTime;
      this._queryViewsLogEnabled = value.queryViewsLogEnabled;
      this._queryViewsLogRetentionSize = value.queryViewsLogRetentionSize;
      this._queryViewsLogRetentionTime = value.queryViewsLogRetentionTime;
      this._sessionLogEnabled = value.sessionLogEnabled;
      this._sessionLogRetentionSize = value.sessionLogRetentionSize;
      this._sessionLogRetentionTime = value.sessionLogRetentionTime;
      this._textLogEnabled = value.textLogEnabled;
      this._textLogLevel = value.textLogLevel;
      this._textLogRetentionSize = value.textLogRetentionSize;
      this._textLogRetentionTime = value.textLogRetentionTime;
      this._timezone = value.timezone;
      this._totalMemoryProfilerStep = value.totalMemoryProfilerStep;
      this._totalMemoryTrackerSampleProbability = value.totalMemoryTrackerSampleProbability;
      this._traceLogEnabled = value.traceLogEnabled;
      this._traceLogRetentionSize = value.traceLogRetentionSize;
      this._traceLogRetentionTime = value.traceLogRetentionTime;
      this._uncompressedCacheSize = value.uncompressedCacheSize;
      this._zookeeperLogEnabled = value.zookeeperLogEnabled;
      this._zookeeperLogRetentionSize = value.zookeeperLogRetentionSize;
      this._zookeeperLogRetentionTime = value.zookeeperLogRetentionTime;
      this._kafka.internalValue = value.kafka;
    }
  }

  // asynchronous_insert_log_enabled - computed: false, optional: true, required: false
  private _asynchronousInsertLogEnabled?: boolean | cdktf.IResolvable; 
  public get asynchronousInsertLogEnabled() {
    return this.getBooleanAttribute('asynchronous_insert_log_enabled');
  }
  public set asynchronousInsertLogEnabled(value: boolean | cdktf.IResolvable) {
    this._asynchronousInsertLogEnabled = value;
  }
  public resetAsynchronousInsertLogEnabled() {
    this._asynchronousInsertLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogEnabledInput() {
    return this._asynchronousInsertLogEnabled;
  }

  // asynchronous_insert_log_retention_size - computed: false, optional: true, required: false
  private _asynchronousInsertLogRetentionSize?: number; 
  public get asynchronousInsertLogRetentionSize() {
    return this.getNumberAttribute('asynchronous_insert_log_retention_size');
  }
  public set asynchronousInsertLogRetentionSize(value: number) {
    this._asynchronousInsertLogRetentionSize = value;
  }
  public resetAsynchronousInsertLogRetentionSize() {
    this._asynchronousInsertLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogRetentionSizeInput() {
    return this._asynchronousInsertLogRetentionSize;
  }

  // asynchronous_insert_log_retention_time - computed: false, optional: true, required: false
  private _asynchronousInsertLogRetentionTime?: string; 
  public get asynchronousInsertLogRetentionTime() {
    return this.getStringAttribute('asynchronous_insert_log_retention_time');
  }
  public set asynchronousInsertLogRetentionTime(value: string) {
    this._asynchronousInsertLogRetentionTime = value;
  }
  public resetAsynchronousInsertLogRetentionTime() {
    this._asynchronousInsertLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogRetentionTimeInput() {
    return this._asynchronousInsertLogRetentionTime;
  }

  // asynchronous_metric_log_enabled - computed: false, optional: true, required: false
  private _asynchronousMetricLogEnabled?: boolean | cdktf.IResolvable; 
  public get asynchronousMetricLogEnabled() {
    return this.getBooleanAttribute('asynchronous_metric_log_enabled');
  }
  public set asynchronousMetricLogEnabled(value: boolean | cdktf.IResolvable) {
    this._asynchronousMetricLogEnabled = value;
  }
  public resetAsynchronousMetricLogEnabled() {
    this._asynchronousMetricLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogEnabledInput() {
    return this._asynchronousMetricLogEnabled;
  }

  // asynchronous_metric_log_retention_size - computed: false, optional: true, required: false
  private _asynchronousMetricLogRetentionSize?: number; 
  public get asynchronousMetricLogRetentionSize() {
    return this.getNumberAttribute('asynchronous_metric_log_retention_size');
  }
  public set asynchronousMetricLogRetentionSize(value: number) {
    this._asynchronousMetricLogRetentionSize = value;
  }
  public resetAsynchronousMetricLogRetentionSize() {
    this._asynchronousMetricLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogRetentionSizeInput() {
    return this._asynchronousMetricLogRetentionSize;
  }

  // asynchronous_metric_log_retention_time - computed: false, optional: true, required: false
  private _asynchronousMetricLogRetentionTime?: string; 
  public get asynchronousMetricLogRetentionTime() {
    return this.getStringAttribute('asynchronous_metric_log_retention_time');
  }
  public set asynchronousMetricLogRetentionTime(value: string) {
    this._asynchronousMetricLogRetentionTime = value;
  }
  public resetAsynchronousMetricLogRetentionTime() {
    this._asynchronousMetricLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogRetentionTimeInput() {
    return this._asynchronousMetricLogRetentionTime;
  }

  // background_common_pool_size - computed: false, optional: true, required: false
  private _backgroundCommonPoolSize?: number; 
  public get backgroundCommonPoolSize() {
    return this.getNumberAttribute('background_common_pool_size');
  }
  public set backgroundCommonPoolSize(value: number) {
    this._backgroundCommonPoolSize = value;
  }
  public resetBackgroundCommonPoolSize() {
    this._backgroundCommonPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundCommonPoolSizeInput() {
    return this._backgroundCommonPoolSize;
  }

  // background_fetches_pool_size - computed: false, optional: true, required: false
  private _backgroundFetchesPoolSize?: number; 
  public get backgroundFetchesPoolSize() {
    return this.getNumberAttribute('background_fetches_pool_size');
  }
  public set backgroundFetchesPoolSize(value: number) {
    this._backgroundFetchesPoolSize = value;
  }
  public resetBackgroundFetchesPoolSize() {
    this._backgroundFetchesPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundFetchesPoolSizeInput() {
    return this._backgroundFetchesPoolSize;
  }

  // background_merges_mutations_concurrency_ratio - computed: false, optional: true, required: false
  private _backgroundMergesMutationsConcurrencyRatio?: number; 
  public get backgroundMergesMutationsConcurrencyRatio() {
    return this.getNumberAttribute('background_merges_mutations_concurrency_ratio');
  }
  public set backgroundMergesMutationsConcurrencyRatio(value: number) {
    this._backgroundMergesMutationsConcurrencyRatio = value;
  }
  public resetBackgroundMergesMutationsConcurrencyRatio() {
    this._backgroundMergesMutationsConcurrencyRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMergesMutationsConcurrencyRatioInput() {
    return this._backgroundMergesMutationsConcurrencyRatio;
  }

  // background_message_broker_schedule_pool_size - computed: false, optional: true, required: false
  private _backgroundMessageBrokerSchedulePoolSize?: number; 
  public get backgroundMessageBrokerSchedulePoolSize() {
    return this.getNumberAttribute('background_message_broker_schedule_pool_size');
  }
  public set backgroundMessageBrokerSchedulePoolSize(value: number) {
    this._backgroundMessageBrokerSchedulePoolSize = value;
  }
  public resetBackgroundMessageBrokerSchedulePoolSize() {
    this._backgroundMessageBrokerSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMessageBrokerSchedulePoolSizeInput() {
    return this._backgroundMessageBrokerSchedulePoolSize;
  }

  // background_move_pool_size - computed: false, optional: true, required: false
  private _backgroundMovePoolSize?: number; 
  public get backgroundMovePoolSize() {
    return this.getNumberAttribute('background_move_pool_size');
  }
  public set backgroundMovePoolSize(value: number) {
    this._backgroundMovePoolSize = value;
  }
  public resetBackgroundMovePoolSize() {
    this._backgroundMovePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMovePoolSizeInput() {
    return this._backgroundMovePoolSize;
  }

  // background_pool_size - computed: false, optional: true, required: false
  private _backgroundPoolSize?: number; 
  public get backgroundPoolSize() {
    return this.getNumberAttribute('background_pool_size');
  }
  public set backgroundPoolSize(value: number) {
    this._backgroundPoolSize = value;
  }
  public resetBackgroundPoolSize() {
    this._backgroundPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundPoolSizeInput() {
    return this._backgroundPoolSize;
  }

  // background_schedule_pool_size - computed: false, optional: true, required: false
  private _backgroundSchedulePoolSize?: number; 
  public get backgroundSchedulePoolSize() {
    return this.getNumberAttribute('background_schedule_pool_size');
  }
  public set backgroundSchedulePoolSize(value: number) {
    this._backgroundSchedulePoolSize = value;
  }
  public resetBackgroundSchedulePoolSize() {
    this._backgroundSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundSchedulePoolSizeInput() {
    return this._backgroundSchedulePoolSize;
  }

  // keep_alive_timeout - computed: false, optional: true, required: false
  private _keepAliveTimeout?: string; 
  public get keepAliveTimeout() {
    return this.getStringAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: string) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mark_cache_size - computed: false, optional: true, required: false
  private _markCacheSize?: number; 
  public get markCacheSize() {
    return this.getNumberAttribute('mark_cache_size');
  }
  public set markCacheSize(value: number) {
    this._markCacheSize = value;
  }
  public resetMarkCacheSize() {
    this._markCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markCacheSizeInput() {
    return this._markCacheSize;
  }

  // max_concurrent_queries - computed: false, optional: true, required: false
  private _maxConcurrentQueries?: number; 
  public get maxConcurrentQueries() {
    return this.getNumberAttribute('max_concurrent_queries');
  }
  public set maxConcurrentQueries(value: number) {
    this._maxConcurrentQueries = value;
  }
  public resetMaxConcurrentQueries() {
    this._maxConcurrentQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesInput() {
    return this._maxConcurrentQueries;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_partition_size_to_drop - computed: false, optional: true, required: false
  private _maxPartitionSizeToDrop?: number; 
  public get maxPartitionSizeToDrop() {
    return this.getNumberAttribute('max_partition_size_to_drop');
  }
  public set maxPartitionSizeToDrop(value: number) {
    this._maxPartitionSizeToDrop = value;
  }
  public resetMaxPartitionSizeToDrop() {
    this._maxPartitionSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionSizeToDropInput() {
    return this._maxPartitionSizeToDrop;
  }

  // max_table_size_to_drop - computed: false, optional: true, required: false
  private _maxTableSizeToDrop?: number; 
  public get maxTableSizeToDrop() {
    return this.getNumberAttribute('max_table_size_to_drop');
  }
  public set maxTableSizeToDrop(value: number) {
    this._maxTableSizeToDrop = value;
  }
  public resetMaxTableSizeToDrop() {
    this._maxTableSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableSizeToDropInput() {
    return this._maxTableSizeToDrop;
  }

  // metric_log_enabled - computed: false, optional: true, required: false
  private _metricLogEnabled?: boolean | cdktf.IResolvable; 
  public get metricLogEnabled() {
    return this.getBooleanAttribute('metric_log_enabled');
  }
  public set metricLogEnabled(value: boolean | cdktf.IResolvable) {
    this._metricLogEnabled = value;
  }
  public resetMetricLogEnabled() {
    this._metricLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogEnabledInput() {
    return this._metricLogEnabled;
  }

  // metric_log_retention_size - computed: false, optional: true, required: false
  private _metricLogRetentionSize?: number; 
  public get metricLogRetentionSize() {
    return this.getNumberAttribute('metric_log_retention_size');
  }
  public set metricLogRetentionSize(value: number) {
    this._metricLogRetentionSize = value;
  }
  public resetMetricLogRetentionSize() {
    this._metricLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionSizeInput() {
    return this._metricLogRetentionSize;
  }

  // metric_log_retention_time - computed: false, optional: true, required: false
  private _metricLogRetentionTime?: string; 
  public get metricLogRetentionTime() {
    return this.getStringAttribute('metric_log_retention_time');
  }
  public set metricLogRetentionTime(value: string) {
    this._metricLogRetentionTime = value;
  }
  public resetMetricLogRetentionTime() {
    this._metricLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionTimeInput() {
    return this._metricLogRetentionTime;
  }

  // opentelemetry_span_log_enabled - computed: false, optional: true, required: false
  private _opentelemetrySpanLogEnabled?: boolean | cdktf.IResolvable; 
  public get opentelemetrySpanLogEnabled() {
    return this.getBooleanAttribute('opentelemetry_span_log_enabled');
  }
  public set opentelemetrySpanLogEnabled(value: boolean | cdktf.IResolvable) {
    this._opentelemetrySpanLogEnabled = value;
  }
  public resetOpentelemetrySpanLogEnabled() {
    this._opentelemetrySpanLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogEnabledInput() {
    return this._opentelemetrySpanLogEnabled;
  }

  // opentelemetry_span_log_retention_size - computed: false, optional: true, required: false
  private _opentelemetrySpanLogRetentionSize?: number; 
  public get opentelemetrySpanLogRetentionSize() {
    return this.getNumberAttribute('opentelemetry_span_log_retention_size');
  }
  public set opentelemetrySpanLogRetentionSize(value: number) {
    this._opentelemetrySpanLogRetentionSize = value;
  }
  public resetOpentelemetrySpanLogRetentionSize() {
    this._opentelemetrySpanLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogRetentionSizeInput() {
    return this._opentelemetrySpanLogRetentionSize;
  }

  // opentelemetry_span_log_retention_time - computed: false, optional: true, required: false
  private _opentelemetrySpanLogRetentionTime?: string; 
  public get opentelemetrySpanLogRetentionTime() {
    return this.getStringAttribute('opentelemetry_span_log_retention_time');
  }
  public set opentelemetrySpanLogRetentionTime(value: string) {
    this._opentelemetrySpanLogRetentionTime = value;
  }
  public resetOpentelemetrySpanLogRetentionTime() {
    this._opentelemetrySpanLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogRetentionTimeInput() {
    return this._opentelemetrySpanLogRetentionTime;
  }

  // part_log_retention_size - computed: false, optional: true, required: false
  private _partLogRetentionSize?: number; 
  public get partLogRetentionSize() {
    return this.getNumberAttribute('part_log_retention_size');
  }
  public set partLogRetentionSize(value: number) {
    this._partLogRetentionSize = value;
  }
  public resetPartLogRetentionSize() {
    this._partLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionSizeInput() {
    return this._partLogRetentionSize;
  }

  // part_log_retention_time - computed: false, optional: true, required: false
  private _partLogRetentionTime?: string; 
  public get partLogRetentionTime() {
    return this.getStringAttribute('part_log_retention_time');
  }
  public set partLogRetentionTime(value: string) {
    this._partLogRetentionTime = value;
  }
  public resetPartLogRetentionTime() {
    this._partLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionTimeInput() {
    return this._partLogRetentionTime;
  }

  // query_log_retention_size - computed: false, optional: true, required: false
  private _queryLogRetentionSize?: number; 
  public get queryLogRetentionSize() {
    return this.getNumberAttribute('query_log_retention_size');
  }
  public set queryLogRetentionSize(value: number) {
    this._queryLogRetentionSize = value;
  }
  public resetQueryLogRetentionSize() {
    this._queryLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionSizeInput() {
    return this._queryLogRetentionSize;
  }

  // query_log_retention_time - computed: false, optional: true, required: false
  private _queryLogRetentionTime?: string; 
  public get queryLogRetentionTime() {
    return this.getStringAttribute('query_log_retention_time');
  }
  public set queryLogRetentionTime(value: string) {
    this._queryLogRetentionTime = value;
  }
  public resetQueryLogRetentionTime() {
    this._queryLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionTimeInput() {
    return this._queryLogRetentionTime;
  }

  // query_thread_log_enabled - computed: false, optional: true, required: false
  private _queryThreadLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryThreadLogEnabled() {
    return this.getBooleanAttribute('query_thread_log_enabled');
  }
  public set queryThreadLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryThreadLogEnabled = value;
  }
  public resetQueryThreadLogEnabled() {
    this._queryThreadLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogEnabledInput() {
    return this._queryThreadLogEnabled;
  }

  // query_thread_log_retention_size - computed: false, optional: true, required: false
  private _queryThreadLogRetentionSize?: number; 
  public get queryThreadLogRetentionSize() {
    return this.getNumberAttribute('query_thread_log_retention_size');
  }
  public set queryThreadLogRetentionSize(value: number) {
    this._queryThreadLogRetentionSize = value;
  }
  public resetQueryThreadLogRetentionSize() {
    this._queryThreadLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionSizeInput() {
    return this._queryThreadLogRetentionSize;
  }

  // query_thread_log_retention_time - computed: false, optional: true, required: false
  private _queryThreadLogRetentionTime?: string; 
  public get queryThreadLogRetentionTime() {
    return this.getStringAttribute('query_thread_log_retention_time');
  }
  public set queryThreadLogRetentionTime(value: string) {
    this._queryThreadLogRetentionTime = value;
  }
  public resetQueryThreadLogRetentionTime() {
    this._queryThreadLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionTimeInput() {
    return this._queryThreadLogRetentionTime;
  }

  // query_views_log_enabled - computed: false, optional: true, required: false
  private _queryViewsLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryViewsLogEnabled() {
    return this.getBooleanAttribute('query_views_log_enabled');
  }
  public set queryViewsLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryViewsLogEnabled = value;
  }
  public resetQueryViewsLogEnabled() {
    this._queryViewsLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogEnabledInput() {
    return this._queryViewsLogEnabled;
  }

  // query_views_log_retention_size - computed: false, optional: true, required: false
  private _queryViewsLogRetentionSize?: number; 
  public get queryViewsLogRetentionSize() {
    return this.getNumberAttribute('query_views_log_retention_size');
  }
  public set queryViewsLogRetentionSize(value: number) {
    this._queryViewsLogRetentionSize = value;
  }
  public resetQueryViewsLogRetentionSize() {
    this._queryViewsLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogRetentionSizeInput() {
    return this._queryViewsLogRetentionSize;
  }

  // query_views_log_retention_time - computed: false, optional: true, required: false
  private _queryViewsLogRetentionTime?: string; 
  public get queryViewsLogRetentionTime() {
    return this.getStringAttribute('query_views_log_retention_time');
  }
  public set queryViewsLogRetentionTime(value: string) {
    this._queryViewsLogRetentionTime = value;
  }
  public resetQueryViewsLogRetentionTime() {
    this._queryViewsLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogRetentionTimeInput() {
    return this._queryViewsLogRetentionTime;
  }

  // session_log_enabled - computed: false, optional: true, required: false
  private _sessionLogEnabled?: boolean | cdktf.IResolvable; 
  public get sessionLogEnabled() {
    return this.getBooleanAttribute('session_log_enabled');
  }
  public set sessionLogEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionLogEnabled = value;
  }
  public resetSessionLogEnabled() {
    this._sessionLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogEnabledInput() {
    return this._sessionLogEnabled;
  }

  // session_log_retention_size - computed: false, optional: true, required: false
  private _sessionLogRetentionSize?: number; 
  public get sessionLogRetentionSize() {
    return this.getNumberAttribute('session_log_retention_size');
  }
  public set sessionLogRetentionSize(value: number) {
    this._sessionLogRetentionSize = value;
  }
  public resetSessionLogRetentionSize() {
    this._sessionLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogRetentionSizeInput() {
    return this._sessionLogRetentionSize;
  }

  // session_log_retention_time - computed: false, optional: true, required: false
  private _sessionLogRetentionTime?: string; 
  public get sessionLogRetentionTime() {
    return this.getStringAttribute('session_log_retention_time');
  }
  public set sessionLogRetentionTime(value: string) {
    this._sessionLogRetentionTime = value;
  }
  public resetSessionLogRetentionTime() {
    this._sessionLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogRetentionTimeInput() {
    return this._sessionLogRetentionTime;
  }

  // text_log_enabled - computed: false, optional: true, required: false
  private _textLogEnabled?: boolean | cdktf.IResolvable; 
  public get textLogEnabled() {
    return this.getBooleanAttribute('text_log_enabled');
  }
  public set textLogEnabled(value: boolean | cdktf.IResolvable) {
    this._textLogEnabled = value;
  }
  public resetTextLogEnabled() {
    this._textLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogEnabledInput() {
    return this._textLogEnabled;
  }

  // text_log_level - computed: true, optional: true, required: false
  private _textLogLevel?: string; 
  public get textLogLevel() {
    return this.getStringAttribute('text_log_level');
  }
  public set textLogLevel(value: string) {
    this._textLogLevel = value;
  }
  public resetTextLogLevel() {
    this._textLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogLevelInput() {
    return this._textLogLevel;
  }

  // text_log_retention_size - computed: false, optional: true, required: false
  private _textLogRetentionSize?: number; 
  public get textLogRetentionSize() {
    return this.getNumberAttribute('text_log_retention_size');
  }
  public set textLogRetentionSize(value: number) {
    this._textLogRetentionSize = value;
  }
  public resetTextLogRetentionSize() {
    this._textLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionSizeInput() {
    return this._textLogRetentionSize;
  }

  // text_log_retention_time - computed: false, optional: true, required: false
  private _textLogRetentionTime?: string; 
  public get textLogRetentionTime() {
    return this.getStringAttribute('text_log_retention_time');
  }
  public set textLogRetentionTime(value: string) {
    this._textLogRetentionTime = value;
  }
  public resetTextLogRetentionTime() {
    this._textLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionTimeInput() {
    return this._textLogRetentionTime;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // total_memory_profiler_step - computed: false, optional: true, required: false
  private _totalMemoryProfilerStep?: number; 
  public get totalMemoryProfilerStep() {
    return this.getNumberAttribute('total_memory_profiler_step');
  }
  public set totalMemoryProfilerStep(value: number) {
    this._totalMemoryProfilerStep = value;
  }
  public resetTotalMemoryProfilerStep() {
    this._totalMemoryProfilerStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryProfilerStepInput() {
    return this._totalMemoryProfilerStep;
  }

  // total_memory_tracker_sample_probability - computed: false, optional: true, required: false
  private _totalMemoryTrackerSampleProbability?: number; 
  public get totalMemoryTrackerSampleProbability() {
    return this.getNumberAttribute('total_memory_tracker_sample_probability');
  }
  public set totalMemoryTrackerSampleProbability(value: number) {
    this._totalMemoryTrackerSampleProbability = value;
  }
  public resetTotalMemoryTrackerSampleProbability() {
    this._totalMemoryTrackerSampleProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryTrackerSampleProbabilityInput() {
    return this._totalMemoryTrackerSampleProbability;
  }

  // trace_log_enabled - computed: false, optional: true, required: false
  private _traceLogEnabled?: boolean | cdktf.IResolvable; 
  public get traceLogEnabled() {
    return this.getBooleanAttribute('trace_log_enabled');
  }
  public set traceLogEnabled(value: boolean | cdktf.IResolvable) {
    this._traceLogEnabled = value;
  }
  public resetTraceLogEnabled() {
    this._traceLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogEnabledInput() {
    return this._traceLogEnabled;
  }

  // trace_log_retention_size - computed: false, optional: true, required: false
  private _traceLogRetentionSize?: number; 
  public get traceLogRetentionSize() {
    return this.getNumberAttribute('trace_log_retention_size');
  }
  public set traceLogRetentionSize(value: number) {
    this._traceLogRetentionSize = value;
  }
  public resetTraceLogRetentionSize() {
    this._traceLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionSizeInput() {
    return this._traceLogRetentionSize;
  }

  // trace_log_retention_time - computed: false, optional: true, required: false
  private _traceLogRetentionTime?: string; 
  public get traceLogRetentionTime() {
    return this.getStringAttribute('trace_log_retention_time');
  }
  public set traceLogRetentionTime(value: string) {
    this._traceLogRetentionTime = value;
  }
  public resetTraceLogRetentionTime() {
    this._traceLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionTimeInput() {
    return this._traceLogRetentionTime;
  }

  // uncompressed_cache_size - computed: false, optional: true, required: false
  private _uncompressedCacheSize?: number; 
  public get uncompressedCacheSize() {
    return this.getNumberAttribute('uncompressed_cache_size');
  }
  public set uncompressedCacheSize(value: number) {
    this._uncompressedCacheSize = value;
  }
  public resetUncompressedCacheSize() {
    this._uncompressedCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedCacheSizeInput() {
    return this._uncompressedCacheSize;
  }

  // zookeeper_log_enabled - computed: false, optional: true, required: false
  private _zookeeperLogEnabled?: boolean | cdktf.IResolvable; 
  public get zookeeperLogEnabled() {
    return this.getBooleanAttribute('zookeeper_log_enabled');
  }
  public set zookeeperLogEnabled(value: boolean | cdktf.IResolvable) {
    this._zookeeperLogEnabled = value;
  }
  public resetZookeeperLogEnabled() {
    this._zookeeperLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogEnabledInput() {
    return this._zookeeperLogEnabled;
  }

  // zookeeper_log_retention_size - computed: false, optional: true, required: false
  private _zookeeperLogRetentionSize?: number; 
  public get zookeeperLogRetentionSize() {
    return this.getNumberAttribute('zookeeper_log_retention_size');
  }
  public set zookeeperLogRetentionSize(value: number) {
    this._zookeeperLogRetentionSize = value;
  }
  public resetZookeeperLogRetentionSize() {
    this._zookeeperLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogRetentionSizeInput() {
    return this._zookeeperLogRetentionSize;
  }

  // zookeeper_log_retention_time - computed: false, optional: true, required: false
  private _zookeeperLogRetentionTime?: string; 
  public get zookeeperLogRetentionTime() {
    return this.getStringAttribute('zookeeper_log_retention_time');
  }
  public set zookeeperLogRetentionTime(value: string) {
    this._zookeeperLogRetentionTime = value;
  }
  public resetZookeeperLogRetentionTime() {
    this._zookeeperLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogRetentionTimeInput() {
    return this._zookeeperLogRetentionTime;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ClickhouseClusterConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ClickhouseClusterConfigKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }
}
export interface ClickhouseClusterResourcesClickhouse {
  /**
  * Storage volume available to a host in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#disk_size ClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Maximum storage volume the cluster can automatically scale up to in bytes. If not set, autoscaling is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_disk_size ClickhouseCluster#max_disk_size}
  */
  readonly maxDiskSize?: number;
  /**
  * ID of the maximal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_resource_preset_id ClickhouseCluster#max_resource_preset_id}
  */
  readonly maxResourcePresetId?: string;
  /**
  * ID of the minimal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#min_resource_preset_id ClickhouseCluster#min_resource_preset_id}
  */
  readonly minResourcePresetId?: string;
  /**
  * Number of hosts per shard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#replica_count ClickhouseCluster#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * ID of the computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#resource_preset_id ClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
  /**
  * Number of shards in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#shard_count ClickhouseCluster#shard_count}
  */
  readonly shardCount?: number;
}

export function clickhouseClusterResourcesClickhouseToTerraform(struct?: ClickhouseClusterResourcesClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
    max_resource_preset_id: cdktf.stringToTerraform(struct!.maxResourcePresetId),
    min_resource_preset_id: cdktf.stringToTerraform(struct!.minResourcePresetId),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
    shard_count: cdktf.numberToTerraform(struct!.shardCount),
  }
}


export function clickhouseClusterResourcesClickhouseToHclTerraform(struct?: ClickhouseClusterResourcesClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.maxResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.minResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_count: {
      value: cdktf.numberToHclTerraform(struct!.shardCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterResourcesClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterResourcesClickhouse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    if (this._maxResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResourcePresetId = this._maxResourcePresetId;
    }
    if (this._minResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResourcePresetId = this._minResourcePresetId;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    if (this._shardCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardCount = this._shardCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterResourcesClickhouse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._maxDiskSize = undefined;
      this._maxResourcePresetId = undefined;
      this._minResourcePresetId = undefined;
      this._replicaCount = undefined;
      this._resourcePresetId = undefined;
      this._shardCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._maxDiskSize = value.maxDiskSize;
      this._maxResourcePresetId = value.maxResourcePresetId;
      this._minResourcePresetId = value.minResourcePresetId;
      this._replicaCount = value.replicaCount;
      this._resourcePresetId = value.resourcePresetId;
      this._shardCount = value.shardCount;
    }
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
  }

  // max_resource_preset_id - computed: false, optional: true, required: false
  private _maxResourcePresetId?: string; 
  public get maxResourcePresetId() {
    return this.getStringAttribute('max_resource_preset_id');
  }
  public set maxResourcePresetId(value: string) {
    this._maxResourcePresetId = value;
  }
  public resetMaxResourcePresetId() {
    this._maxResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourcePresetIdInput() {
    return this._maxResourcePresetId;
  }

  // min_resource_preset_id - computed: false, optional: true, required: false
  private _minResourcePresetId?: string; 
  public get minResourcePresetId() {
    return this.getStringAttribute('min_resource_preset_id');
  }
  public set minResourcePresetId(value: string) {
    this._minResourcePresetId = value;
  }
  public resetMinResourcePresetId() {
    this._minResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePresetIdInput() {
    return this._minResourcePresetId;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // resource_preset_id - computed: false, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }
}
export interface ClickhouseClusterResourcesDedicatedKeeper {
  /**
  * Volume of the storage available to a host in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#disk_size ClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Maximum storage volume the cluster can automatically scale up to in bytes. If not set, autoscaling is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_disk_size ClickhouseCluster#max_disk_size}
  */
  readonly maxDiskSize?: number;
  /**
  * ID of the maximal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#max_resource_preset_id ClickhouseCluster#max_resource_preset_id}
  */
  readonly maxResourcePresetId?: string;
  /**
  * ID of the minimal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#min_resource_preset_id ClickhouseCluster#min_resource_preset_id}
  */
  readonly minResourcePresetId?: string;
  /**
  * Number of keeper hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#replica_count ClickhouseCluster#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * ID of the computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#resource_preset_id ClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function clickhouseClusterResourcesDedicatedKeeperToTerraform(struct?: ClickhouseClusterResourcesDedicatedKeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
    max_resource_preset_id: cdktf.stringToTerraform(struct!.maxResourcePresetId),
    min_resource_preset_id: cdktf.stringToTerraform(struct!.minResourcePresetId),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function clickhouseClusterResourcesDedicatedKeeperToHclTerraform(struct?: ClickhouseClusterResourcesDedicatedKeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.maxResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.minResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterResourcesDedicatedKeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterResourcesDedicatedKeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    if (this._maxResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResourcePresetId = this._maxResourcePresetId;
    }
    if (this._minResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResourcePresetId = this._minResourcePresetId;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterResourcesDedicatedKeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._maxDiskSize = undefined;
      this._maxResourcePresetId = undefined;
      this._minResourcePresetId = undefined;
      this._replicaCount = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._maxDiskSize = value.maxDiskSize;
      this._maxResourcePresetId = value.maxResourcePresetId;
      this._minResourcePresetId = value.minResourcePresetId;
      this._replicaCount = value.replicaCount;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
  }

  // max_resource_preset_id - computed: false, optional: true, required: false
  private _maxResourcePresetId?: string; 
  public get maxResourcePresetId() {
    return this.getStringAttribute('max_resource_preset_id');
  }
  public set maxResourcePresetId(value: string) {
    this._maxResourcePresetId = value;
  }
  public resetMaxResourcePresetId() {
    this._maxResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourcePresetIdInput() {
    return this._maxResourcePresetId;
  }

  // min_resource_preset_id - computed: false, optional: true, required: false
  private _minResourcePresetId?: string; 
  public get minResourcePresetId() {
    return this.getStringAttribute('min_resource_preset_id');
  }
  public set minResourcePresetId(value: string) {
    this._minResourcePresetId = value;
  }
  public resetMinResourcePresetId() {
    this._minResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePresetIdInput() {
    return this._minResourcePresetId;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // resource_preset_id - computed: false, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface ClickhouseClusterResources {
  /**
  * clickhouse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#clickhouse ClickhouseCluster#clickhouse}
  */
  readonly clickhouse?: ClickhouseClusterResourcesClickhouse;
  /**
  * dedicated_keeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#dedicated_keeper ClickhouseCluster#dedicated_keeper}
  */
  readonly dedicatedKeeper?: ClickhouseClusterResourcesDedicatedKeeper;
}

export function clickhouseClusterResourcesToTerraform(struct?: ClickhouseClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse: clickhouseClusterResourcesClickhouseToTerraform(struct!.clickhouse),
    dedicated_keeper: clickhouseClusterResourcesDedicatedKeeperToTerraform(struct!.dedicatedKeeper),
  }
}


export function clickhouseClusterResourcesToHclTerraform(struct?: ClickhouseClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse: {
      value: clickhouseClusterResourcesClickhouseToHclTerraform(struct!.clickhouse),
      isBlock: true,
      type: "struct",
      storageClassType: "ClickhouseClusterResourcesClickhouse",
    },
    dedicated_keeper: {
      value: clickhouseClusterResourcesDedicatedKeeperToHclTerraform(struct!.dedicatedKeeper),
      isBlock: true,
      type: "struct",
      storageClassType: "ClickhouseClusterResourcesDedicatedKeeper",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse?.internalValue;
    }
    if (this._dedicatedKeeper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedKeeper = this._dedicatedKeeper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clickhouse.internalValue = undefined;
      this._dedicatedKeeper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clickhouse.internalValue = value.clickhouse;
      this._dedicatedKeeper.internalValue = value.dedicatedKeeper;
    }
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse = new ClickhouseClusterResourcesClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: ClickhouseClusterResourcesClickhouse) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // dedicated_keeper - computed: false, optional: true, required: false
  private _dedicatedKeeper = new ClickhouseClusterResourcesDedicatedKeeperOutputReference(this, "dedicated_keeper");
  public get dedicatedKeeper() {
    return this._dedicatedKeeper;
  }
  public putDedicatedKeeper(value: ClickhouseClusterResourcesDedicatedKeeper) {
    this._dedicatedKeeper.internalValue = value;
  }
  public resetDedicatedKeeper() {
    this._dedicatedKeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedKeeperInput() {
    return this._dedicatedKeeper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster doublecloud_clickhouse_cluster}
*/
export class ClickhouseCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_clickhouse_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseCluster to import
  * @param importFromId The id of the existing ClickhouseCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_clickhouse_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/clickhouse_cluster doublecloud_clickhouse_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_clickhouse_cluster',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26',
        providerVersionConstraint: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._config.internalValue = config.config;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new ClickhouseClusterConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }

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

  // private_connection_info - computed: true, optional: false, required: false
  private _privateConnectionInfo = new ClickhouseClusterPrivateConnectionInfoOutputReference(this, "private_connection_info");
  public get privateConnectionInfo() {
    return this._privateConnectionInfo;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // access - computed: false, optional: true, required: false
  private _access = new ClickhouseClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: ClickhouseClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ClickhouseClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ClickhouseClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ClickhouseClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: ClickhouseClusterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
      version: cdktf.stringToTerraform(this._version),
      access: clickhouseClusterAccessToTerraform(this._access.internalValue),
      config: clickhouseClusterConfigAToTerraform(this._config.internalValue),
      resources: clickhouseClusterResourcesToTerraform(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: clickhouseClusterAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseClusterAccess",
      },
      config: {
        value: clickhouseClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseClusterConfigA",
      },
      resources: {
        value: clickhouseClusterResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseClusterResources",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
