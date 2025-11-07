// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexNvmeTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#filter DataPowerflexNvmeTarget#filter}
  */
  readonly filter?: DataPowerflexNvmeTargetFilter;
}
export interface DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfo {
}

export function dataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfoToTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfoToHclTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_from_asn1_format - computed: true, optional: false, required: false
  public get validFromAsn1Format() {
    return this.getStringAttribute('valid_from_asn1_format');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // valid_to_asn1_format - computed: true, optional: false, required: false
  public get validToAsn1Format() {
    return this.getStringAttribute('valid_to_asn1_format');
  }
}
export interface DataPowerflexNvmeTargetNvmeTargetDetailsHostListStruct {
}

export function dataPowerflexNvmeTargetNvmeTargetDetailsHostListStructToTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeTargetNvmeTargetDetailsHostListStructToHclTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeTargetNvmeTargetDetailsHostListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetNvmeTargetDetailsHostListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }

  // sys_port_ip - computed: true, optional: false, required: false
  public get sysPortIp() {
    return this.getStringAttribute('sys_port_ip');
  }
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsHostListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeTargetNvmeTargetDetailsHostListStructOutputReference {
    return new DataPowerflexNvmeTargetNvmeTargetDetailsHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeTargetNvmeTargetDetailsIpListStruct {
}

export function dataPowerflexNvmeTargetNvmeTargetDetailsIpListStructToTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeTargetNvmeTargetDetailsIpListStructToHclTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeTargetNvmeTargetDetailsIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetNvmeTargetDetailsIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeTargetNvmeTargetDetailsIpListStructOutputReference {
    return new DataPowerflexNvmeTargetNvmeTargetDetailsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeTargetNvmeTargetDetailsLinks {
}

export function dataPowerflexNvmeTargetNvmeTargetDetailsLinksToTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeTargetNvmeTargetDetailsLinksToHclTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeTargetNvmeTargetDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetNvmeTargetDetailsLinks | undefined) {
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

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeTargetNvmeTargetDetailsLinksOutputReference {
    return new DataPowerflexNvmeTargetNvmeTargetDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeTargetNvmeTargetDetails {
}

export function dataPowerflexNvmeTargetNvmeTargetDetailsToTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeTargetNvmeTargetDetailsToHclTerraform(struct?: DataPowerflexNvmeTargetNvmeTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeTargetNvmeTargetDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetNvmeTargetDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_error - computed: true, optional: false, required: false
  public get authenticationError() {
    return this.getStringAttribute('authentication_error');
  }

  // certificate_info - computed: true, optional: false, required: false
  private _certificateInfo = new DataPowerflexNvmeTargetNvmeTargetDetailsCertificateInfoOutputReference(this, "certificate_info");
  public get certificateInfo() {
    return this._certificateInfo;
  }

  // discovery_port - computed: true, optional: false, required: false
  public get discoveryPort() {
    return this.getNumberAttribute('discovery_port');
  }

  // fault_set_id - computed: true, optional: false, required: false
  public get faultSetId() {
    return this.getStringAttribute('fault_set_id');
  }

  // host_list - computed: true, optional: false, required: false
  private _hostList = new DataPowerflexNvmeTargetNvmeTargetDetailsHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataPowerflexNvmeTargetNvmeTargetDetailsIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexNvmeTargetNvmeTargetDetailsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // maintenance_state - computed: true, optional: false, required: false
  public get maintenanceState() {
    return this.getStringAttribute('maintenance_state');
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nvme_port - computed: true, optional: false, required: false
  public get nvmePort() {
    return this.getNumberAttribute('nvme_port');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // sdt_state - computed: true, optional: false, required: false
  public get sdtState() {
    return this.getStringAttribute('sdt_state');
  }

  // software_version_info - computed: true, optional: false, required: false
  public get softwareVersionInfo() {
    return this.getStringAttribute('software_version_info');
  }

  // storage_port - computed: true, optional: false, required: false
  public get storagePort() {
    return this.getNumberAttribute('storage_port');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class DataPowerflexNvmeTargetNvmeTargetDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeTargetNvmeTargetDetailsOutputReference {
    return new DataPowerflexNvmeTargetNvmeTargetDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeTargetFilter {
  /**
  * List of authentication_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#authentication_error DataPowerflexNvmeTarget#authentication_error}
  */
  readonly authenticationError?: string[];
  /**
  * List of discovery_port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#discovery_port DataPowerflexNvmeTarget#discovery_port}
  */
  readonly discoveryPort?: number[];
  /**
  * List of fault_set_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#fault_set_id DataPowerflexNvmeTarget#fault_set_id}
  */
  readonly faultSetId?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#id DataPowerflexNvmeTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of maintenance_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#maintenance_state DataPowerflexNvmeTarget#maintenance_state}
  */
  readonly maintenanceState?: string[];
  /**
  * List of mdm_connection_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#mdm_connection_state DataPowerflexNvmeTarget#mdm_connection_state}
  */
  readonly mdmConnectionState?: string[];
  /**
  * List of membership_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#membership_state DataPowerflexNvmeTarget#membership_state}
  */
  readonly membershipState?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#name DataPowerflexNvmeTarget#name}
  */
  readonly name?: string[];
  /**
  * List of nvme_port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#nvme_port DataPowerflexNvmeTarget#nvme_port}
  */
  readonly nvmePort?: number[];
  /**
  * List of protection_domain_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#protection_domain_id DataPowerflexNvmeTarget#protection_domain_id}
  */
  readonly protectionDomainId?: string[];
  /**
  * List of sdt_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#sdt_state DataPowerflexNvmeTarget#sdt_state}
  */
  readonly sdtState?: string[];
  /**
  * List of software_version_info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#software_version_info DataPowerflexNvmeTarget#software_version_info}
  */
  readonly softwareVersionInfo?: string[];
  /**
  * List of storage_port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#storage_port DataPowerflexNvmeTarget#storage_port}
  */
  readonly storagePort?: number[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#system_id DataPowerflexNvmeTarget#system_id}
  */
  readonly systemId?: string[];
}

export function dataPowerflexNvmeTargetFilterToTerraform(struct?: DataPowerflexNvmeTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_error: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationError),
    discovery_port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.discoveryPort),
    fault_set_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.faultSetId),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    maintenance_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceState),
    mdm_connection_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mdmConnectionState),
    membership_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.membershipState),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    nvme_port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.nvmePort),
    protection_domain_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectionDomainId),
    sdt_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sdtState),
    software_version_info: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.softwareVersionInfo),
    storage_port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.storagePort),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
  }
}


export function dataPowerflexNvmeTargetFilterToHclTerraform(struct?: DataPowerflexNvmeTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_error: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationError),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.discoveryPort),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fault_set_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.faultSetId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maintenance_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mdm_connection_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mdmConnectionState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    membership_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.membershipState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    nvme_port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.nvmePort),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protection_domain_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectionDomainId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sdt_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sdtState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    software_version_info: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.softwareVersionInfo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage_port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.storagePort),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexNvmeTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNvmeTargetFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationError = this._authenticationError;
    }
    if (this._discoveryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPort = this._discoveryPort;
    }
    if (this._faultSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultSetId = this._faultSetId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maintenanceState !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceState = this._maintenanceState;
    }
    if (this._mdmConnectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmConnectionState = this._mdmConnectionState;
    }
    if (this._membershipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipState = this._membershipState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nvmePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmePort = this._nvmePort;
    }
    if (this._protectionDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomainId = this._protectionDomainId;
    }
    if (this._sdtState !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdtState = this._sdtState;
    }
    if (this._softwareVersionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersionInfo = this._softwareVersionInfo;
    }
    if (this._storagePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePort = this._storagePort;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeTargetFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationError = undefined;
      this._discoveryPort = undefined;
      this._faultSetId = undefined;
      this._id = undefined;
      this._maintenanceState = undefined;
      this._mdmConnectionState = undefined;
      this._membershipState = undefined;
      this._name = undefined;
      this._nvmePort = undefined;
      this._protectionDomainId = undefined;
      this._sdtState = undefined;
      this._softwareVersionInfo = undefined;
      this._storagePort = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationError = value.authenticationError;
      this._discoveryPort = value.discoveryPort;
      this._faultSetId = value.faultSetId;
      this._id = value.id;
      this._maintenanceState = value.maintenanceState;
      this._mdmConnectionState = value.mdmConnectionState;
      this._membershipState = value.membershipState;
      this._name = value.name;
      this._nvmePort = value.nvmePort;
      this._protectionDomainId = value.protectionDomainId;
      this._sdtState = value.sdtState;
      this._softwareVersionInfo = value.softwareVersionInfo;
      this._storagePort = value.storagePort;
      this._systemId = value.systemId;
    }
  }

  // authentication_error - computed: false, optional: true, required: false
  private _authenticationError?: string[]; 
  public get authenticationError() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_error'));
  }
  public set authenticationError(value: string[]) {
    this._authenticationError = value;
  }
  public resetAuthenticationError() {
    this._authenticationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationErrorInput() {
    return this._authenticationError;
  }

  // discovery_port - computed: false, optional: true, required: false
  private _discoveryPort?: number[]; 
  public get discoveryPort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('discovery_port')));
  }
  public set discoveryPort(value: number[]) {
    this._discoveryPort = value;
  }
  public resetDiscoveryPort() {
    this._discoveryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPortInput() {
    return this._discoveryPort;
  }

  // fault_set_id - computed: false, optional: true, required: false
  private _faultSetId?: string[]; 
  public get faultSetId() {
    return cdktf.Fn.tolist(this.getListAttribute('fault_set_id'));
  }
  public set faultSetId(value: string[]) {
    this._faultSetId = value;
  }
  public resetFaultSetId() {
    this._faultSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultSetIdInput() {
    return this._faultSetId;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_state - computed: false, optional: true, required: false
  private _maintenanceState?: string[]; 
  public get maintenanceState() {
    return cdktf.Fn.tolist(this.getListAttribute('maintenance_state'));
  }
  public set maintenanceState(value: string[]) {
    this._maintenanceState = value;
  }
  public resetMaintenanceState() {
    this._maintenanceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStateInput() {
    return this._maintenanceState;
  }

  // mdm_connection_state - computed: false, optional: true, required: false
  private _mdmConnectionState?: string[]; 
  public get mdmConnectionState() {
    return cdktf.Fn.tolist(this.getListAttribute('mdm_connection_state'));
  }
  public set mdmConnectionState(value: string[]) {
    this._mdmConnectionState = value;
  }
  public resetMdmConnectionState() {
    this._mdmConnectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmConnectionStateInput() {
    return this._mdmConnectionState;
  }

  // membership_state - computed: false, optional: true, required: false
  private _membershipState?: string[]; 
  public get membershipState() {
    return cdktf.Fn.tolist(this.getListAttribute('membership_state'));
  }
  public set membershipState(value: string[]) {
    this._membershipState = value;
  }
  public resetMembershipState() {
    this._membershipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipStateInput() {
    return this._membershipState;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nvme_port - computed: false, optional: true, required: false
  private _nvmePort?: number[]; 
  public get nvmePort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nvme_port')));
  }
  public set nvmePort(value: number[]) {
    this._nvmePort = value;
  }
  public resetNvmePort() {
    this._nvmePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmePortInput() {
    return this._nvmePort;
  }

  // protection_domain_id - computed: false, optional: true, required: false
  private _protectionDomainId?: string[]; 
  public get protectionDomainId() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_domain_id'));
  }
  public set protectionDomainId(value: string[]) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // sdt_state - computed: false, optional: true, required: false
  private _sdtState?: string[]; 
  public get sdtState() {
    return cdktf.Fn.tolist(this.getListAttribute('sdt_state'));
  }
  public set sdtState(value: string[]) {
    this._sdtState = value;
  }
  public resetSdtState() {
    this._sdtState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdtStateInput() {
    return this._sdtState;
  }

  // software_version_info - computed: false, optional: true, required: false
  private _softwareVersionInfo?: string[]; 
  public get softwareVersionInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('software_version_info'));
  }
  public set softwareVersionInfo(value: string[]) {
    this._softwareVersionInfo = value;
  }
  public resetSoftwareVersionInfo() {
    this._softwareVersionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInfoInput() {
    return this._softwareVersionInfo;
  }

  // storage_port - computed: false, optional: true, required: false
  private _storagePort?: number[]; 
  public get storagePort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('storage_port')));
  }
  public set storagePort(value: number[]) {
    this._storagePort = value;
  }
  public resetStoragePort() {
    this._storagePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePortInput() {
    return this._storagePort;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target powerflex_nvme_target}
*/
export class DataPowerflexNvmeTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_nvme_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexNvmeTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexNvmeTarget to import
  * @param importFromId The id of the existing DataPowerflexNvmeTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexNvmeTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_nvme_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_target powerflex_nvme_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexNvmeTargetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexNvmeTargetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_nvme_target',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nvme_target_details - computed: true, optional: false, required: false
  private _nvmeTargetDetails = new DataPowerflexNvmeTargetNvmeTargetDetailsList(this, "nvme_target_details", false);
  public get nvmeTargetDetails() {
    return this._nvmeTargetDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexNvmeTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexNvmeTargetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexNvmeTargetFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexNvmeTargetFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexNvmeTargetFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
