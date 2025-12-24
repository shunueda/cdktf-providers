// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#availability_zone TwcServer#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Bandwidth for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#bandwidth TwcServer#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Cloud-init script. If script requires external network you should use floating_ip_id field instead of twc_floating_ip.resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#cloud_init TwcServer#cloud_init}
  */
  readonly cloudInit?: string;
  /**
  * Comment for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#comment TwcServer#comment}
  */
  readonly comment?: string;
  /**
  * Floating IP ID for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#floating_ip_id TwcServer#floating_ip_id}
  */
  readonly floatingIpId?: string;
  /**
  * Hostname of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#hostname TwcServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#id TwcServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID for servers (not supported for cloned servers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#image_id TwcServer#image_id}
  */
  readonly imageId?: string;
  /**
  * Is root password required for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#is_root_password_required TwcServer#is_root_password_required}
  */
  readonly isRootPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Name for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#name TwcServer#name}
  */
  readonly name: string;
  /**
  * OS ID for server (not supported for cloned servers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#os_id TwcServer#os_id}
  */
  readonly osId?: number;
  /**
  * Preset ID for server (conflicts with configuration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#preset_id TwcServer#preset_id}
  */
  readonly presetId?: number;
  /**
  * Project ID for created server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#project_id TwcServer#project_id}
  */
  readonly projectId?: number;
  /**
  * Software ID for server (not supported for cloned servers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#software_id TwcServer#software_id}
  */
  readonly softwareId?: number;
  /**
  * Server ID for which clone should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#source_server_id TwcServer#source_server_id}
  */
  readonly sourceServerId?: number;
  /**
  * List of SSH keys IDs for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#ssh_keys_ids TwcServer#ssh_keys_ids}
  */
  readonly sshKeysIds?: number[];
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#configuration TwcServer#configuration}
  */
  readonly configuration?: TwcServerConfiguration;
  /**
  * local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#local_network TwcServer#local_network}
  */
  readonly localNetwork?: TwcServerLocalNetwork;
}
export interface TwcServerDisks {
}

export function twcServerDisksToTerraform(struct?: TwcServerDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcServerDisksToHclTerraform(struct?: TwcServerDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcServerDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcServerDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerDisks | undefined) {
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

  // is_mounted - computed: true, optional: false, required: false
  public get isMounted() {
    return this.getBooleanAttribute('is_mounted');
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class TwcServerDisksList extends cdktf.ComplexList {

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
  public get(index: number): TwcServerDisksOutputReference {
    return new TwcServerDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcServerNetworksIps {
}

export function twcServerNetworksIpsToTerraform(struct?: TwcServerNetworksIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcServerNetworksIpsToHclTerraform(struct?: TwcServerNetworksIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcServerNetworksIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcServerNetworksIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerNetworksIps | undefined) {
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

  // is_main - computed: true, optional: false, required: false
  public get isMain() {
    return this.getBooleanAttribute('is_main');
  }

  // ptr - computed: true, optional: false, required: false
  public get ptr() {
    return this.getStringAttribute('ptr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class TwcServerNetworksIpsList extends cdktf.ComplexList {

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
  public get(index: number): TwcServerNetworksIpsOutputReference {
    return new TwcServerNetworksIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcServerNetworks {
}

export function twcServerNetworksToTerraform(struct?: TwcServerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcServerNetworksToHclTerraform(struct?: TwcServerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcServerNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcServerNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // ips - computed: true, optional: false, required: false
  private _ips = new TwcServerNetworksIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }

  // is_ddos_guard - computed: true, optional: false, required: false
  public get isDdosGuard() {
    return this.getBooleanAttribute('is_ddos_guard');
  }

  // nat_mode - computed: true, optional: false, required: false
  public get natMode() {
    return this.getStringAttribute('nat_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class TwcServerNetworksList extends cdktf.ComplexList {

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
  public get(index: number): TwcServerNetworksOutputReference {
    return new TwcServerNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcServerOs {
}

export function twcServerOsToTerraform(struct?: TwcServerOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcServerOsToHclTerraform(struct?: TwcServerOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcServerOsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcServerOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerOs | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class TwcServerOsList extends cdktf.ComplexList {

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
  public get(index: number): TwcServerOsOutputReference {
    return new TwcServerOsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcServerSoftware {
}

export function twcServerSoftwareToTerraform(struct?: TwcServerSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcServerSoftwareToHclTerraform(struct?: TwcServerSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcServerSoftwareOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcServerSoftware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerSoftware | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class TwcServerSoftwareList extends cdktf.ComplexList {

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
  public get(index: number): TwcServerSoftwareOutputReference {
    return new TwcServerSoftwareOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcServerConfiguration {
  /**
  * Configurator ID for created server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#configurator_id TwcServer#configurator_id}
  */
  readonly configuratorId: number;
  /**
  * CPU count for created server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#cpu TwcServer#cpu}
  */
  readonly cpu: number;
  /**
  * Disk size for created server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#disk TwcServer#disk}
  */
  readonly disk: number;
  /**
  * GPU count for created server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#gpu TwcServer#gpu}
  */
  readonly gpu?: number;
  /**
  * RAM size for created server (must be divisible by 1024 and corresponds OS, software and configurator requirements)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#ram TwcServer#ram}
  */
  readonly ram: number;
}

export function twcServerConfigurationToTerraform(struct?: TwcServerConfigurationOutputReference | TwcServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configurator_id: cdktf.numberToTerraform(struct!.configuratorId),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk: cdktf.numberToTerraform(struct!.disk),
    gpu: cdktf.numberToTerraform(struct!.gpu),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function twcServerConfigurationToHclTerraform(struct?: TwcServerConfigurationOutputReference | TwcServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configurator_id: {
      value: cdktf.numberToHclTerraform(struct!.configuratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu: {
      value: cdktf.numberToHclTerraform(struct!.gpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TwcServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcServerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuratorId = this._configuratorId;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._gpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuratorId = undefined;
      this._cpu = undefined;
      this._disk = undefined;
      this._gpu = undefined;
      this._ram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuratorId = value.configuratorId;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._gpu = value.gpu;
      this._ram = value.ram;
    }
  }

  // configurator_id - computed: false, optional: false, required: true
  private _configuratorId?: number; 
  public get configuratorId() {
    return this.getNumberAttribute('configurator_id');
  }
  public set configuratorId(value: number) {
    this._configuratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configuratorIdInput() {
    return this._configuratorId;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu?: number; 
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }
  public set gpu(value: number) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }
}
export interface TwcServerLocalNetwork {
  /**
  * ID of VPC for assign address from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#id TwcServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Address in VPC subnetwork for manual assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#ip TwcServer#ip}
  */
  readonly ip?: string;
  /**
  * NAT mode for created servers (`dnat_and_snat` - egress and ingress traffic allowed, `snat` - only egress traffic allowed, `no_nat` - only local network traffic allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#mode TwcServer#mode}
  */
  readonly mode?: string;
}

export function twcServerLocalNetworkToTerraform(struct?: TwcServerLocalNetworkOutputReference | TwcServerLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function twcServerLocalNetworkToHclTerraform(struct?: TwcServerLocalNetworkOutputReference | TwcServerLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class TwcServerLocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcServerLocalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcServerLocalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._ip = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._ip = value.ip;
      this._mode = value.mode;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server twc_server}
*/
export class TwcServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcServer to import
  * @param importFromId The id of the existing TwcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_server twc_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcServerConfig
  */
  public constructor(scope: Construct, id: string, config: TwcServerConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_server',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.8',
        providerVersionConstraint: '1.6.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._bandwidth = config.bandwidth;
    this._cloudInit = config.cloudInit;
    this._comment = config.comment;
    this._floatingIpId = config.floatingIpId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._isRootPasswordRequired = config.isRootPasswordRequired;
    this._name = config.name;
    this._osId = config.osId;
    this._presetId = config.presetId;
    this._projectId = config.projectId;
    this._softwareId = config.softwareId;
    this._sourceServerId = config.sourceServerId;
    this._sshKeysIds = config.sshKeysIds;
    this._configuration.internalValue = config.configuration;
    this._localNetwork.internalValue = config.localNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // avatar_id - computed: true, optional: false, required: false
  public get avatarId() {
    return this.getStringAttribute('avatar_id');
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // boot_mode - computed: true, optional: false, required: false
  public get bootMode() {
    return this.getStringAttribute('boot_mode');
  }

  // cloud_init - computed: true, optional: true, required: false
  private _cloudInit?: string; 
  public get cloudInit() {
    return this.getStringAttribute('cloud_init');
  }
  public set cloudInit(value: string) {
    this._cloudInit = value;
  }
  public resetCloudInit() {
    this._cloudInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // configurator_id - computed: true, optional: false, required: false
  public get configuratorId() {
    return this.getNumberAttribute('configurator_id');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // cpu_frequency - computed: true, optional: false, required: false
  public get cpuFrequency() {
    return this.getStringAttribute('cpu_frequency');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new TwcServerDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // floating_ip_id - computed: false, optional: true, required: false
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
  }

  // hostname - computed: false, optional: true, required: false
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // is_ddos_guard - computed: true, optional: false, required: false
  public get isDdosGuard() {
    return this.getBooleanAttribute('is_ddos_guard');
  }

  // is_root_password_required - computed: false, optional: true, required: false
  private _isRootPasswordRequired?: boolean | cdktf.IResolvable; 
  public get isRootPasswordRequired() {
    return this.getBooleanAttribute('is_root_password_required');
  }
  public set isRootPasswordRequired(value: boolean | cdktf.IResolvable) {
    this._isRootPasswordRequired = value;
  }
  public resetIsRootPasswordRequired() {
    this._isRootPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootPasswordRequiredInput() {
    return this._isRootPasswordRequired;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // main_ipv4 - computed: true, optional: false, required: false
  public get mainIpv4() {
    return this.getStringAttribute('main_ipv4');
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

  // networks - computed: true, optional: false, required: false
  private _networks = new TwcServerNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // os - computed: true, optional: false, required: false
  private _os = new TwcServerOsList(this, "os", false);
  public get os() {
    return this._os;
  }

  // os_id - computed: false, optional: true, required: false
  private _osId?: number; 
  public get osId() {
    return this.getNumberAttribute('os_id');
  }
  public set osId(value: number) {
    this._osId = value;
  }
  public resetOsId() {
    this._osId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osIdInput() {
    return this._osId;
  }

  // preset_id - computed: true, optional: true, required: false
  private _presetId?: number; 
  public get presetId() {
    return this.getNumberAttribute('preset_id');
  }
  public set presetId(value: number) {
    this._presetId = value;
  }
  public resetPresetId() {
    this._presetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // root_pass - computed: true, optional: false, required: false
  public get rootPass() {
    return this.getStringAttribute('root_pass');
  }

  // software - computed: true, optional: false, required: false
  private _software = new TwcServerSoftwareList(this, "software", false);
  public get softwareAttribute() {
    return this._software;
  }

  // software_id - computed: false, optional: true, required: false
  private _softwareId?: number; 
  public get softwareId() {
    return this.getNumberAttribute('software_id');
  }
  public set softwareId(value: number) {
    this._softwareId = value;
  }
  public resetSoftwareId() {
    this._softwareId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareIdInput() {
    return this._softwareId;
  }

  // source_server_id - computed: false, optional: true, required: false
  private _sourceServerId?: number; 
  public get sourceServerId() {
    return this.getNumberAttribute('source_server_id');
  }
  public set sourceServerId(value: number) {
    this._sourceServerId = value;
  }
  public resetSourceServerId() {
    this._sourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId;
  }

  // ssh_keys_ids - computed: false, optional: true, required: false
  private _sshKeysIds?: number[]; 
  public get sshKeysIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ssh_keys_ids')));
  }
  public set sshKeysIds(value: number[]) {
    this._sshKeysIds = value;
  }
  public resetSshKeysIds() {
    this._sshKeysIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysIdsInput() {
    return this._sshKeysIds;
  }

  // start_at - computed: true, optional: false, required: false
  public get startAt() {
    return this.getStringAttribute('start_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vnc_pass - computed: true, optional: false, required: false
  public get vncPass() {
    return this.getStringAttribute('vnc_pass');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new TwcServerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: TwcServerConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // local_network - computed: false, optional: true, required: false
  private _localNetwork = new TwcServerLocalNetworkOutputReference(this, "local_network");
  public get localNetwork() {
    return this._localNetwork;
  }
  public putLocalNetwork(value: TwcServerLocalNetwork) {
    this._localNetwork.internalValue = value;
  }
  public resetLocalNetwork() {
    this._localNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkInput() {
    return this._localNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      cloud_init: cdktf.stringToTerraform(this._cloudInit),
      comment: cdktf.stringToTerraform(this._comment),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      is_root_password_required: cdktf.booleanToTerraform(this._isRootPasswordRequired),
      name: cdktf.stringToTerraform(this._name),
      os_id: cdktf.numberToTerraform(this._osId),
      preset_id: cdktf.numberToTerraform(this._presetId),
      project_id: cdktf.numberToTerraform(this._projectId),
      software_id: cdktf.numberToTerraform(this._softwareId),
      source_server_id: cdktf.numberToTerraform(this._sourceServerId),
      ssh_keys_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sshKeysIds),
      configuration: twcServerConfigurationToTerraform(this._configuration.internalValue),
      local_network: twcServerLocalNetworkToTerraform(this._localNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_init: {
        value: cdktf.stringToHclTerraform(this._cloudInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_id: {
        value: cdktf.stringToHclTerraform(this._floatingIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_root_password_required: {
        value: cdktf.booleanToHclTerraform(this._isRootPasswordRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_id: {
        value: cdktf.numberToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preset_id: {
        value: cdktf.numberToHclTerraform(this._presetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_id: {
        value: cdktf.numberToHclTerraform(this._softwareId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_server_id: {
        value: cdktf.numberToHclTerraform(this._sourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_keys_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sshKeysIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      configuration: {
        value: twcServerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcServerConfigurationList",
      },
      local_network: {
        value: twcServerLocalNetworkToHclTerraform(this._localNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcServerLocalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
