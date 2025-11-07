// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreVirtualServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description on which to filter. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#description DataIllumioCoreVirtualServices#description}
  */
  readonly description?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#external_data_reference DataIllumioCoreVirtualServices#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#external_data_set DataIllumioCoreVirtualServices#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#id DataIllumioCoreVirtualServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of lists of label URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#labels DataIllumioCoreVirtualServices#labels}
  */
  readonly labels?: string;
  /**
  * Indicates whether to return all partially-matching names or only exact matches. Allowed values are "partial" and "exact". Default value: "partial"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#match_type DataIllumioCoreVirtualServices#match_type}
  */
  readonly matchType?: string;
  /**
  * Maximum number of Virtual Services to return. The integer should be a non-zero positive integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#max_results DataIllumioCoreVirtualServices#max_results}
  */
  readonly maxResults?: string;
  /**
  * Name on which to filter. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#name DataIllumioCoreVirtualServices#name}
  */
  readonly name?: string;
  /**
  * pversion of the security policy. Allowed values are "draft", "active", and numbers greater than 0. Default value: "draft"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#pversion DataIllumioCoreVirtualServices#pversion}
  */
  readonly pversion?: string;
  /**
  * Service URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#service DataIllumioCoreVirtualServices#service}
  */
  readonly service?: string;
  /**
  * FQDN configured under service_address property, supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#service_address_fqdn DataIllumioCoreVirtualServices#service_address_fqdn}
  */
  readonly serviceAddressFqdn?: string;
  /**
  * IP address configured under service_address property, supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#service_address_ip DataIllumioCoreVirtualServices#service_address_ip}
  */
  readonly serviceAddressIp?: string;
  /**
  * Specify port or port range to filter results. The range is from -1 to 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#service_ports_port DataIllumioCoreVirtualServices#service_ports_port}
  */
  readonly servicePortsPort?: string;
  /**
  * Protocol to filter on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#service_ports_proto DataIllumioCoreVirtualServices#service_ports_proto}
  */
  readonly servicePortsProto?: string;
  /**
  * Include Virtual Service usage flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#usage DataIllumioCoreVirtualServices#usage}
  */
  readonly usage?: string;
}
export interface DataIllumioCoreVirtualServicesItemsLabels {
}

export function dataIllumioCoreVirtualServicesItemsLabelsToTerraform(struct?: DataIllumioCoreVirtualServicesItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVirtualServicesItemsLabelsToHclTerraform(struct?: DataIllumioCoreVirtualServicesItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVirtualServicesItemsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVirtualServicesItemsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVirtualServicesItemsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreVirtualServicesItemsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVirtualServicesItemsLabelsOutputReference {
    return new DataIllumioCoreVirtualServicesItemsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVirtualServicesItemsService {
}

export function dataIllumioCoreVirtualServicesItemsServiceToTerraform(struct?: DataIllumioCoreVirtualServicesItemsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVirtualServicesItemsServiceToHclTerraform(struct?: DataIllumioCoreVirtualServicesItemsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVirtualServicesItemsServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVirtualServicesItemsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVirtualServicesItemsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreVirtualServicesItemsServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVirtualServicesItemsServiceOutputReference {
    return new DataIllumioCoreVirtualServicesItemsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVirtualServicesItemsServiceAddresses {
}

export function dataIllumioCoreVirtualServicesItemsServiceAddressesToTerraform(struct?: DataIllumioCoreVirtualServicesItemsServiceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVirtualServicesItemsServiceAddressesToHclTerraform(struct?: DataIllumioCoreVirtualServicesItemsServiceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVirtualServicesItemsServiceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVirtualServicesItemsServiceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVirtualServicesItemsServiceAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network - computed: true, optional: false, required: false
  private _network = new cdktf.StringMap(this, "network");
  public get network() {
    return this._network;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataIllumioCoreVirtualServicesItemsServiceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVirtualServicesItemsServiceAddressesOutputReference {
    return new DataIllumioCoreVirtualServicesItemsServiceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVirtualServicesItemsServicePorts {
}

export function dataIllumioCoreVirtualServicesItemsServicePortsToTerraform(struct?: DataIllumioCoreVirtualServicesItemsServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVirtualServicesItemsServicePortsToHclTerraform(struct?: DataIllumioCoreVirtualServicesItemsServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVirtualServicesItemsServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVirtualServicesItemsServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVirtualServicesItemsServicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataIllumioCoreVirtualServicesItemsServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVirtualServicesItemsServicePortsOutputReference {
    return new DataIllumioCoreVirtualServicesItemsServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVirtualServicesItems {
}

export function dataIllumioCoreVirtualServicesItemsToTerraform(struct?: DataIllumioCoreVirtualServicesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVirtualServicesItemsToHclTerraform(struct?: DataIllumioCoreVirtualServicesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVirtualServicesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVirtualServicesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVirtualServicesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_to - computed: true, optional: false, required: false
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ip_overrides - computed: true, optional: false, required: false
  public get ipOverrides() {
    return this.getListAttribute('ip_overrides');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataIllumioCoreVirtualServicesItemsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pce_fqdn - computed: true, optional: false, required: false
  public get pceFqdn() {
    return this.getStringAttribute('pce_fqdn');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataIllumioCoreVirtualServicesItemsServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // service_addresses - computed: true, optional: false, required: false
  private _serviceAddresses = new DataIllumioCoreVirtualServicesItemsServiceAddressesList(this, "service_addresses", false);
  public get serviceAddresses() {
    return this._serviceAddresses;
  }

  // service_ports - computed: true, optional: false, required: false
  private _servicePorts = new DataIllumioCoreVirtualServicesItemsServicePortsList(this, "service_ports", false);
  public get servicePorts() {
    return this._servicePorts;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataIllumioCoreVirtualServicesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVirtualServicesItemsOutputReference {
    return new DataIllumioCoreVirtualServicesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services illumio-core_virtual_services}
*/
export class DataIllumioCoreVirtualServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_virtual_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreVirtualServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreVirtualServices to import
  * @param importFromId The id of the existing DataIllumioCoreVirtualServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreVirtualServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_virtual_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/virtual_services illumio-core_virtual_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreVirtualServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreVirtualServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_virtual_services',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
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
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._labels = config.labels;
    this._matchType = config.matchType;
    this._maxResults = config.maxResults;
    this._name = config.name;
    this._pversion = config.pversion;
    this._service = config.service;
    this._serviceAddressFqdn = config.serviceAddressFqdn;
    this._serviceAddressIp = config.serviceAddressIp;
    this._servicePortsPort = config.servicePortsPort;
    this._servicePortsProto = config.servicePortsProto;
    this._usage = config.usage;
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

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataIllumioCoreVirtualServicesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: string; 
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }
  public set maxResults(value: string) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // pversion - computed: false, optional: true, required: false
  private _pversion?: string; 
  public get pversion() {
    return this.getStringAttribute('pversion');
  }
  public set pversion(value: string) {
    this._pversion = value;
  }
  public resetPversion() {
    this._pversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pversionInput() {
    return this._pversion;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_address_fqdn - computed: false, optional: true, required: false
  private _serviceAddressFqdn?: string; 
  public get serviceAddressFqdn() {
    return this.getStringAttribute('service_address_fqdn');
  }
  public set serviceAddressFqdn(value: string) {
    this._serviceAddressFqdn = value;
  }
  public resetServiceAddressFqdn() {
    this._serviceAddressFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressFqdnInput() {
    return this._serviceAddressFqdn;
  }

  // service_address_ip - computed: false, optional: true, required: false
  private _serviceAddressIp?: string; 
  public get serviceAddressIp() {
    return this.getStringAttribute('service_address_ip');
  }
  public set serviceAddressIp(value: string) {
    this._serviceAddressIp = value;
  }
  public resetServiceAddressIp() {
    this._serviceAddressIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressIpInput() {
    return this._serviceAddressIp;
  }

  // service_ports_port - computed: false, optional: true, required: false
  private _servicePortsPort?: string; 
  public get servicePortsPort() {
    return this.getStringAttribute('service_ports_port');
  }
  public set servicePortsPort(value: string) {
    this._servicePortsPort = value;
  }
  public resetServicePortsPort() {
    this._servicePortsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsPortInput() {
    return this._servicePortsPort;
  }

  // service_ports_proto - computed: false, optional: true, required: false
  private _servicePortsProto?: string; 
  public get servicePortsProto() {
    return this.getStringAttribute('service_ports_proto');
  }
  public set servicePortsProto(value: string) {
    this._servicePortsProto = value;
  }
  public resetServicePortsProto() {
    this._servicePortsProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsProtoInput() {
    return this._servicePortsProto;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.stringToTerraform(this._labels),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_results: cdktf.stringToTerraform(this._maxResults),
      name: cdktf.stringToTerraform(this._name),
      pversion: cdktf.stringToTerraform(this._pversion),
      service: cdktf.stringToTerraform(this._service),
      service_address_fqdn: cdktf.stringToTerraform(this._serviceAddressFqdn),
      service_address_ip: cdktf.stringToTerraform(this._serviceAddressIp),
      service_ports_port: cdktf.stringToTerraform(this._servicePortsPort),
      service_ports_proto: cdktf.stringToTerraform(this._servicePortsProto),
      usage: cdktf.stringToTerraform(this._usage),
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
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_results: {
        value: cdktf.stringToHclTerraform(this._maxResults),
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
      pversion: {
        value: cdktf.stringToHclTerraform(this._pversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_address_fqdn: {
        value: cdktf.stringToHclTerraform(this._serviceAddressFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_address_ip: {
        value: cdktf.stringToHclTerraform(this._serviceAddressIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ports_port: {
        value: cdktf.stringToHclTerraform(this._servicePortsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ports_proto: {
        value: cdktf.stringToHclTerraform(this._servicePortsProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
