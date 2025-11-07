// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNetworkingIpInterfacesDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#cx_profile_name DataNetappOntapNetworkingIpInterfacesDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#filter DataNetappOntapNetworkingIpInterfacesDataSource#filter}
  */
  readonly filter?: DataNetappOntapNetworkingIpInterfacesDataSourceFilter;
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceFilter {
  /**
  * IPInterface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#name DataNetappOntapNetworkingIpInterfacesDataSource#name}
  */
  readonly name?: string;
  /**
  * IPInterface scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#scope DataNetappOntapNetworkingIpInterfacesDataSource#scope}
  */
  readonly scope?: string;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#svm_name DataNetappOntapNetworkingIpInterfacesDataSource#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceFilterToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceFilterToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceFilter | cdktf.IResolvable): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._scope = value.scope;
      this._svmName = value.svmName;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIp {
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspace {
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspaceToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspaceToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspace | undefined) {
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomain {
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomainToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomainToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocation {
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast_domain - computed: true, optional: false, required: false
  private _broadcastDomain = new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationBroadcastDomainOutputReference(this, "broadcast_domain");
  public get broadcastDomain() {
    return this._broadcastDomain;
  }

  // home_node - computed: true, optional: false, required: false
  public get homeNode() {
    return this.getStringAttribute('home_node');
  }

  // home_port - computed: true, optional: false, required: false
  public get homePort() {
    return this.getStringAttribute('home_port');
  }
}
export interface DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfaces {
}

export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesToTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesToHclTerraform(struct?: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ipspace - computed: true, optional: false, required: false
  private _ipspace = new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesIpspaceOutputReference(this, "ipspace");
  public get ipspace() {
    return this._ipspace;
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // service_policy - computed: true, optional: false, required: false
  public get servicePolicy() {
    return this.getStringAttribute('service_policy');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
}

export class DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesOutputReference {
    return new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source netapp-ontap_networking_ip_interfaces_data_source}
*/
export class DataNetappOntapNetworkingIpInterfacesDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_networking_ip_interfaces_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNetworkingIpInterfacesDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNetworkingIpInterfacesDataSource to import
  * @param importFromId The id of the existing DataNetappOntapNetworkingIpInterfacesDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNetworkingIpInterfacesDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_networking_ip_interfaces_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/networking_ip_interfaces_data_source netapp-ontap_networking_ip_interfaces_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNetworkingIpInterfacesDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNetworkingIpInterfacesDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_networking_ip_interfaces_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapNetworkingIpInterfacesDataSourceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapNetworkingIpInterfacesDataSourceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // ip_interfaces - computed: true, optional: false, required: false
  private _ipInterfaces = new DataNetappOntapNetworkingIpInterfacesDataSourceIpInterfacesList(this, "ip_interfaces", false);
  public get ipInterfaces() {
    return this._ipInterfaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapNetworkingIpInterfacesDataSourceFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapNetworkingIpInterfacesDataSourceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapNetworkingIpInterfacesDataSourceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
