import * as cdktf from 'cdktf';
import { DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeExecList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeGrpcList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecycleList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecAffinityList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecContainerList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecDnsConfigList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecHostAliasesList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecImagePullSecretsList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateMetadataList,
DataDuplocloudK8SCronJobSpecJobTemplateSpecSelectorList,
DataDuplocloudK8SCronJobSpecJobTemplateMetadataList } from './structs0'
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader | undefined) {
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

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined) {
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

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPort {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpc {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpc | undefined) {
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

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader | undefined) {
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

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined) {
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

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResources {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfile {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpc {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpc | undefined) {
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

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader | undefined) {
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

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined) {
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

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainer {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // env_from - computed: true, optional: false, required: false
  private _envFrom = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }

  // liveness_probe - computed: true, optional: false, required: false
  private _livenessProbe = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  private _port = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerPortList(this, "port", false);
  public get port() {
    return this._port;
  }

  // readiness_probe - computed: true, optional: false, required: false
  private _readinessProbe = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // startup_probe - computed: true, optional: false, required: false
  private _startupProbe = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeList(this, "startup_probe", false);
  public get startupProbe() {
    return this._startupProbe;
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  private _volumeMount = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGate {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfile {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctl {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctl | undefined) {
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

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContext {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }

  // fs_group_change_policy - computed: true, optional: false, required: false
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }

  // supplemental_groups - computed: true, optional: false, required: false
  public get supplementalGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supplemental_groups')));
  }

  // sysctl - computed: true, optional: false, required: false
  private _sysctl = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextSysctlList(this, "sysctl", false);
  public get sysctl() {
    return this._sysctl;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToleration {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToleration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToleration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelector {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraint {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // max_skew - computed: true, optional: false, required: false
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }

  // when_unsatisfiable - computed: true, optional: false, required: false
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching_mode - computed: true, optional: false, required: false
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: false
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef | undefined) {
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitors - computed: true, optional: false, required: false
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: false
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinder {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined) {
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

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsi {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: false
  private _nodePublishSecretRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRefList(this, "node_publish_secret_ref", false);
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: false
  private _volumeAttributes = new cdktf.StringMap(this, "volume_attributes");
  public get volumeAttributes() {
    return this._volumeAttributes;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadata {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResources {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpec {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_modes - computed: true, optional: false, required: false
  public get accessModes() {
    return cdktf.Fn.tolist(this.getListAttribute('access_modes'));
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // storage_class_name - computed: true, optional: false, required: false
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }

  // volume_mode - computed: true, optional: false, required: false
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplate {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeral {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeral | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeral | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_claim_template - computed: true, optional: false, required: false
  private _volumeClaimTemplate = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralVolumeClaimTemplateList(this, "volume_claim_template", false);
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFc {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: false
  public get targetWwNs() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ww_ns'));
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined) {
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: false
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: false
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints_name - computed: true, optional: false, required: false
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: false
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: false
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocal {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfs {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: false
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMap {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecret {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: false
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSources {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // service_account_token - computed: true, optional: false, required: false
  private _serviceAccountToken = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenList(this, "service_account_token", false);
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjected {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef | undefined) {
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbd {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceph_monitors - computed: true, optional: false, required: false
  public get cephMonitors() {
    return cdktf.Fn.tolist(this.getListAttribute('ceph_monitors'));
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: false
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: false
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: false
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecret {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolume {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_elastic_block_store - computed: true, optional: false, required: false
  private _awsElasticBlockStore = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStoreList(this, "aws_elastic_block_store", false);
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }

  // azure_disk - computed: true, optional: false, required: false
  private _azureDisk = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDiskList(this, "azure_disk", false);
  public get azureDisk() {
    return this._azureDisk;
  }

  // azure_file - computed: true, optional: false, required: false
  private _azureFile = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFileList(this, "azure_file", false);
  public get azureFile() {
    return this._azureFile;
  }

  // ceph_fs - computed: true, optional: false, required: false
  private _cephFs = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsList(this, "ceph_fs", false);
  public get cephFs() {
    return this._cephFs;
  }

  // cinder - computed: true, optional: false, required: false
  private _cinder = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCinderList(this, "cinder", false);
  public get cinder() {
    return this._cinder;
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // csi - computed: true, optional: false, required: false
  private _csi = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeCsiList(this, "csi", false);
  public get csi() {
    return this._csi;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDirList(this, "empty_dir", false);
  public get emptyDir() {
    return this._emptyDir;
  }

  // ephemeral - computed: true, optional: false, required: false
  private _ephemeral = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeEphemeralList(this, "ephemeral", false);
  public get ephemeral() {
    return this._ephemeral;
  }

  // fc - computed: true, optional: false, required: false
  private _fc = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFcList(this, "fc", false);
  public get fc() {
    return this._fc;
  }

  // flex_volume - computed: true, optional: false, required: false
  private _flexVolume = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeList(this, "flex_volume", false);
  public get flexVolume() {
    return this._flexVolume;
  }

  // flocker - computed: true, optional: false, required: false
  private _flocker = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeFlockerList(this, "flocker", false);
  public get flocker() {
    return this._flocker;
  }

  // gce_persistent_disk - computed: true, optional: false, required: false
  private _gcePersistentDisk = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDiskList(this, "gce_persistent_disk", false);
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }

  // git_repo - computed: true, optional: false, required: false
  private _gitRepo = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepoList(this, "git_repo", false);
  public get gitRepo() {
    return this._gitRepo;
  }

  // glusterfs - computed: true, optional: false, required: false
  private _glusterfs = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfsList(this, "glusterfs", false);
  public get glusterfs() {
    return this._glusterfs;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeHostPathList(this, "host_path", false);
  public get hostPath() {
    return this._hostPath;
  }

  // iscsi - computed: true, optional: false, required: false
  private _iscsi = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeIscsiList(this, "iscsi", false);
  public get iscsi() {
    return this._iscsi;
  }

  // local - computed: true, optional: false, required: false
  private _local = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeLocalList(this, "local", false);
  public get local() {
    return this._local;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: false
  private _nfs = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeNfsList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  private _persistentVolumeClaim = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaimList(this, "persistent_volume_claim", false);
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }

  // photon_persistent_disk - computed: true, optional: false, required: false
  private _photonPersistentDisk = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDiskList(this, "photon_persistent_disk", false);
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }

  // projected - computed: true, optional: false, required: false
  private _projected = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeProjectedList(this, "projected", false);
  public get projected() {
    return this._projected;
  }

  // quobyte - computed: true, optional: false, required: false
  private _quobyte = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyteList(this, "quobyte", false);
  public get quobyte() {
    return this._quobyte;
  }

  // rbd - computed: true, optional: false, required: false
  private _rbd = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeRbdList(this, "rbd", false);
  public get rbd() {
    return this._rbd;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // vsphere_volume - computed: true, optional: false, required: false
  private _vsphereVolume = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolumeList(this, "vsphere_volume", false);
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpec {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: false
  private _affinity = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: false
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: false
  private _hostAliases = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }

  // host_ipc - computed: true, optional: false, required: false
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: false
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_container - computed: true, optional: false, required: false
  private _initContainer = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // priority_class_name - computed: true, optional: false, required: false
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: false
  private _readinessGate = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecReadinessGateList(this, "readiness_gate", false);
  public get readinessGate() {
    return this._readinessGate;
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // runtime_class_name - computed: true, optional: false, required: false
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }

  // scheduler_name - computed: true, optional: false, required: false
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: false
  private _toleration = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTolerationList(this, "toleration", false);
  public get toleration() {
    return this._toleration;
  }

  // topology_spread_constraint - computed: true, optional: false, required: false
  private _topologySpreadConstraint = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecTopologySpreadConstraintList(this, "topology_spread_constraint", false);
  public get topologySpreadConstraint() {
    return this._topologySpreadConstraint;
  }

  // volume - computed: true, optional: false, required: false
  private _volume = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplate {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplateSpec {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateSpecToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateSpecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // backoff_limit - computed: true, optional: false, required: false
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }

  // completion_mode - computed: true, optional: false, required: false
  public get completionMode() {
    return this.getStringAttribute('completion_mode');
  }

  // completions - computed: true, optional: false, required: false
  public get completions() {
    return this.getNumberAttribute('completions');
  }

  // manual_selector - computed: true, optional: false, required: false
  public get manualSelector() {
    return this.getBooleanAttribute('manual_selector');
  }

  // parallelism - computed: true, optional: false, required: false
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }

  // selector - computed: true, optional: false, required: false
  private _selector = new DataDuplocloudK8SCronJobSpecJobTemplateSpecSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataDuplocloudK8SCronJobSpecJobTemplateSpecTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }

  // ttl_seconds_after_finished - computed: true, optional: false, required: false
  public get ttlSecondsAfterFinished() {
    return this.getStringAttribute('ttl_seconds_after_finished');
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateSpecOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpecJobTemplate {
}

export function dataDuplocloudK8SCronJobSpecJobTemplateToTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecJobTemplateToHclTerraform(struct?: DataDuplocloudK8SCronJobSpecJobTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecJobTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpecJobTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpecJobTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataDuplocloudK8SCronJobSpecJobTemplateMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDuplocloudK8SCronJobSpecJobTemplateSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataDuplocloudK8SCronJobSpecJobTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecJobTemplateOutputReference {
    return new DataDuplocloudK8SCronJobSpecJobTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobSpec {
}

export function dataDuplocloudK8SCronJobSpecToTerraform(struct?: DataDuplocloudK8SCronJobSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudK8SCronJobSpecToHclTerraform(struct?: DataDuplocloudK8SCronJobSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudK8SCronJobSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudK8SCronJobSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency_policy - computed: true, optional: false, required: false
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }

  // failed_jobs_history_limit - computed: true, optional: false, required: false
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }

  // job_template - computed: true, optional: false, required: false
  private _jobTemplate = new DataDuplocloudK8SCronJobSpecJobTemplateList(this, "job_template", false);
  public get jobTemplate() {
    return this._jobTemplate;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // starting_deadline_seconds - computed: true, optional: false, required: false
  public get startingDeadlineSeconds() {
    return this.getNumberAttribute('starting_deadline_seconds');
  }

  // successful_jobs_history_limit - computed: true, optional: false, required: false
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
}

export class DataDuplocloudK8SCronJobSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudK8SCronJobSpecOutputReference {
    return new DataDuplocloudK8SCronJobSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudK8SCronJobMetadata {
  /**
  * An unstructured key value map stored with the cronjob that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/k8s_cron_job#annotations DataDuplocloudK8SCronJob#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/k8s_cron_job#generate_name DataDuplocloudK8SCronJob#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the cronjob. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/k8s_cron_job#labels DataDuplocloudK8SCronJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the cronjob, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/k8s_cron_job#name DataDuplocloudK8SCronJob#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the cronjob must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/k8s_cron_job#namespace DataDuplocloudK8SCronJob#namespace}
  */
  readonly namespace?: string;
}

export function dataDuplocloudK8SCronJobMetadataToTerraform(struct?: DataDuplocloudK8SCronJobMetadataOutputReference | DataDuplocloudK8SCronJobMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataDuplocloudK8SCronJobMetadataToHclTerraform(struct?: DataDuplocloudK8SCronJobMetadataOutputReference | DataDuplocloudK8SCronJobMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDuplocloudK8SCronJobMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDuplocloudK8SCronJobMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudK8SCronJobMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
