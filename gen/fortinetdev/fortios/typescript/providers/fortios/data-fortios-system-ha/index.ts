// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha#id DataFortiosSystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha#vdomparam DataFortiosSystemHa#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemHaAutoVirtualMacInterface {
}

export function dataFortiosSystemHaAutoVirtualMacInterfaceToTerraform(struct?: DataFortiosSystemHaAutoVirtualMacInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaAutoVirtualMacInterfaceToHclTerraform(struct?: DataFortiosSystemHaAutoVirtualMacInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaAutoVirtualMacInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaAutoVirtualMacInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaAutoVirtualMacInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataFortiosSystemHaAutoVirtualMacInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaAutoVirtualMacInterfaceOutputReference {
    return new DataFortiosSystemHaAutoVirtualMacInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaBackupHbdev {
}

export function dataFortiosSystemHaBackupHbdevToTerraform(struct?: DataFortiosSystemHaBackupHbdev): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaBackupHbdevToHclTerraform(struct?: DataFortiosSystemHaBackupHbdev): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaBackupHbdevOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaBackupHbdev | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaBackupHbdev | undefined) {
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
}

export class DataFortiosSystemHaBackupHbdevList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaBackupHbdevOutputReference {
    return new DataFortiosSystemHaBackupHbdevOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaHaMgmtInterfaces {
}

export function dataFortiosSystemHaHaMgmtInterfacesToTerraform(struct?: DataFortiosSystemHaHaMgmtInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaHaMgmtInterfacesToHclTerraform(struct?: DataFortiosSystemHaHaMgmtInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaHaMgmtInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaHaMgmtInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaHaMgmtInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // dst6 - computed: true, optional: false, required: false
  public get dst6() {
    return this.getStringAttribute('dst6');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // gateway6 - computed: true, optional: false, required: false
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }
}

export class DataFortiosSystemHaHaMgmtInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaHaMgmtInterfacesOutputReference {
    return new DataFortiosSystemHaHaMgmtInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaSecondaryVcluster {
}

export function dataFortiosSystemHaSecondaryVclusterToTerraform(struct?: DataFortiosSystemHaSecondaryVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaSecondaryVclusterToHclTerraform(struct?: DataFortiosSystemHaSecondaryVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaSecondaryVclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaSecondaryVcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaSecondaryVcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getStringAttribute('override');
  }

  // override_wait_time - computed: true, optional: false, required: false
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }

  // pingserver_failover_threshold - computed: true, optional: false, required: false
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }

  // pingserver_monitor_interface - computed: true, optional: false, required: false
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }

  // pingserver_secondary_force_reset - computed: true, optional: false, required: false
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }

  // pingserver_slave_force_reset - computed: true, optional: false, required: false
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // vcluster_id - computed: true, optional: false, required: false
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
}

export class DataFortiosSystemHaSecondaryVclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaSecondaryVclusterOutputReference {
    return new DataFortiosSystemHaSecondaryVclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaUnicastPeers {
}

export function dataFortiosSystemHaUnicastPeersToTerraform(struct?: DataFortiosSystemHaUnicastPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaUnicastPeersToHclTerraform(struct?: DataFortiosSystemHaUnicastPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaUnicastPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaUnicastPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaUnicastPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
}

export class DataFortiosSystemHaUnicastPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaUnicastPeersOutputReference {
    return new DataFortiosSystemHaUnicastPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaVclusterVdom {
}

export function dataFortiosSystemHaVclusterVdomToTerraform(struct?: DataFortiosSystemHaVclusterVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaVclusterVdomToHclTerraform(struct?: DataFortiosSystemHaVclusterVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaVclusterVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaVclusterVdom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaVclusterVdom | undefined) {
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
}

export class DataFortiosSystemHaVclusterVdomList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaVclusterVdomOutputReference {
    return new DataFortiosSystemHaVclusterVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemHaVcluster {
}

export function dataFortiosSystemHaVclusterToTerraform(struct?: DataFortiosSystemHaVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemHaVclusterToHclTerraform(struct?: DataFortiosSystemHaVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemHaVclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemHaVcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemHaVcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getStringAttribute('override');
  }

  // override_wait_time - computed: true, optional: false, required: false
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }

  // pingserver_failover_threshold - computed: true, optional: false, required: false
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }

  // pingserver_flip_timeout - computed: true, optional: false, required: false
  public get pingserverFlipTimeout() {
    return this.getNumberAttribute('pingserver_flip_timeout');
  }

  // pingserver_monitor_interface - computed: true, optional: false, required: false
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }

  // pingserver_secondary_force_reset - computed: true, optional: false, required: false
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }

  // pingserver_slave_force_reset - computed: true, optional: false, required: false
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // vcluster_id - computed: true, optional: false, required: false
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }

  // vdom - computed: true, optional: false, required: false
  private _vdom = new DataFortiosSystemHaVclusterVdomList(this, "vdom", false);
  public get vdom() {
    return this._vdom;
  }
}

export class DataFortiosSystemHaVclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemHaVclusterOutputReference {
    return new DataFortiosSystemHaVclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha fortios_system_ha}
*/
export class DataFortiosSystemHa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemHa to import
  * @param importFromId The id of the existing DataFortiosSystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ha fortios_system_ha} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ha',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arps - computed: true, optional: false, required: false
  public get arps() {
    return this.getNumberAttribute('arps');
  }

  // arps_interval - computed: true, optional: false, required: false
  public get arpsInterval() {
    return this.getNumberAttribute('arps_interval');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // auto_virtual_mac_interface - computed: true, optional: false, required: false
  private _autoVirtualMacInterface = new DataFortiosSystemHaAutoVirtualMacInterfaceList(this, "auto_virtual_mac_interface", false);
  public get autoVirtualMacInterface() {
    return this._autoVirtualMacInterface;
  }

  // backup_hbdev - computed: true, optional: false, required: false
  private _backupHbdev = new DataFortiosSystemHaBackupHbdevList(this, "backup_hbdev", false);
  public get backupHbdev() {
    return this._backupHbdev;
  }

  // bounce_intf_upon_failover - computed: true, optional: false, required: false
  public get bounceIntfUponFailover() {
    return this.getStringAttribute('bounce_intf_upon_failover');
  }

  // check_secondary_dev_health - computed: true, optional: false, required: false
  public get checkSecondaryDevHealth() {
    return this.getStringAttribute('check_secondary_dev_health');
  }

  // cpu_threshold - computed: true, optional: false, required: false
  public get cpuThreshold() {
    return this.getStringAttribute('cpu_threshold');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // evpn_ttl - computed: true, optional: false, required: false
  public get evpnTtl() {
    return this.getNumberAttribute('evpn_ttl');
  }

  // failover_hold_time - computed: true, optional: false, required: false
  public get failoverHoldTime() {
    return this.getNumberAttribute('failover_hold_time');
  }

  // ftp_proxy_threshold - computed: true, optional: false, required: false
  public get ftpProxyThreshold() {
    return this.getStringAttribute('ftp_proxy_threshold');
  }

  // gratuitous_arps - computed: true, optional: false, required: false
  public get gratuitousArps() {
    return this.getStringAttribute('gratuitous_arps');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // ha_direct - computed: true, optional: false, required: false
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }

  // ha_eth_type - computed: true, optional: false, required: false
  public get haEthType() {
    return this.getStringAttribute('ha_eth_type');
  }

  // ha_mgmt_interfaces - computed: true, optional: false, required: false
  private _haMgmtInterfaces = new DataFortiosSystemHaHaMgmtInterfacesList(this, "ha_mgmt_interfaces", false);
  public get haMgmtInterfaces() {
    return this._haMgmtInterfaces;
  }

  // ha_mgmt_status - computed: true, optional: false, required: false
  public get haMgmtStatus() {
    return this.getStringAttribute('ha_mgmt_status');
  }

  // ha_uptime_diff_margin - computed: true, optional: false, required: false
  public get haUptimeDiffMargin() {
    return this.getNumberAttribute('ha_uptime_diff_margin');
  }

  // hb_interval - computed: true, optional: false, required: false
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }

  // hb_interval_in_milliseconds - computed: true, optional: false, required: false
  public get hbIntervalInMilliseconds() {
    return this.getStringAttribute('hb_interval_in_milliseconds');
  }

  // hb_lost_threshold - computed: true, optional: false, required: false
  public get hbLostThreshold() {
    return this.getNumberAttribute('hb_lost_threshold');
  }

  // hbdev - computed: true, optional: false, required: false
  public get hbdev() {
    return this.getStringAttribute('hbdev');
  }

  // hc_eth_type - computed: true, optional: false, required: false
  public get hcEthType() {
    return this.getStringAttribute('hc_eth_type');
  }

  // hello_holddown - computed: true, optional: false, required: false
  public get helloHolddown() {
    return this.getNumberAttribute('hello_holddown');
  }

  // http_proxy_threshold - computed: true, optional: false, required: false
  public get httpProxyThreshold() {
    return this.getStringAttribute('http_proxy_threshold');
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

  // imap_proxy_threshold - computed: true, optional: false, required: false
  public get imapProxyThreshold() {
    return this.getStringAttribute('imap_proxy_threshold');
  }

  // inter_cluster_session_sync - computed: true, optional: false, required: false
  public get interClusterSessionSync() {
    return this.getStringAttribute('inter_cluster_session_sync');
  }

  // ipsec_phase2_proposal - computed: true, optional: false, required: false
  public get ipsecPhase2Proposal() {
    return this.getStringAttribute('ipsec_phase2_proposal');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // l2ep_eth_type - computed: true, optional: false, required: false
  public get l2EpEthType() {
    return this.getStringAttribute('l2ep_eth_type');
  }

  // link_failed_signal - computed: true, optional: false, required: false
  public get linkFailedSignal() {
    return this.getStringAttribute('link_failed_signal');
  }

  // load_balance_all - computed: true, optional: false, required: false
  public get loadBalanceAll() {
    return this.getStringAttribute('load_balance_all');
  }

  // logical_sn - computed: true, optional: false, required: false
  public get logicalSn() {
    return this.getStringAttribute('logical_sn');
  }

  // memory_based_failover - computed: true, optional: false, required: false
  public get memoryBasedFailover() {
    return this.getStringAttribute('memory_based_failover');
  }

  // memory_compatible_mode - computed: true, optional: false, required: false
  public get memoryCompatibleMode() {
    return this.getStringAttribute('memory_compatible_mode');
  }

  // memory_failover_flip_timeout - computed: true, optional: false, required: false
  public get memoryFailoverFlipTimeout() {
    return this.getNumberAttribute('memory_failover_flip_timeout');
  }

  // memory_failover_monitor_period - computed: true, optional: false, required: false
  public get memoryFailoverMonitorPeriod() {
    return this.getNumberAttribute('memory_failover_monitor_period');
  }

  // memory_failover_sample_rate - computed: true, optional: false, required: false
  public get memoryFailoverSampleRate() {
    return this.getNumberAttribute('memory_failover_sample_rate');
  }

  // memory_failover_threshold - computed: true, optional: false, required: false
  public get memoryFailoverThreshold() {
    return this.getNumberAttribute('memory_failover_threshold');
  }

  // memory_threshold - computed: true, optional: false, required: false
  public get memoryThreshold() {
    return this.getStringAttribute('memory_threshold');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // multicast_ttl - computed: true, optional: false, required: false
  public get multicastTtl() {
    return this.getNumberAttribute('multicast_ttl');
  }

  // nntp_proxy_threshold - computed: true, optional: false, required: false
  public get nntpProxyThreshold() {
    return this.getStringAttribute('nntp_proxy_threshold');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getStringAttribute('override');
  }

  // override_wait_time - computed: true, optional: false, required: false
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pingserver_failover_threshold - computed: true, optional: false, required: false
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }

  // pingserver_flip_timeout - computed: true, optional: false, required: false
  public get pingserverFlipTimeout() {
    return this.getNumberAttribute('pingserver_flip_timeout');
  }

  // pingserver_monitor_interface - computed: true, optional: false, required: false
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }

  // pingserver_secondary_force_reset - computed: true, optional: false, required: false
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }

  // pingserver_slave_force_reset - computed: true, optional: false, required: false
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }

  // pop3_proxy_threshold - computed: true, optional: false, required: false
  public get pop3ProxyThreshold() {
    return this.getStringAttribute('pop3_proxy_threshold');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // route_hold - computed: true, optional: false, required: false
  public get routeHold() {
    return this.getNumberAttribute('route_hold');
  }

  // route_ttl - computed: true, optional: false, required: false
  public get routeTtl() {
    return this.getNumberAttribute('route_ttl');
  }

  // route_wait - computed: true, optional: false, required: false
  public get routeWait() {
    return this.getNumberAttribute('route_wait');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // secondary_vcluster - computed: true, optional: false, required: false
  private _secondaryVcluster = new DataFortiosSystemHaSecondaryVclusterList(this, "secondary_vcluster", false);
  public get secondaryVcluster() {
    return this._secondaryVcluster;
  }

  // session_pickup - computed: true, optional: false, required: false
  public get sessionPickup() {
    return this.getStringAttribute('session_pickup');
  }

  // session_pickup_connectionless - computed: true, optional: false, required: false
  public get sessionPickupConnectionless() {
    return this.getStringAttribute('session_pickup_connectionless');
  }

  // session_pickup_delay - computed: true, optional: false, required: false
  public get sessionPickupDelay() {
    return this.getStringAttribute('session_pickup_delay');
  }

  // session_pickup_expectation - computed: true, optional: false, required: false
  public get sessionPickupExpectation() {
    return this.getStringAttribute('session_pickup_expectation');
  }

  // session_pickup_nat - computed: true, optional: false, required: false
  public get sessionPickupNat() {
    return this.getStringAttribute('session_pickup_nat');
  }

  // session_sync_dev - computed: true, optional: false, required: false
  public get sessionSyncDev() {
    return this.getStringAttribute('session_sync_dev');
  }

  // smtp_proxy_threshold - computed: true, optional: false, required: false
  public get smtpProxyThreshold() {
    return this.getStringAttribute('smtp_proxy_threshold');
  }

  // ssd_failover - computed: true, optional: false, required: false
  public get ssdFailover() {
    return this.getStringAttribute('ssd_failover');
  }

  // standalone_config_sync - computed: true, optional: false, required: false
  public get standaloneConfigSync() {
    return this.getStringAttribute('standalone_config_sync');
  }

  // standalone_mgmt_vdom - computed: true, optional: false, required: false
  public get standaloneMgmtVdom() {
    return this.getStringAttribute('standalone_mgmt_vdom');
  }

  // sync_config - computed: true, optional: false, required: false
  public get syncConfig() {
    return this.getStringAttribute('sync_config');
  }

  // sync_packet_balance - computed: true, optional: false, required: false
  public get syncPacketBalance() {
    return this.getStringAttribute('sync_packet_balance');
  }

  // unicast_gateway - computed: true, optional: false, required: false
  public get unicastGateway() {
    return this.getStringAttribute('unicast_gateway');
  }

  // unicast_hb - computed: true, optional: false, required: false
  public get unicastHb() {
    return this.getStringAttribute('unicast_hb');
  }

  // unicast_hb_netmask - computed: true, optional: false, required: false
  public get unicastHbNetmask() {
    return this.getStringAttribute('unicast_hb_netmask');
  }

  // unicast_hb_peerip - computed: true, optional: false, required: false
  public get unicastHbPeerip() {
    return this.getStringAttribute('unicast_hb_peerip');
  }

  // unicast_peers - computed: true, optional: false, required: false
  private _unicastPeers = new DataFortiosSystemHaUnicastPeersList(this, "unicast_peers", false);
  public get unicastPeers() {
    return this._unicastPeers;
  }

  // unicast_status - computed: true, optional: false, required: false
  public get unicastStatus() {
    return this.getStringAttribute('unicast_status');
  }

  // uninterruptible_primary_wait - computed: true, optional: false, required: false
  public get uninterruptiblePrimaryWait() {
    return this.getNumberAttribute('uninterruptible_primary_wait');
  }

  // uninterruptible_upgrade - computed: true, optional: false, required: false
  public get uninterruptibleUpgrade() {
    return this.getStringAttribute('uninterruptible_upgrade');
  }

  // upgrade_mode - computed: true, optional: false, required: false
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }

  // vcluster - computed: true, optional: false, required: false
  private _vcluster = new DataFortiosSystemHaVclusterList(this, "vcluster", false);
  public get vcluster() {
    return this._vcluster;
  }

  // vcluster2 - computed: true, optional: false, required: false
  public get vcluster2() {
    return this.getStringAttribute('vcluster2');
  }

  // vcluster_id - computed: true, optional: false, required: false
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }

  // vcluster_status - computed: true, optional: false, required: false
  public get vclusterStatus() {
    return this.getStringAttribute('vcluster_status');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
