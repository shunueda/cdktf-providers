// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#api_version Vpc#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#external_subnet_reference_name Vpc#external_subnet_reference_name}
  */
  readonly externalSubnetReferenceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#external_subnet_reference_uuid Vpc#external_subnet_reference_uuid}
  */
  readonly externalSubnetReferenceUuid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#name Vpc#name}
  */
  readonly name: string;
  /**
  * common_domain_name_server_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#common_domain_name_server_ip_list Vpc#common_domain_name_server_ip_list}
  */
  readonly commonDomainNameServerIpList?: VpcCommonDomainNameServerIpListStruct[] | cdktf.IResolvable;
  /**
  * externally_routable_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#externally_routable_prefix_list Vpc#externally_routable_prefix_list}
  */
  readonly externallyRoutablePrefixList?: VpcExternallyRoutablePrefixListStruct[] | cdktf.IResolvable;
}
export interface VpcExternalSubnetListStatusActiveGatewayNode {
}

export function vpcExternalSubnetListStatusActiveGatewayNodeToTerraform(struct?: VpcExternalSubnetListStatusActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcExternalSubnetListStatusActiveGatewayNodeToHclTerraform(struct?: VpcExternalSubnetListStatusActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcExternalSubnetListStatusActiveGatewayNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcExternalSubnetListStatusActiveGatewayNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcExternalSubnetListStatusActiveGatewayNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_reference - computed: true, optional: false, required: false
  private _hostReference = new cdktf.StringMap(this, "host_reference");
  public get hostReference() {
    return this._hostReference;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class VpcExternalSubnetListStatusActiveGatewayNodeList extends cdktf.ComplexList {

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
  public get(index: number): VpcExternalSubnetListStatusActiveGatewayNodeOutputReference {
    return new VpcExternalSubnetListStatusActiveGatewayNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcExternalSubnetListStatus {
}

export function vpcExternalSubnetListStatusToTerraform(struct?: VpcExternalSubnetListStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcExternalSubnetListStatusToHclTerraform(struct?: VpcExternalSubnetListStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcExternalSubnetListStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcExternalSubnetListStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcExternalSubnetListStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_gateway_node - computed: true, optional: false, required: false
  private _activeGatewayNode = new VpcExternalSubnetListStatusActiveGatewayNodeList(this, "active_gateway_node", false);
  public get activeGatewayNode() {
    return this._activeGatewayNode;
  }

  // external_ip_list - computed: true, optional: false, required: false
  public get externalIpList() {
    return this.getListAttribute('external_ip_list');
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }
}

export class VpcExternalSubnetListStatusList extends cdktf.ComplexList {

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
  public get(index: number): VpcExternalSubnetListStatusOutputReference {
    return new VpcExternalSubnetListStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcCommonDomainNameServerIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#ip Vpc#ip}
  */
  readonly ip?: string;
}

export function vpcCommonDomainNameServerIpListStructToTerraform(struct?: VpcCommonDomainNameServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function vpcCommonDomainNameServerIpListStructToHclTerraform(struct?: VpcCommonDomainNameServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcCommonDomainNameServerIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcCommonDomainNameServerIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcCommonDomainNameServerIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class VpcCommonDomainNameServerIpListStructList extends cdktf.ComplexList {
  public internalValue? : VpcCommonDomainNameServerIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpcCommonDomainNameServerIpListStructOutputReference {
    return new VpcCommonDomainNameServerIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcExternallyRoutablePrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#ip Vpc#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#prefix_length Vpc#prefix_length}
  */
  readonly prefixLength: number;
}

export function vpcExternallyRoutablePrefixListStructToTerraform(struct?: VpcExternallyRoutablePrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function vpcExternallyRoutablePrefixListStructToHclTerraform(struct?: VpcExternallyRoutablePrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcExternallyRoutablePrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcExternallyRoutablePrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcExternallyRoutablePrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._prefixLength = value.prefixLength;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

export class VpcExternallyRoutablePrefixListStructList extends cdktf.ComplexList {
  public internalValue? : VpcExternallyRoutablePrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpcExternallyRoutablePrefixListStructOutputReference {
    return new VpcExternallyRoutablePrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc nutanix_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpc to import
  * @param importFromId The id of the existing Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vpc nutanix_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_vpc',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._externalSubnetReferenceName = config.externalSubnetReferenceName;
    this._externalSubnetReferenceUuid = config.externalSubnetReferenceUuid;
    this._id = config.id;
    this._name = config.name;
    this._commonDomainNameServerIpList.internalValue = config.commonDomainNameServerIpList;
    this._externallyRoutablePrefixList.internalValue = config.externallyRoutablePrefixList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // external_subnet_list_status - computed: true, optional: false, required: false
  private _externalSubnetListStatus = new VpcExternalSubnetListStatusList(this, "external_subnet_list_status", false);
  public get externalSubnetListStatus() {
    return this._externalSubnetListStatus;
  }

  // external_subnet_reference_name - computed: false, optional: true, required: false
  private _externalSubnetReferenceName?: string[]; 
  public get externalSubnetReferenceName() {
    return this.getListAttribute('external_subnet_reference_name');
  }
  public set externalSubnetReferenceName(value: string[]) {
    this._externalSubnetReferenceName = value;
  }
  public resetExternalSubnetReferenceName() {
    this._externalSubnetReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceNameInput() {
    return this._externalSubnetReferenceName;
  }

  // external_subnet_reference_uuid - computed: true, optional: true, required: false
  private _externalSubnetReferenceUuid?: string[]; 
  public get externalSubnetReferenceUuid() {
    return this.getListAttribute('external_subnet_reference_uuid');
  }
  public set externalSubnetReferenceUuid(value: string[]) {
    this._externalSubnetReferenceUuid = value;
  }
  public resetExternalSubnetReferenceUuid() {
    this._externalSubnetReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceUuidInput() {
    return this._externalSubnetReferenceUuid;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // common_domain_name_server_ip_list - computed: false, optional: true, required: false
  private _commonDomainNameServerIpList = new VpcCommonDomainNameServerIpListStructList(this, "common_domain_name_server_ip_list", false);
  public get commonDomainNameServerIpList() {
    return this._commonDomainNameServerIpList;
  }
  public putCommonDomainNameServerIpList(value: VpcCommonDomainNameServerIpListStruct[] | cdktf.IResolvable) {
    this._commonDomainNameServerIpList.internalValue = value;
  }
  public resetCommonDomainNameServerIpList() {
    this._commonDomainNameServerIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonDomainNameServerIpListInput() {
    return this._commonDomainNameServerIpList.internalValue;
  }

  // externally_routable_prefix_list - computed: false, optional: true, required: false
  private _externallyRoutablePrefixList = new VpcExternallyRoutablePrefixListStructList(this, "externally_routable_prefix_list", false);
  public get externallyRoutablePrefixList() {
    return this._externallyRoutablePrefixList;
  }
  public putExternallyRoutablePrefixList(value: VpcExternallyRoutablePrefixListStruct[] | cdktf.IResolvable) {
    this._externallyRoutablePrefixList.internalValue = value;
  }
  public resetExternallyRoutablePrefixList() {
    this._externallyRoutablePrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyRoutablePrefixListInput() {
    return this._externallyRoutablePrefixList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      external_subnet_reference_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalSubnetReferenceName),
      external_subnet_reference_uuid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalSubnetReferenceUuid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      common_domain_name_server_ip_list: cdktf.listMapper(vpcCommonDomainNameServerIpListStructToTerraform, true)(this._commonDomainNameServerIpList.internalValue),
      externally_routable_prefix_list: cdktf.listMapper(vpcExternallyRoutablePrefixListStructToTerraform, true)(this._externallyRoutablePrefixList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_subnet_reference_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalSubnetReferenceName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_subnet_reference_uuid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalSubnetReferenceUuid),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      common_domain_name_server_ip_list: {
        value: cdktf.listMapperHcl(vpcCommonDomainNameServerIpListStructToHclTerraform, true)(this._commonDomainNameServerIpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcCommonDomainNameServerIpListStructList",
      },
      externally_routable_prefix_list: {
        value: cdktf.listMapperHcl(vpcExternallyRoutablePrefixListStructToHclTerraform, true)(this._externallyRoutablePrefixList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcExternallyRoutablePrefixListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
