// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudHssIntrusionEventsV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Customized start time of a segment. The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#begin_time DataOpentelekomcloudHssIntrusionEventsV5#begin_time}
  */
  readonly beginTime?: string;
  /**
  * Event category. Its value can be: host (host security event) or container (container security event).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#category DataOpentelekomcloudHssIntrusionEventsV5#category}
  */
  readonly category: string;
  /**
  * Container instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#container_name DataOpentelekomcloudHssIntrusionEventsV5#container_name}
  */
  readonly containerName?: string;
  /**
  * Number of days to be queried. This parameter is mutually exclusive with begin_time and end_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#days DataOpentelekomcloudHssIntrusionEventsV5#days}
  */
  readonly days?: number;
  /**
  * Customized end time of a segment. The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#end_time DataOpentelekomcloudHssIntrusionEventsV5#end_time}
  */
  readonly endTime?: string;
  /**
  * Enterprise project ID. The value 0 indicates the default enterprise project. To query all enterprise projects, set this parameter to all_granted_eps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#enterprise_project_id DataOpentelekomcloudHssIntrusionEventsV5#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Intrusion types. Possible values include:
  * 1001: Malware
  * 1010: Rootkit
  * 1011: Ransomware
  * 1015: Web shell
  * 1017: Reverse shell
  * 2001: Common vulnerability exploit
  * 3002: File privilege escalation
  * 3003: Process privilege escalation
  * 3004: Important file change
  * 3005: File/Directory change
  * 3007: Abnormal process behavior
  * 3015: High-risk command execution
  * 3018: Abnormal shell
  * 3027: Suspicious crontab tasks
  * 4002: Brute-force attack
  * 4004: Abnormal login
  * 4006: Invalid system account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#event_types DataOpentelekomcloudHssIntrusionEventsV5#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * Status. Possible values: unhandled, handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#handle_status DataOpentelekomcloudHssIntrusionEventsV5#handle_status}
  */
  readonly handleStatus?: string;
  /**
  * Host ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#host_id DataOpentelekomcloudHssIntrusionEventsV5#host_id}
  */
  readonly hostId?: string;
  /**
  * Server name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#host_name DataOpentelekomcloudHssIntrusionEventsV5#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#id DataOpentelekomcloudHssIntrusionEventsV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#private_ip DataOpentelekomcloudHssIntrusionEventsV5#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Threat level. Possible values: Security, Low, Medium, High, Critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#severity DataOpentelekomcloudHssIntrusionEventsV5#severity}
  */
  readonly severity?: string;
}
export interface DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fd_count - computed: true, optional: false, required: false
  public get fdCount() {
    return this.getStringAttribute('fd_count');
  }

  // fd_info - computed: true, optional: false, required: false
  public get fdInfo() {
    return this.getStringAttribute('fd_info');
  }

  // file_action - computed: true, optional: false, required: false
  public get fileAction() {
    return this.getStringAttribute('file_action');
  }

  // file_alias - computed: true, optional: false, required: false
  public get fileAlias() {
    return this.getStringAttribute('file_alias');
  }

  // file_atime - computed: true, optional: false, required: false
  public get fileAtime() {
    return this.getStringAttribute('file_atime');
  }

  // file_attr - computed: true, optional: false, required: false
  public get fileAttr() {
    return this.getStringAttribute('file_attr');
  }

  // file_change_attr - computed: true, optional: false, required: false
  public get fileChangeAttr() {
    return this.getStringAttribute('file_change_attr');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_ctime - computed: true, optional: false, required: false
  public get fileCtime() {
    return this.getStringAttribute('file_ctime');
  }

  // file_desc - computed: true, optional: false, required: false
  public get fileDesc() {
    return this.getStringAttribute('file_desc');
  }

  // file_hash - computed: true, optional: false, required: false
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }

  // file_key_word - computed: true, optional: false, required: false
  public get fileKeyWord() {
    return this.getStringAttribute('file_key_word');
  }

  // file_md5 - computed: true, optional: false, required: false
  public get fileMd5() {
    return this.getStringAttribute('file_md5');
  }

  // file_mtime - computed: true, optional: false, required: false
  public get fileMtime() {
    return this.getStringAttribute('file_mtime');
  }

  // file_new_path - computed: true, optional: false, required: false
  public get fileNewPath() {
    return this.getStringAttribute('file_new_path');
  }

  // file_operation - computed: true, optional: false, required: false
  public get fileOperation() {
    return this.getStringAttribute('file_operation');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // file_sha256 - computed: true, optional: false, required: false
  public get fileSha256() {
    return this.getStringAttribute('file_sha256');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // is_dir - computed: true, optional: false, required: false
  public get isDir() {
    return this.getStringAttribute('is_dir');
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // file_attr - computed: true, optional: false, required: false
  public get fileAttr() {
    return this.getStringAttribute('file_attr');
  }

  // file_hash - computed: true, optional: false, required: false
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // is_parent - computed: true, optional: false, required: false
  public get isParent() {
    return this.getBooleanAttribute('is_parent');
  }

  // keyword - computed: true, optional: false, required: false
  public get keyword() {
    return this.getStringAttribute('keyword');
  }

  // login_ip - computed: true, optional: false, required: false
  public get loginIp() {
    return this.getStringAttribute('login_ip');
  }

  // login_user_name - computed: true, optional: false, required: false
  public get loginUserName() {
    return this.getStringAttribute('login_user_name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // process_pid - computed: true, optional: false, required: false
  public get processPid() {
    return this.getNumberAttribute('process_pid');
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_process_cmdline - computed: true, optional: false, required: false
  public get childProcessCmdline() {
    return this.getStringAttribute('child_process_cmdline');
  }

  // child_process_egid - computed: true, optional: false, required: false
  public get childProcessEgid() {
    return this.getNumberAttribute('child_process_egid');
  }

  // child_process_euid - computed: true, optional: false, required: false
  public get childProcessEuid() {
    return this.getNumberAttribute('child_process_euid');
  }

  // child_process_filename - computed: true, optional: false, required: false
  public get childProcessFilename() {
    return this.getStringAttribute('child_process_filename');
  }

  // child_process_gid - computed: true, optional: false, required: false
  public get childProcessGid() {
    return this.getNumberAttribute('child_process_gid');
  }

  // child_process_name - computed: true, optional: false, required: false
  public get childProcessName() {
    return this.getStringAttribute('child_process_name');
  }

  // child_process_path - computed: true, optional: false, required: false
  public get childProcessPath() {
    return this.getStringAttribute('child_process_path');
  }

  // child_process_pid - computed: true, optional: false, required: false
  public get childProcessPid() {
    return this.getNumberAttribute('child_process_pid');
  }

  // child_process_start_time - computed: true, optional: false, required: false
  public get childProcessStartTime() {
    return this.getNumberAttribute('child_process_start_time');
  }

  // child_process_uid - computed: true, optional: false, required: false
  public get childProcessUid() {
    return this.getNumberAttribute('child_process_uid');
  }

  // escape_cmd - computed: true, optional: false, required: false
  public get escapeCmd() {
    return this.getStringAttribute('escape_cmd');
  }

  // escape_mode - computed: true, optional: false, required: false
  public get escapeMode() {
    return this.getStringAttribute('escape_mode');
  }

  // parent_process_cmdline - computed: true, optional: false, required: false
  public get parentProcessCmdline() {
    return this.getStringAttribute('parent_process_cmdline');
  }

  // parent_process_egid - computed: true, optional: false, required: false
  public get parentProcessEgid() {
    return this.getNumberAttribute('parent_process_egid');
  }

  // parent_process_euid - computed: true, optional: false, required: false
  public get parentProcessEuid() {
    return this.getNumberAttribute('parent_process_euid');
  }

  // parent_process_filename - computed: true, optional: false, required: false
  public get parentProcessFilename() {
    return this.getStringAttribute('parent_process_filename');
  }

  // parent_process_gid - computed: true, optional: false, required: false
  public get parentProcessGid() {
    return this.getNumberAttribute('parent_process_gid');
  }

  // parent_process_name - computed: true, optional: false, required: false
  public get parentProcessName() {
    return this.getStringAttribute('parent_process_name');
  }

  // parent_process_path - computed: true, optional: false, required: false
  public get parentProcessPath() {
    return this.getStringAttribute('parent_process_path');
  }

  // parent_process_pid - computed: true, optional: false, required: false
  public get parentProcessPid() {
    return this.getNumberAttribute('parent_process_pid');
  }

  // parent_process_start_time - computed: true, optional: false, required: false
  public get parentProcessStartTime() {
    return this.getNumberAttribute('parent_process_start_time');
  }

  // parent_process_uid - computed: true, optional: false, required: false
  public get parentProcessUid() {
    return this.getNumberAttribute('parent_process_uid');
  }

  // process_cmdline - computed: true, optional: false, required: false
  public get processCmdline() {
    return this.getStringAttribute('process_cmdline');
  }

  // process_egid - computed: true, optional: false, required: false
  public get processEgid() {
    return this.getNumberAttribute('process_egid');
  }

  // process_euid - computed: true, optional: false, required: false
  public get processEuid() {
    return this.getNumberAttribute('process_euid');
  }

  // process_filename - computed: true, optional: false, required: false
  public get processFilename() {
    return this.getStringAttribute('process_filename');
  }

  // process_gid - computed: true, optional: false, required: false
  public get processGid() {
    return this.getNumberAttribute('process_gid');
  }

  // process_hash - computed: true, optional: false, required: false
  public get processHash() {
    return this.getStringAttribute('process_hash');
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }

  // process_path - computed: true, optional: false, required: false
  public get processPath() {
    return this.getStringAttribute('process_path');
  }

  // process_pid - computed: true, optional: false, required: false
  public get processPid() {
    return this.getNumberAttribute('process_pid');
  }

  // process_start_time - computed: true, optional: false, required: false
  public get processStartTime() {
    return this.getNumberAttribute('process_start_time');
  }

  // process_uid - computed: true, optional: false, required: false
  public get processUid() {
    return this.getNumberAttribute('process_uid');
  }

  // process_username - computed: true, optional: false, required: false
  public get processUsername() {
    return this.getStringAttribute('process_username');
  }

  // virt_cmd - computed: true, optional: false, required: false
  public get virtCmd() {
    return this.getStringAttribute('virt_cmd');
  }

  // virt_process_name - computed: true, optional: false, required: false
  public get virtProcessName() {
    return this.getStringAttribute('virt_process_name');
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getStringAttribute('container_id');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // ecs_id - computed: true, optional: false, required: false
  public get ecsId() {
    return this.getStringAttribute('ecs_id');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // host_attr - computed: true, optional: false, required: false
  public get hostAttr() {
    return this.getStringAttribute('host_attr');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // microservice - computed: true, optional: false, required: false
  public get microservice() {
    return this.getStringAttribute('microservice');
  }

  // os_bit - computed: true, optional: false, required: false
  public get osBit() {
    return this.getStringAttribute('os_bit');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // sys_arch - computed: true, optional: false, required: false
  public get sysArch() {
    return this.getStringAttribute('sys_arch');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_uuid - computed: true, optional: false, required: false
  public get vmUuid() {
    return this.getStringAttribute('vm_uuid');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // login_fail_count - computed: true, optional: false, required: false
  public get loginFailCount() {
    return this.getNumberAttribute('login_fail_count');
  }

  // login_ip - computed: true, optional: false, required: false
  public get loginIp() {
    return this.getStringAttribute('login_ip');
  }

  // login_last_time - computed: true, optional: false, required: false
  public get loginLastTime() {
    return this.getNumberAttribute('login_last_time');
  }

  // login_mode - computed: true, optional: false, required: false
  public get loginMode() {
    return this.getNumberAttribute('login_mode');
  }

  // pwd_hash - computed: true, optional: false, required: false
  public get pwdHash() {
    return this.getStringAttribute('pwd_hash');
  }

  // pwd_max_days - computed: true, optional: false, required: false
  public get pwdMaxDays() {
    return this.getNumberAttribute('pwd_max_days');
  }

  // pwd_min_days - computed: true, optional: false, required: false
  public get pwdMinDays() {
    return this.getNumberAttribute('pwd_min_days');
  }

  // pwd_used_days - computed: true, optional: false, required: false
  public get pwdUsedDays() {
    return this.getNumberAttribute('pwd_used_days');
  }

  // pwd_warn_left_days - computed: true, optional: false, required: false
  public get pwdWarnLeftDays() {
    return this.getNumberAttribute('pwd_warn_left_days');
  }

  // pwd_with_fuzzing - computed: true, optional: false, required: false
  public get pwdWithFuzzing() {
    return this.getStringAttribute('pwd_with_fuzzing');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // user_gid - computed: true, optional: false, required: false
  public get userGid() {
    return this.getNumberAttribute('user_gid');
  }

  // user_group_name - computed: true, optional: false, required: false
  public get userGroupName() {
    return this.getStringAttribute('user_group_name');
  }

  // user_home_dir - computed: true, optional: false, required: false
  public get userHomeDir() {
    return this.getStringAttribute('user_home_dir');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudHssIntrusionEventsV5Events {
}

export function dataOpentelekomcloudHssIntrusionEventsV5EventsToTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5Events): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssIntrusionEventsV5EventsToHclTerraform(struct?: DataOpentelekomcloudHssIntrusionEventsV5Events): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssIntrusionEventsV5Events | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssIntrusionEventsV5Events | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // asset_value - computed: true, optional: false, required: false
  public get assetValue() {
    return this.getStringAttribute('asset_value');
  }

  // attack_phase - computed: true, optional: false, required: false
  public get attackPhase() {
    return this.getStringAttribute('attack_phase');
  }

  // attack_tag - computed: true, optional: false, required: false
  public get attackTag() {
    return this.getStringAttribute('attack_tag');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // event_class_id - computed: true, optional: false, required: false
  public get eventClassId() {
    return this.getStringAttribute('event_class_id');
  }

  // event_details - computed: true, optional: false, required: false
  public get eventDetails() {
    return this.getStringAttribute('event_details');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getNumberAttribute('event_type');
  }

  // file_info_list - computed: true, optional: false, required: false
  private _fileInfoList = new DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList(this, "file_info_list", false);
  public get fileInfoList() {
    return this._fileInfoList;
  }

  // handle_method - computed: true, optional: false, required: false
  public get handleMethod() {
    return this.getStringAttribute('handle_method');
  }

  // handle_status - computed: true, optional: false, required: false
  public get handleStatus() {
    return this.getStringAttribute('handle_status');
  }

  // handle_time - computed: true, optional: false, required: false
  public get handleTime() {
    return this.getNumberAttribute('handle_time');
  }

  // handler - computed: true, optional: false, required: false
  public get handler() {
    return this.getStringAttribute('handler');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_status - computed: true, optional: false, required: false
  public get hostStatus() {
    return this.getStringAttribute('host_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // occur_time - computed: true, optional: false, required: false
  public get occurTime() {
    return this.getNumberAttribute('occur_time');
  }

  // operate_accept_list - computed: true, optional: false, required: false
  public get operateAcceptList() {
    return cdktf.Fn.tolist(this.getListAttribute('operate_accept_list'));
  }

  // operate_detail_list - computed: true, optional: false, required: false
  private _operateDetailList = new DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList(this, "operate_detail_list", false);
  public get operateDetailList() {
    return this._operateDetailList;
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // process_info_list - computed: true, optional: false, required: false
  private _processInfoList = new DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList(this, "process_info_list", false);
  public get processInfoList() {
    return this._processInfoList;
  }

  // protect_status - computed: true, optional: false, required: false
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // resource_info - computed: true, optional: false, required: false
  private _resourceInfo = new DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList(this, "resource_info", false);
  public get resourceInfo() {
    return this._resourceInfo;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // user_info_list - computed: true, optional: false, required: false
  private _userInfoList = new DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList(this, "user_info_list", false);
  public get userInfoList() {
    return this._userInfoList;
  }
}

export class DataOpentelekomcloudHssIntrusionEventsV5EventsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference {
    return new DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5 opentelekomcloud_hss_intrusion_events_v5}
*/
export class DataOpentelekomcloudHssIntrusionEventsV5 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_hss_intrusion_events_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudHssIntrusionEventsV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudHssIntrusionEventsV5 to import
  * @param importFromId The id of the existing DataOpentelekomcloudHssIntrusionEventsV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudHssIntrusionEventsV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_hss_intrusion_events_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_intrusion_events_v5 opentelekomcloud_hss_intrusion_events_v5} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudHssIntrusionEventsV5Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudHssIntrusionEventsV5Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_hss_intrusion_events_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._beginTime = config.beginTime;
    this._category = config.category;
    this._containerName = config.containerName;
    this._days = config.days;
    this._endTime = config.endTime;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._eventTypes = config.eventTypes;
    this._handleStatus = config.handleStatus;
    this._hostId = config.hostId;
    this._hostName = config.hostName;
    this._id = config.id;
    this._privateIp = config.privateIp;
    this._severity = config.severity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin_time - computed: false, optional: true, required: false
  private _beginTime?: string; 
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  public resetBeginTime() {
    this._beginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataOpentelekomcloudHssIntrusionEventsV5EventsList(this, "events", false);
  public get events() {
    return this._events;
  }

  // handle_status - computed: false, optional: true, required: false
  private _handleStatus?: string; 
  public get handleStatus() {
    return this.getStringAttribute('handle_status');
  }
  public set handleStatus(value: string) {
    this._handleStatus = value;
  }
  public resetHandleStatus() {
    this._handleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleStatusInput() {
    return this._handleStatus;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin_time: cdktf.stringToTerraform(this._beginTime),
      category: cdktf.stringToTerraform(this._category),
      container_name: cdktf.stringToTerraform(this._containerName),
      days: cdktf.numberToTerraform(this._days),
      end_time: cdktf.stringToTerraform(this._endTime),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      handle_status: cdktf.stringToTerraform(this._handleStatus),
      host_id: cdktf.stringToTerraform(this._hostId),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      severity: cdktf.stringToTerraform(this._severity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      begin_time: {
        value: cdktf.stringToHclTerraform(this._beginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days: {
        value: cdktf.numberToHclTerraform(this._days),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      handle_status: {
        value: cdktf.stringToHclTerraform(this._handleStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
