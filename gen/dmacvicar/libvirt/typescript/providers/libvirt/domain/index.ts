// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#arch Domain#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#autostart Domain#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#cloudinit Domain#cloudinit}
  */
  readonly cloudinit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#cmdline Domain#cmdline}
  */
  readonly cmdline?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#coreos_ignition Domain#coreos_ignition}
  */
  readonly coreosIgnition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#emulator Domain#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#firmware Domain#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#fw_cfg_name Domain#fw_cfg_name}
  */
  readonly fwCfgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#initrd Domain#initrd}
  */
  readonly initrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#kernel Domain#kernel}
  */
  readonly kernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#machine Domain#machine}
  */
  readonly machine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#memory Domain#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#metadata Domain#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#qemu_agent Domain#qemu_agent}
  */
  readonly qemuAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#running Domain#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#vcpu Domain#vcpu}
  */
  readonly vcpu?: number;
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#boot_device Domain#boot_device}
  */
  readonly bootDevice?: DomainBootDevice[] | cdktf.IResolvable;
  /**
  * console block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#console Domain#console}
  */
  readonly console?: DomainConsole[] | cdktf.IResolvable;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#cpu Domain#cpu}
  */
  readonly cpu?: DomainCpu;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#disk Domain#disk}
  */
  readonly disk?: DomainDisk[] | cdktf.IResolvable;
  /**
  * filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#filesystem Domain#filesystem}
  */
  readonly filesystem?: DomainFilesystem[] | cdktf.IResolvable;
  /**
  * graphics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#graphics Domain#graphics}
  */
  readonly graphics?: DomainGraphics;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#network_interface Domain#network_interface}
  */
  readonly networkInterface?: DomainNetworkInterface[] | cdktf.IResolvable;
  /**
  * nvram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#nvram Domain#nvram}
  */
  readonly nvram?: DomainNvram;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#timeouts Domain#timeouts}
  */
  readonly timeouts?: DomainTimeouts;
  /**
  * tpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#tpm Domain#tpm}
  */
  readonly tpm?: DomainTpm;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#video Domain#video}
  */
  readonly video?: DomainVideo;
  /**
  * xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#xml Domain#xml}
  */
  readonly xml?: DomainXml;
}
export interface DomainBootDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#dev Domain#dev}
  */
  readonly dev?: string[];
}

export function domainBootDeviceToTerraform(struct?: DomainBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dev),
  }
}


export function domainBootDeviceToHclTerraform(struct?: DomainBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dev),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dev = value.dev;
    }
  }

  // dev - computed: false, optional: true, required: false
  private _dev?: string[]; 
  public get dev() {
    return this.getListAttribute('dev');
  }
  public set dev(value: string[]) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }
}

export class DomainBootDeviceList extends cdktf.ComplexList {
  public internalValue? : DomainBootDevice[] | cdktf.IResolvable

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
  public get(index: number): DomainBootDeviceOutputReference {
    return new DomainBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainConsole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#source_host Domain#source_host}
  */
  readonly sourceHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#source_path Domain#source_path}
  */
  readonly sourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#source_service Domain#source_service}
  */
  readonly sourceService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#target_port Domain#target_port}
  */
  readonly targetPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#target_type Domain#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
}

export function domainConsoleToTerraform(struct?: DomainConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_host: cdktf.stringToTerraform(struct!.sourceHost),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
    source_service: cdktf.stringToTerraform(struct!.sourceService),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainConsoleToHclTerraform(struct?: DomainConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_host: {
      value: cdktf.stringToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service: {
      value: cdktf.stringToHclTerraform(struct!.sourceService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainConsoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    if (this._sourceService !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceService = this._sourceService;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceHost = undefined;
      this._sourcePath = undefined;
      this._sourceService = undefined;
      this._targetPort = undefined;
      this._targetType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceHost = value.sourceHost;
      this._sourcePath = value.sourcePath;
      this._sourceService = value.sourceService;
      this._targetPort = value.targetPort;
      this._targetType = value.targetType;
      this._type = value.type;
    }
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: string; 
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }
  public set sourceHost(value: string) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // source_service - computed: false, optional: true, required: false
  private _sourceService?: string; 
  public get sourceService() {
    return this.getStringAttribute('source_service');
  }
  public set sourceService(value: string) {
    this._sourceService = value;
  }
  public resetSourceService() {
    this._sourceService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInput() {
    return this._sourceService;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DomainConsoleList extends cdktf.ComplexList {
  public internalValue? : DomainConsole[] | cdktf.IResolvable

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
  public get(index: number): DomainConsoleOutputReference {
    return new DomainConsoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainCpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#mode Domain#mode}
  */
  readonly mode?: string;
}

export function domainCpuToTerraform(struct?: DomainCpuOutputReference | DomainCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function domainCpuToHclTerraform(struct?: DomainCpuOutputReference | DomainCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DomainDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#block_device Domain#block_device}
  */
  readonly blockDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#file Domain#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#scsi Domain#scsi}
  */
  readonly scsi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#url Domain#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#volume_id Domain#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#wwn Domain#wwn}
  */
  readonly wwn?: string;
}

export function domainDiskToTerraform(struct?: DomainDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_device: cdktf.stringToTerraform(struct!.blockDevice),
    file: cdktf.stringToTerraform(struct!.file),
    scsi: cdktf.booleanToTerraform(struct!.scsi),
    url: cdktf.stringToTerraform(struct!.url),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    wwn: cdktf.stringToTerraform(struct!.wwn),
  }
}


export function domainDiskToHclTerraform(struct?: DomainDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_device: {
      value: cdktf.stringToHclTerraform(struct!.blockDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scsi: {
      value: cdktf.booleanToHclTerraform(struct!.scsi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDevice = this._blockDevice;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._scsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsi = this._scsi;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockDevice = undefined;
      this._file = undefined;
      this._scsi = undefined;
      this._url = undefined;
      this._volumeId = undefined;
      this._wwn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockDevice = value.blockDevice;
      this._file = value.file;
      this._scsi = value.scsi;
      this._url = value.url;
      this._volumeId = value.volumeId;
      this._wwn = value.wwn;
    }
  }

  // block_device - computed: false, optional: true, required: false
  private _blockDevice?: string; 
  public get blockDevice() {
    return this.getStringAttribute('block_device');
  }
  public set blockDevice(value: string) {
    this._blockDevice = value;
  }
  public resetBlockDevice() {
    this._blockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceInput() {
    return this._blockDevice;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // scsi - computed: false, optional: true, required: false
  private _scsi?: boolean | cdktf.IResolvable; 
  public get scsi() {
    return this.getBooleanAttribute('scsi');
  }
  public set scsi(value: boolean | cdktf.IResolvable) {
    this._scsi = value;
  }
  public resetScsi() {
    this._scsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiInput() {
    return this._scsi;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // wwn - computed: true, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }
}

export class DomainDiskList extends cdktf.ComplexList {
  public internalValue? : DomainDisk[] | cdktf.IResolvable

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
  public get(index: number): DomainDiskOutputReference {
    return new DomainDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#accessmode Domain#accessmode}
  */
  readonly accessmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#readonly Domain#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#source Domain#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#target Domain#target}
  */
  readonly target: string;
}

export function domainFilesystemToTerraform(struct?: DomainFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessmode: cdktf.stringToTerraform(struct!.accessmode),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function domainFilesystemToHclTerraform(struct?: DomainFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessmode: {
      value: cdktf.stringToHclTerraform(struct!.accessmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainFilesystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessmode = this._accessmode;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessmode = undefined;
      this._readonly = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessmode = value.accessmode;
      this._readonly = value.readonly;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: string; 
  public get accessmode() {
    return this.getStringAttribute('accessmode');
  }
  public set accessmode(value: string) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DomainFilesystemList extends cdktf.ComplexList {
  public internalValue? : DomainFilesystem[] | cdktf.IResolvable

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
  public get(index: number): DomainFilesystemOutputReference {
    return new DomainFilesystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainGraphics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#autoport Domain#autoport}
  */
  readonly autoport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#listen_address Domain#listen_address}
  */
  readonly listenAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#listen_type Domain#listen_type}
  */
  readonly listenType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#websocket Domain#websocket}
  */
  readonly websocket?: number;
}

export function domainGraphicsToTerraform(struct?: DomainGraphicsOutputReference | DomainGraphics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoport: cdktf.booleanToTerraform(struct!.autoport),
    listen_address: cdktf.stringToTerraform(struct!.listenAddress),
    listen_type: cdktf.stringToTerraform(struct!.listenType),
    type: cdktf.stringToTerraform(struct!.type),
    websocket: cdktf.numberToTerraform(struct!.websocket),
  }
}


export function domainGraphicsToHclTerraform(struct?: DomainGraphicsOutputReference | DomainGraphics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoport: {
      value: cdktf.booleanToHclTerraform(struct!.autoport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    listen_address: {
      value: cdktf.stringToHclTerraform(struct!.listenAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen_type: {
      value: cdktf.stringToHclTerraform(struct!.listenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    websocket: {
      value: cdktf.numberToHclTerraform(struct!.websocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainGraphicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainGraphics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoport !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoport = this._autoport;
    }
    if (this._listenAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenAddress = this._listenAddress;
    }
    if (this._listenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenType = this._listenType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._websocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainGraphics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoport = undefined;
      this._listenAddress = undefined;
      this._listenType = undefined;
      this._type = undefined;
      this._websocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoport = value.autoport;
      this._listenAddress = value.listenAddress;
      this._listenType = value.listenType;
      this._type = value.type;
      this._websocket = value.websocket;
    }
  }

  // autoport - computed: false, optional: true, required: false
  private _autoport?: boolean | cdktf.IResolvable; 
  public get autoport() {
    return this.getBooleanAttribute('autoport');
  }
  public set autoport(value: boolean | cdktf.IResolvable) {
    this._autoport = value;
  }
  public resetAutoport() {
    this._autoport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoportInput() {
    return this._autoport;
  }

  // listen_address - computed: false, optional: true, required: false
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  public resetListenAddress() {
    this._listenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // listen_type - computed: false, optional: true, required: false
  private _listenType?: string; 
  public get listenType() {
    return this.getStringAttribute('listen_type');
  }
  public set listenType(value: string) {
    this._listenType = value;
  }
  public resetListenType() {
    this._listenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenTypeInput() {
    return this._listenType;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket?: number; 
  public get websocket() {
    return this.getNumberAttribute('websocket');
  }
  public set websocket(value: number) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }
}
export interface DomainNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#addresses Domain#addresses}
  */
  readonly addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#bridge Domain#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#hostname Domain#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#mac Domain#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#macvtap Domain#macvtap}
  */
  readonly macvtap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#network_id Domain#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#network_name Domain#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#passthrough Domain#passthrough}
  */
  readonly passthrough?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#private Domain#private}
  */
  readonly private?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#vepa Domain#vepa}
  */
  readonly vepa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#wait_for_lease Domain#wait_for_lease}
  */
  readonly waitForLease?: boolean | cdktf.IResolvable;
}

export function domainNetworkInterfaceToTerraform(struct?: DomainNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    bridge: cdktf.stringToTerraform(struct!.bridge),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    mac: cdktf.stringToTerraform(struct!.mac),
    macvtap: cdktf.stringToTerraform(struct!.macvtap),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    passthrough: cdktf.stringToTerraform(struct!.passthrough),
    private: cdktf.stringToTerraform(struct!.private),
    vepa: cdktf.stringToTerraform(struct!.vepa),
    wait_for_lease: cdktf.booleanToTerraform(struct!.waitForLease),
  }
}


export function domainNetworkInterfaceToHclTerraform(struct?: DomainNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macvtap: {
      value: cdktf.stringToHclTerraform(struct!.macvtap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough: {
      value: cdktf.stringToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private: {
      value: cdktf.stringToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vepa: {
      value: cdktf.stringToHclTerraform(struct!.vepa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_lease: {
      value: cdktf.booleanToHclTerraform(struct!.waitForLease),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._macvtap !== undefined) {
      hasAnyValues = true;
      internalValueResult.macvtap = this._macvtap;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._vepa !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepa = this._vepa;
    }
    if (this._waitForLease !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForLease = this._waitForLease;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._bridge = undefined;
      this._hostname = undefined;
      this._mac = undefined;
      this._macvtap = undefined;
      this._networkId = undefined;
      this._networkName = undefined;
      this._passthrough = undefined;
      this._private = undefined;
      this._vepa = undefined;
      this._waitForLease = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._bridge = value.bridge;
      this._hostname = value.hostname;
      this._mac = value.mac;
      this._macvtap = value.macvtap;
      this._networkId = value.networkId;
      this._networkName = value.networkName;
      this._passthrough = value.passthrough;
      this._private = value.private;
      this._vepa = value.vepa;
      this._waitForLease = value.waitForLease;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // macvtap - computed: false, optional: true, required: false
  private _macvtap?: string; 
  public get macvtap() {
    return this.getStringAttribute('macvtap');
  }
  public set macvtap(value: string) {
    this._macvtap = value;
  }
  public resetMacvtap() {
    this._macvtap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macvtapInput() {
    return this._macvtap;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: string; 
  public get passthrough() {
    return this.getStringAttribute('passthrough');
  }
  public set passthrough(value: string) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }

  // private - computed: false, optional: true, required: false
  private _private?: string; 
  public get private() {
    return this.getStringAttribute('private');
  }
  public set private(value: string) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // vepa - computed: false, optional: true, required: false
  private _vepa?: string; 
  public get vepa() {
    return this.getStringAttribute('vepa');
  }
  public set vepa(value: string) {
    this._vepa = value;
  }
  public resetVepa() {
    this._vepa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepaInput() {
    return this._vepa;
  }

  // wait_for_lease - computed: false, optional: true, required: false
  private _waitForLease?: boolean | cdktf.IResolvable; 
  public get waitForLease() {
    return this.getBooleanAttribute('wait_for_lease');
  }
  public set waitForLease(value: boolean | cdktf.IResolvable) {
    this._waitForLease = value;
  }
  public resetWaitForLease() {
    this._waitForLease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForLeaseInput() {
    return this._waitForLease;
  }
}

export class DomainNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : DomainNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): DomainNetworkInterfaceOutputReference {
    return new DomainNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainNvram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#file Domain#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#template Domain#template}
  */
  readonly template?: string;
}

export function domainNvramToTerraform(struct?: DomainNvramOutputReference | DomainNvram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function domainNvramToHclTerraform(struct?: DomainNvramOutputReference | DomainNvram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainNvramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainNvram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainNvram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file = value.file;
      this._template = value.template;
    }
  }

  // file - computed: true, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#create Domain#create}
  */
  readonly create?: string;
}

export function domainTimeoutsToTerraform(struct?: DomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function domainTimeoutsToHclTerraform(struct?: DomainTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface DomainTpm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#backend_device_path Domain#backend_device_path}
  */
  readonly backendDevicePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#backend_encryption_secret Domain#backend_encryption_secret}
  */
  readonly backendEncryptionSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#backend_persistent_state Domain#backend_persistent_state}
  */
  readonly backendPersistentState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#backend_type Domain#backend_type}
  */
  readonly backendType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#backend_version Domain#backend_version}
  */
  readonly backendVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#model Domain#model}
  */
  readonly model?: string;
}

export function domainTpmToTerraform(struct?: DomainTpmOutputReference | DomainTpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_device_path: cdktf.stringToTerraform(struct!.backendDevicePath),
    backend_encryption_secret: cdktf.stringToTerraform(struct!.backendEncryptionSecret),
    backend_persistent_state: cdktf.booleanToTerraform(struct!.backendPersistentState),
    backend_type: cdktf.stringToTerraform(struct!.backendType),
    backend_version: cdktf.stringToTerraform(struct!.backendVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function domainTpmToHclTerraform(struct?: DomainTpmOutputReference | DomainTpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_device_path: {
      value: cdktf.stringToHclTerraform(struct!.backendDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_encryption_secret: {
      value: cdktf.stringToHclTerraform(struct!.backendEncryptionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_persistent_state: {
      value: cdktf.booleanToHclTerraform(struct!.backendPersistentState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_type: {
      value: cdktf.stringToHclTerraform(struct!.backendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_version: {
      value: cdktf.stringToHclTerraform(struct!.backendVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainTpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainTpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDevicePath = this._backendDevicePath;
    }
    if (this._backendEncryptionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendEncryptionSecret = this._backendEncryptionSecret;
    }
    if (this._backendPersistentState !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPersistentState = this._backendPersistentState;
    }
    if (this._backendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendType = this._backendType;
    }
    if (this._backendVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendVersion = this._backendVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainTpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendDevicePath = undefined;
      this._backendEncryptionSecret = undefined;
      this._backendPersistentState = undefined;
      this._backendType = undefined;
      this._backendVersion = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendDevicePath = value.backendDevicePath;
      this._backendEncryptionSecret = value.backendEncryptionSecret;
      this._backendPersistentState = value.backendPersistentState;
      this._backendType = value.backendType;
      this._backendVersion = value.backendVersion;
      this._model = value.model;
    }
  }

  // backend_device_path - computed: false, optional: true, required: false
  private _backendDevicePath?: string; 
  public get backendDevicePath() {
    return this.getStringAttribute('backend_device_path');
  }
  public set backendDevicePath(value: string) {
    this._backendDevicePath = value;
  }
  public resetBackendDevicePath() {
    this._backendDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDevicePathInput() {
    return this._backendDevicePath;
  }

  // backend_encryption_secret - computed: false, optional: true, required: false
  private _backendEncryptionSecret?: string; 
  public get backendEncryptionSecret() {
    return this.getStringAttribute('backend_encryption_secret');
  }
  public set backendEncryptionSecret(value: string) {
    this._backendEncryptionSecret = value;
  }
  public resetBackendEncryptionSecret() {
    this._backendEncryptionSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendEncryptionSecretInput() {
    return this._backendEncryptionSecret;
  }

  // backend_persistent_state - computed: false, optional: true, required: false
  private _backendPersistentState?: boolean | cdktf.IResolvable; 
  public get backendPersistentState() {
    return this.getBooleanAttribute('backend_persistent_state');
  }
  public set backendPersistentState(value: boolean | cdktf.IResolvable) {
    this._backendPersistentState = value;
  }
  public resetBackendPersistentState() {
    this._backendPersistentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPersistentStateInput() {
    return this._backendPersistentState;
  }

  // backend_type - computed: false, optional: true, required: false
  private _backendType?: string; 
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }
  public set backendType(value: string) {
    this._backendType = value;
  }
  public resetBackendType() {
    this._backendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTypeInput() {
    return this._backendType;
  }

  // backend_version - computed: false, optional: true, required: false
  private _backendVersion?: string; 
  public get backendVersion() {
    return this.getStringAttribute('backend_version');
  }
  public set backendVersion(value: string) {
    this._backendVersion = value;
  }
  public resetBackendVersion() {
    this._backendVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendVersionInput() {
    return this._backendVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DomainVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
}

export function domainVideoToTerraform(struct?: DomainVideoOutputReference | DomainVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainVideoToHclTerraform(struct?: DomainVideoOutputReference | DomainVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DomainXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#xslt Domain#xslt}
  */
  readonly xslt?: string;
}

export function domainXmlToTerraform(struct?: DomainXmlOutputReference | DomainXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xslt: cdktf.stringToTerraform(struct!.xslt),
  }
}


export function domainXmlToHclTerraform(struct?: DomainXmlOutputReference | DomainXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xslt: {
      value: cdktf.stringToHclTerraform(struct!.xslt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainXmlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xslt !== undefined) {
      hasAnyValues = true;
      internalValueResult.xslt = this._xslt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xslt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xslt = value.xslt;
    }
  }

  // xslt - computed: false, optional: true, required: false
  private _xslt?: string; 
  public get xslt() {
    return this.getStringAttribute('xslt');
  }
  public set xslt(value: string) {
    this._xslt = value;
  }
  public resetXslt() {
    this._xslt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltInput() {
    return this._xslt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain libvirt_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/domain libvirt_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_domain',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arch = config.arch;
    this._autostart = config.autostart;
    this._cloudinit = config.cloudinit;
    this._cmdline = config.cmdline;
    this._coreosIgnition = config.coreosIgnition;
    this._description = config.description;
    this._emulator = config.emulator;
    this._firmware = config.firmware;
    this._fwCfgName = config.fwCfgName;
    this._id = config.id;
    this._initrd = config.initrd;
    this._kernel = config.kernel;
    this._machine = config.machine;
    this._memory = config.memory;
    this._metadata = config.metadata;
    this._name = config.name;
    this._qemuAgent = config.qemuAgent;
    this._running = config.running;
    this._type = config.type;
    this._vcpu = config.vcpu;
    this._bootDevice.internalValue = config.bootDevice;
    this._console.internalValue = config.console;
    this._cpu.internalValue = config.cpu;
    this._disk.internalValue = config.disk;
    this._filesystem.internalValue = config.filesystem;
    this._graphics.internalValue = config.graphics;
    this._networkInterface.internalValue = config.networkInterface;
    this._nvram.internalValue = config.nvram;
    this._timeouts.internalValue = config.timeouts;
    this._tpm.internalValue = config.tpm;
    this._video.internalValue = config.video;
    this._xml.internalValue = config.xml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: true, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // autostart - computed: true, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable; 
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // cloudinit - computed: false, optional: true, required: false
  private _cloudinit?: string; 
  public get cloudinit() {
    return this.getStringAttribute('cloudinit');
  }
  public set cloudinit(value: string) {
    this._cloudinit = value;
  }
  public resetCloudinit() {
    this._cloudinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitInput() {
    return this._cloudinit;
  }

  // cmdline - computed: false, optional: true, required: false
  private _cmdline?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get cmdline() {
    return this.interpolationForAttribute('cmdline');
  }
  public set cmdline(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._cmdline = value;
  }
  public resetCmdline() {
    this._cmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdlineInput() {
    return this._cmdline;
  }

  // coreos_ignition - computed: false, optional: true, required: false
  private _coreosIgnition?: string; 
  public get coreosIgnition() {
    return this.getStringAttribute('coreos_ignition');
  }
  public set coreosIgnition(value: string) {
    this._coreosIgnition = value;
  }
  public resetCoreosIgnition() {
    this._coreosIgnition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreosIgnitionInput() {
    return this._coreosIgnition;
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

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // fw_cfg_name - computed: false, optional: true, required: false
  private _fwCfgName?: string; 
  public get fwCfgName() {
    return this.getStringAttribute('fw_cfg_name');
  }
  public set fwCfgName(value: string) {
    this._fwCfgName = value;
  }
  public resetFwCfgName() {
    this._fwCfgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwCfgNameInput() {
    return this._fwCfgName;
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

  // initrd - computed: false, optional: true, required: false
  private _initrd?: string; 
  public get initrd() {
    return this.getStringAttribute('initrd');
  }
  public set initrd(value: string) {
    this._initrd = value;
  }
  public resetInitrd() {
    this._initrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initrdInput() {
    return this._initrd;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // machine - computed: true, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
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

  // qemu_agent - computed: false, optional: true, required: false
  private _qemuAgent?: boolean | cdktf.IResolvable; 
  public get qemuAgent() {
    return this.getBooleanAttribute('qemu_agent');
  }
  public set qemuAgent(value: boolean | cdktf.IResolvable) {
    this._qemuAgent = value;
  }
  public resetQemuAgent() {
    this._qemuAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qemuAgentInput() {
    return this._qemuAgent;
  }

  // running - computed: false, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vcpu - computed: false, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new DomainBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: DomainBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }

  // console - computed: false, optional: true, required: false
  private _console = new DomainConsoleList(this, "console", false);
  public get console() {
    return this._console;
  }
  public putConsole(value: DomainConsole[] | cdktf.IResolvable) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DomainCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DomainCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new DomainDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: DomainDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new DomainFilesystemList(this, "filesystem", false);
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: DomainFilesystem[] | cdktf.IResolvable) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // graphics - computed: false, optional: true, required: false
  private _graphics = new DomainGraphicsOutputReference(this, "graphics");
  public get graphics() {
    return this._graphics;
  }
  public putGraphics(value: DomainGraphics) {
    this._graphics.internalValue = value;
  }
  public resetGraphics() {
    this._graphics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphicsInput() {
    return this._graphics.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new DomainNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: DomainNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // nvram - computed: false, optional: true, required: false
  private _nvram = new DomainNvramOutputReference(this, "nvram");
  public get nvram() {
    return this._nvram;
  }
  public putNvram(value: DomainNvram) {
    this._nvram.internalValue = value;
  }
  public resetNvram() {
    this._nvram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvramInput() {
    return this._nvram.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tpm - computed: false, optional: true, required: false
  private _tpm = new DomainTpmOutputReference(this, "tpm");
  public get tpm() {
    return this._tpm;
  }
  public putTpm(value: DomainTpm) {
    this._tpm.internalValue = value;
  }
  public resetTpm() {
    this._tpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmInput() {
    return this._tpm.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new DomainVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: DomainVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }

  // xml - computed: false, optional: true, required: false
  private _xml = new DomainXmlOutputReference(this, "xml");
  public get xml() {
    return this._xml;
  }
  public putXml(value: DomainXml) {
    this._xml.internalValue = value;
  }
  public resetXml() {
    this._xml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch: cdktf.stringToTerraform(this._arch),
      autostart: cdktf.booleanToTerraform(this._autostart),
      cloudinit: cdktf.stringToTerraform(this._cloudinit),
      cmdline: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._cmdline),
      coreos_ignition: cdktf.stringToTerraform(this._coreosIgnition),
      description: cdktf.stringToTerraform(this._description),
      emulator: cdktf.stringToTerraform(this._emulator),
      firmware: cdktf.stringToTerraform(this._firmware),
      fw_cfg_name: cdktf.stringToTerraform(this._fwCfgName),
      id: cdktf.stringToTerraform(this._id),
      initrd: cdktf.stringToTerraform(this._initrd),
      kernel: cdktf.stringToTerraform(this._kernel),
      machine: cdktf.stringToTerraform(this._machine),
      memory: cdktf.numberToTerraform(this._memory),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      qemu_agent: cdktf.booleanToTerraform(this._qemuAgent),
      running: cdktf.booleanToTerraform(this._running),
      type: cdktf.stringToTerraform(this._type),
      vcpu: cdktf.numberToTerraform(this._vcpu),
      boot_device: cdktf.listMapper(domainBootDeviceToTerraform, true)(this._bootDevice.internalValue),
      console: cdktf.listMapper(domainConsoleToTerraform, true)(this._console.internalValue),
      cpu: domainCpuToTerraform(this._cpu.internalValue),
      disk: cdktf.listMapper(domainDiskToTerraform, true)(this._disk.internalValue),
      filesystem: cdktf.listMapper(domainFilesystemToTerraform, true)(this._filesystem.internalValue),
      graphics: domainGraphicsToTerraform(this._graphics.internalValue),
      network_interface: cdktf.listMapper(domainNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      nvram: domainNvramToTerraform(this._nvram.internalValue),
      timeouts: domainTimeoutsToTerraform(this._timeouts.internalValue),
      tpm: domainTpmToTerraform(this._tpm.internalValue),
      video: domainVideoToTerraform(this._video.internalValue),
      xml: domainXmlToTerraform(this._xml.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autostart: {
        value: cdktf.booleanToHclTerraform(this._autostart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudinit: {
        value: cdktf.stringToHclTerraform(this._cloudinit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdline: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._cmdline),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      coreos_ignition: {
        value: cdktf.stringToHclTerraform(this._coreosIgnition),
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
      emulator: {
        value: cdktf.stringToHclTerraform(this._emulator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware: {
        value: cdktf.stringToHclTerraform(this._firmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_cfg_name: {
        value: cdktf.stringToHclTerraform(this._fwCfgName),
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
      initrd: {
        value: cdktf.stringToHclTerraform(this._initrd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel: {
        value: cdktf.stringToHclTerraform(this._kernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      qemu_agent: {
        value: cdktf.booleanToHclTerraform(this._qemuAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      running: {
        value: cdktf.booleanToHclTerraform(this._running),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_device: {
        value: cdktf.listMapperHcl(domainBootDeviceToHclTerraform, true)(this._bootDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainBootDeviceList",
      },
      console: {
        value: cdktf.listMapperHcl(domainConsoleToHclTerraform, true)(this._console.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainConsoleList",
      },
      cpu: {
        value: domainCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainCpuList",
      },
      disk: {
        value: cdktf.listMapperHcl(domainDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainDiskList",
      },
      filesystem: {
        value: cdktf.listMapperHcl(domainFilesystemToHclTerraform, true)(this._filesystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainFilesystemList",
      },
      graphics: {
        value: domainGraphicsToHclTerraform(this._graphics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainGraphicsList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(domainNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainNetworkInterfaceList",
      },
      nvram: {
        value: domainNvramToHclTerraform(this._nvram.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainNvramList",
      },
      timeouts: {
        value: domainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainTimeouts",
      },
      tpm: {
        value: domainTpmToHclTerraform(this._tpm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainTpmList",
      },
      video: {
        value: domainVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainVideoList",
      },
      xml: {
        value: domainXmlToHclTerraform(this._xml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainXmlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
