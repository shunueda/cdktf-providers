import * as cdktf from 'cdktf';
export interface VoltstackSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dns VoltstackSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#network_type VoltstackSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ssh VoltstackSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#web_user_interface VoltstackSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function voltstackSiteBlockedServicesBlockedSeviceToTerraform(struct?: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function voltstackSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class VoltstackSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteBlockedServicesBlockedSeviceOutputReference {
    return new VoltstackSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blocked_sevice VoltstackSite#blocked_sevice}
  */
  readonly blockedSevice?: VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function voltstackSiteBlockedServicesToTerraform(struct?: VoltstackSiteBlockedServicesOutputReference | VoltstackSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(voltstackSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function voltstackSiteBlockedServicesToHclTerraform(struct?: VoltstackSiteBlockedServicesOutputReference | VoltstackSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(voltstackSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBlockedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedSevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedSevice.internalValue = value.blockedSevice;
    }
  }

  // blocked_sevice - computed: false, optional: true, required: false
  private _blockedSevice = new VoltstackSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: VoltstackSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
    this._blockedSevice.internalValue = value;
  }
  public resetBlockedSevice() {
    this._blockedSevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSeviceInput() {
    return this._blockedSevice.internalValue;
  }
}
export interface VoltstackSiteBondDeviceListBondDevicesLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#rate VoltstackSite#rate}
  */
  readonly rate?: number;
}

export function voltstackSiteBondDeviceListBondDevicesLacpToTerraform(struct?: VoltstackSiteBondDeviceListBondDevicesLacpOutputReference | VoltstackSiteBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function voltstackSiteBondDeviceListBondDevicesLacpToHclTerraform(struct?: VoltstackSiteBondDeviceListBondDevicesLacpOutputReference | VoltstackSiteBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListBondDevicesLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBondDeviceListBondDevicesLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListBondDevicesLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface VoltstackSiteBondDeviceListBondDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#active_backup VoltstackSite#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#devices VoltstackSite#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#link_polling_interval VoltstackSite#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#link_up_delay VoltstackSite#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#lacp VoltstackSite#lacp}
  */
  readonly lacp?: VoltstackSiteBondDeviceListBondDevicesLacp;
}

export function voltstackSiteBondDeviceListBondDevicesToTerraform(struct?: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: voltstackSiteBondDeviceListBondDevicesLacpToTerraform(struct!.lacp),
  }
}


export function voltstackSiteBondDeviceListBondDevicesToHclTerraform(struct?: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp: {
      value: voltstackSiteBondDeviceListBondDevicesLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBondDeviceListBondDevicesLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListBondDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListBondDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new VoltstackSiteBondDeviceListBondDevicesLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: VoltstackSiteBondDeviceListBondDevicesLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}

export class VoltstackSiteBondDeviceListBondDevicesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteBondDeviceListBondDevicesOutputReference {
    return new VoltstackSiteBondDeviceListBondDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteBondDeviceListStruct {
  /**
  * bond_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#bond_devices VoltstackSite#bond_devices}
  */
  readonly bondDevices: VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable;
}

export function voltstackSiteBondDeviceListStructToTerraform(struct?: VoltstackSiteBondDeviceListStructOutputReference | VoltstackSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_devices: cdktf.listMapper(voltstackSiteBondDeviceListBondDevicesToTerraform, true)(struct!.bondDevices),
  }
}


export function voltstackSiteBondDeviceListStructToHclTerraform(struct?: VoltstackSiteBondDeviceListStructOutputReference | VoltstackSiteBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_devices: {
      value: cdktf.listMapperHcl(voltstackSiteBondDeviceListBondDevicesToHclTerraform, true)(struct!.bondDevices),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteBondDeviceListBondDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteBondDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteBondDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondDevices = this._bondDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteBondDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondDevices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondDevices.internalValue = value.bondDevices;
    }
  }

  // bond_devices - computed: false, optional: false, required: true
  private _bondDevices = new VoltstackSiteBondDeviceListBondDevicesList(this, "bond_devices", false);
  public get bondDevices() {
    return this._bondDevices;
  }
  public putBondDevices(value: VoltstackSiteBondDeviceListBondDevices[] | cdktf.IResolvable) {
    this._bondDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDevicesInput() {
    return this._bondDevices.internalValue;
  }
}
export interface VoltstackSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#latitude VoltstackSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#longitude VoltstackSite#longitude}
  */
  readonly longitude?: number;
}

export function voltstackSiteCoordinatesToTerraform(struct?: VoltstackSiteCoordinatesOutputReference | VoltstackSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function voltstackSiteCoordinatesToHclTerraform(struct?: VoltstackSiteCoordinatesOutputReference | VoltstackSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface VoltstackSiteCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#inside_nameserver VoltstackSite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#inside_nameserver_v6 VoltstackSite#inside_nameserver_v6}
  */
  readonly insideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_nameserver VoltstackSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_nameserver_v6 VoltstackSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
}

export function voltstackSiteCustomDnsToTerraform(struct?: VoltstackSiteCustomDnsOutputReference | VoltstackSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_nameserver: cdktf.stringToTerraform(struct!.insideNameserver),
    inside_nameserver_v6: cdktf.stringToTerraform(struct!.insideNameserverV6),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
  }
}


export function voltstackSiteCustomDnsToHclTerraform(struct?: VoltstackSiteCustomDnsOutputReference | VoltstackSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserver = this._insideNameserver;
    }
    if (this._insideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserverV6 = this._insideNameserverV6;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNameserver = undefined;
      this._insideNameserverV6 = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNameserver = value.insideNameserver;
      this._insideNameserverV6 = value.insideNameserverV6;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
    }
  }

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_nameserver_v6 - computed: false, optional: true, required: false
  private _insideNameserverV6?: string; 
  public get insideNameserverV6() {
    return this.getStringAttribute('inside_nameserver_v6');
  }
  public set insideNameserverV6(value: string) {
    this._insideNameserverV6 = value;
  }
  public resetInsideNameserverV6() {
    this._insideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverV6Input() {
    return this._insideNameserverV6;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#enhanced_firewall_policies VoltstackSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#forward_proxy_policies VoltstackSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#network_policies VoltstackSite#network_policies}
  */
  readonly networkPolicies: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference | VoltstackSiteCustomNetworkConfigActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#global_vn VoltstackSite#global_vn}
  */
  readonly globalVn: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#global_vn VoltstackSite#global_vn}
  */
  readonly globalVn: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections {
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#sli_to_global_dr VoltstackSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#slo_to_global_dr VoltstackSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_to_global_dr: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sli_to_global_dr: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliToGlobalDr = this._sliToGlobalDr?.internalValue;
    }
    if (this._sloToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloToGlobalDr = this._sloToGlobalDr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sliToGlobalDr.internalValue = undefined;
      this._sloToGlobalDr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
    this._sliToGlobalDr.internalValue = value;
  }
  public resetSliToGlobalDr() {
    this._sliToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliToGlobalDrInput() {
    return this._sliToGlobalDr.internalValue;
  }

  // slo_to_global_dr - computed: false, optional: true, required: false
  private _sloToGlobalDr = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
    this._sloToGlobalDr.internalValue = value;
  }
  public resetSloToGlobalDr() {
    this._sloToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloToGlobalDrInput() {
    return this._sloToGlobalDr.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#global_network_connections VoltstackSite#global_network_connections}
  */
  readonly globalNetworkConnections: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigGlobalNetworkListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function voltstackSiteCustomNetworkConfigGlobalNetworkListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference | VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalNetworkConnections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalNetworkConnections.internalValue = value.globalNetworkConnections;
    }
  }

  // global_network_connections - computed: false, optional: false, required: true
  private _globalNetworkConnections = new VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor {
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#is_primary VoltstackSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#monitor_disabled VoltstackSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#not_primary VoltstackSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#monitor VoltstackSite#monitor}
  */
  readonly monitor?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    not_primary: cdktf.booleanToTerraform(struct!.notPrimary),
    priority: cdktf.numberToTerraform(struct!.priority),
    monitor: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToTerraform(struct!.monitor),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_primary: {
      value: cdktf.booleanToHclTerraform(struct!.notPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._notPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrimary = this._notPrimary;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._isPrimary = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._node = undefined;
      this._notPrimary = undefined;
      this._priority = undefined;
      this._monitor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._isPrimary = value.isPrimary;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
      this._notPrimary = value.notPrimary;
      this._priority = value.priority;
      this._monitor.internalValue = value.monitor;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // not_primary - computed: false, optional: true, required: false
  private _notPrimary?: boolean | cdktf.IResolvable; 
  public get notPrimary() {
    return this.getBooleanAttribute('not_primary');
  }
  public set notPrimary(value: boolean | cdktf.IResolvable) {
    this._notPrimary = value;
  }
  public resetNotPrimary() {
    this._notPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrimaryInput() {
    return this._notPrimary;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._mtu = undefined;
      this._node = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dgw_address VoltstackSite#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dns_address VoltstackSite#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#first_address VoltstackSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#last_address VoltstackSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pool_settings VoltstackSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#same_as_dgw VoltstackSite#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pools VoltstackSite#pools}
  */
  readonly pools?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dgw_address: cdktf.stringToTerraform(struct!.dgwAddress),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    same_as_dgw: cdktf.booleanToTerraform(struct!.sameAsDgw),
    pools: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dgw_address: {
      value: cdktf.stringToHclTerraform(struct!.dgwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_dgw: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsDgw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pools: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dgwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgwAddress = this._dgwAddress;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._sameAsDgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsDgw = this._sameAsDgw;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dgwAddress = undefined;
      this._dnsAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._sameAsDgw = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dgwAddress = value.dgwAddress;
      this._dnsAddress = value.dnsAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._sameAsDgw = value.sameAsDgw;
      this._pools.internalValue = value.pools;
    }
  }

  // dgw_address - computed: false, optional: true, required: false
  private _dgwAddress?: string; 
  public get dgwAddress() {
    return this.getStringAttribute('dgw_address');
  }
  public set dgwAddress(value: string) {
    this._dgwAddress = value;
  }
  public resetDgwAddress() {
    this._dgwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgwAddressInput() {
    return this._dgwAddress;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // same_as_dgw - computed: false, optional: true, required: false
  private _sameAsDgw?: boolean | cdktf.IResolvable; 
  public get sameAsDgw() {
    return this.getBooleanAttribute('same_as_dgw');
  }
  public set sameAsDgw(value: boolean | cdktf.IResolvable) {
    this._sameAsDgw = value;
  }
  public resetSameAsDgw() {
    this._sameAsDgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsDgwInput() {
    return this._sameAsDgw;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#automatic_from_end VoltstackSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#automatic_from_start VoltstackSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#fixed_ip_map VoltstackSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dhcp_networks VoltstackSite#dhcp_networks}
  */
  readonly dhcpNetworks: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dns_list VoltstackSite#dns_list}
  */
  readonly dnsList: string[];
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#configured_address VoltstackSite#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#first_address VoltstackSite#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#last_address VoltstackSite#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#configured_list VoltstackSite#configured_list}
  */
  readonly configuredList?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#local_dns VoltstackSite#local_dns}
  */
  readonly localDns?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pool_settings VoltstackSite#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pools VoltstackSite#pools}
  */
  readonly pools?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#automatic_from_end VoltstackSite#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#automatic_from_start VoltstackSite#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#fixed_ip_map VoltstackSite#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dhcp_networks VoltstackSite#dhcp_networks}
  */
  readonly dhcpNetworks: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#network_prefix VoltstackSite#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dns_config VoltstackSite#dns_config}
  */
  readonly dnsConfig?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#stateful VoltstackSite#stateful}
  */
  readonly stateful?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#host VoltstackSite#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#router VoltstackSite#router}
  */
  readonly router?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor {
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster VoltstackSite#cluster}
  */
  readonly cluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#device VoltstackSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dhcp_client VoltstackSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#is_primary VoltstackSite#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#monitor_disabled VoltstackSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_ipv6_address VoltstackSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#not_primary VoltstackSite#not_primary}
  */
  readonly notPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_network VoltstackSite#storage_network}
  */
  readonly storageNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#untagged VoltstackSite#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#vlan_id VoltstackSite#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dhcp_server VoltstackSite#dhcp_server}
  */
  readonly dhcpServer?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ipv6_auto_config VoltstackSite#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#monitor VoltstackSite#monitor}
  */
  readonly monitor?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#segment_network VoltstackSite#segment_network}
  */
  readonly segmentNetwork?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_ipv6_address VoltstackSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.booleanToTerraform(struct!.cluster),
    device: cdktf.stringToTerraform(struct!.device),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    not_primary: cdktf.booleanToTerraform(struct!.notPrimary),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    storage_network: cdktf.booleanToTerraform(struct!.storageNetwork),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    dhcp_server: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToTerraform(struct!.dhcpServer),
    ipv6_auto_config: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToTerraform(struct!.monitor),
    segment_network: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToTerraform(struct!.segmentNetwork),
    static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.booleanToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_primary: {
      value: cdktf.booleanToHclTerraform(struct!.notPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_network: {
      value: cdktf.booleanToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_server: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerList",
    },
    ipv6_auto_config: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigList",
    },
    monitor: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorList",
    },
    segment_network: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkList",
    },
    static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpList",
    },
    static_ipv6_address: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._notPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrimary = this._notPrimary;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._device = undefined;
      this._dhcpClient = undefined;
      this._isPrimary = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._noIpv6Address = undefined;
      this._node = undefined;
      this._notPrimary = undefined;
      this._priority = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._storageNetwork = undefined;
      this._untagged = undefined;
      this._vlanId = undefined;
      this._dhcpServer.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._segmentNetwork.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._device = value.device;
      this._dhcpClient = value.dhcpClient;
      this._isPrimary = value.isPrimary;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._noIpv6Address = value.noIpv6Address;
      this._node = value.nodeAttribute;
      this._notPrimary = value.notPrimary;
      this._priority = value.priority;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._storageNetwork = value.storageNetwork;
      this._untagged = value.untagged;
      this._vlanId = value.vlanId;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._segmentNetwork.internalValue = value.segmentNetwork;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: boolean | cdktf.IResolvable; 
  public get cluster() {
    return this.getBooleanAttribute('cluster');
  }
  public set cluster(value: boolean | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // not_primary - computed: false, optional: true, required: false
  private _notPrimary?: boolean | cdktf.IResolvable; 
  public get notPrimary() {
    return this.getBooleanAttribute('not_primary');
  }
  public set notPrimary(value: boolean | cdktf.IResolvable) {
    this._notPrimary = value;
  }
  public resetNotPrimary() {
    this._notPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrimaryInput() {
    return this._notPrimary;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: boolean | cdktf.IResolvable; 
  public get storageNetwork() {
    return this.getBooleanAttribute('storage_network');
  }
  public set storageNetwork(value: boolean | cdktf.IResolvable) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#value VoltstackSite#value}
  */
  readonly value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_ip_map VoltstackSite#interface_ip_map}
  */
  readonly interfaceIpMap?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gw VoltstackSite#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster_static_ip VoltstackSite#cluster_static_ip}
  */
  readonly clusterStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node_static_ip VoltstackSite#node_static_ip}
  */
  readonly nodeStaticIp?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpList",
    },
    node_static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mtu VoltstackSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#node VoltstackSite#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#priority VoltstackSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#site_local_inside_network VoltstackSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#site_local_network VoltstackSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_ip VoltstackSite#static_ip}
  */
  readonly staticIp: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tunnel VoltstackSite#tunnel}
  */
  readonly tunnel: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    static_ip: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToTerraform(struct!.staticIp),
    tunnel: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToTerraform(struct!.tunnel),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpList",
    },
    tunnel: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mtu = undefined;
      this._node = undefined;
      this._priority = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._staticIp.internalValue = undefined;
      this._tunnel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mtu = value.mtu;
      this._node = value.nodeAttribute;
      this._priority = value.priority;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._staticIp.internalValue = value.staticIp;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // static_ip - computed: false, optional: false, required: true
  private _staticIp = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceStaticIp) {
    this._staticIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // tunnel - computed: false, optional: false, required: true
  private _tunnel = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceTunnel) {
    this._tunnel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dc_cluster_group_connectivity_interface_disabled VoltstackSite#dc_cluster_group_connectivity_interface_disabled}
  */
  readonly dcClusterGroupConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dc_cluster_group_connectivity_interface_enabled VoltstackSite#dc_cluster_group_connectivity_interface_enabled}
  */
  readonly dcClusterGroupConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * dedicated_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dedicated_interface VoltstackSite#dedicated_interface}
  */
  readonly dedicatedInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface;
  /**
  * dedicated_management_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dedicated_management_interface VoltstackSite#dedicated_management_interface}
  */
  readonly dedicatedManagementInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ethernet_interface VoltstackSite#ethernet_interface}
  */
  readonly ethernetInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface;
  /**
  * tunnel_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tunnel_interface VoltstackSite#tunnel_interface}
  */
  readonly tunnelInterface?: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface;
}

export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dc_cluster_group_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceDisabled),
    dc_cluster_group_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.dcClusterGroupConnectivityInterfaceEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    dedicated_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToTerraform(struct!.dedicatedInterface),
    dedicated_management_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToTerraform(struct!.dedicatedManagementInterface),
    ethernet_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToTerraform(struct!.ethernetInterface),
    tunnel_interface: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToTerraform(struct!.tunnelInterface),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dc_cluster_group_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.dcClusterGroupConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dc_cluster_group_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dcClusterGroupConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    dedicated_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceToHclTerraform(struct!.dedicatedInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceList",
    },
    dedicated_management_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceToHclTerraform(struct!.dedicatedManagementInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceList",
    },
    ethernet_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceList",
    },
    tunnel_interface: {
      value: voltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceToHclTerraform(struct!.tunnelInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcClusterGroupConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupConnectivityInterfaceDisabled = this._dcClusterGroupConnectivityInterfaceDisabled;
    }
    if (this._dcClusterGroupConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupConnectivityInterfaceEnabled = this._dcClusterGroupConnectivityInterfaceEnabled;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._dedicatedInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedInterface = this._dedicatedInterface?.internalValue;
    }
    if (this._dedicatedManagementInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedManagementInterface = this._dedicatedManagementInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._tunnelInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInterface = this._tunnelInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dcClusterGroupConnectivityInterfaceDisabled = undefined;
      this._dcClusterGroupConnectivityInterfaceEnabled = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._dedicatedInterface.internalValue = undefined;
      this._dedicatedManagementInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._tunnelInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dcClusterGroupConnectivityInterfaceDisabled = value.dcClusterGroupConnectivityInterfaceDisabled;
      this._dcClusterGroupConnectivityInterfaceEnabled = value.dcClusterGroupConnectivityInterfaceEnabled;
      this._description = value.description;
      this._labels = value.labels;
      this._dedicatedInterface.internalValue = value.dedicatedInterface;
      this._dedicatedManagementInterface.internalValue = value.dedicatedManagementInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._tunnelInterface.internalValue = value.tunnelInterface;
    }
  }

  // dc_cluster_group_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _dcClusterGroupConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get dcClusterGroupConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('dc_cluster_group_connectivity_interface_disabled');
  }
  public set dcClusterGroupConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._dcClusterGroupConnectivityInterfaceDisabled = value;
  }
  public resetDcClusterGroupConnectivityInterfaceDisabled() {
    this._dcClusterGroupConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupConnectivityInterfaceDisabledInput() {
    return this._dcClusterGroupConnectivityInterfaceDisabled;
  }

  // dc_cluster_group_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _dcClusterGroupConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get dcClusterGroupConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('dc_cluster_group_connectivity_interface_enabled');
  }
  public set dcClusterGroupConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._dcClusterGroupConnectivityInterfaceEnabled = value;
  }
  public resetDcClusterGroupConnectivityInterfaceEnabled() {
    this._dcClusterGroupConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupConnectivityInterfaceEnabledInput() {
    return this._dcClusterGroupConnectivityInterfaceEnabled;
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

  // labels - computed: false, optional: true, required: false
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

  // dedicated_interface - computed: false, optional: true, required: false
  private _dedicatedInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterfaceOutputReference(this, "dedicated_interface");
  public get dedicatedInterface() {
    return this._dedicatedInterface;
  }
  public putDedicatedInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedInterface) {
    this._dedicatedInterface.internalValue = value;
  }
  public resetDedicatedInterface() {
    this._dedicatedInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInterfaceInput() {
    return this._dedicatedInterface.internalValue;
  }

  // dedicated_management_interface - computed: false, optional: true, required: false
  private _dedicatedManagementInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterfaceOutputReference(this, "dedicated_management_interface");
  public get dedicatedManagementInterface() {
    return this._dedicatedManagementInterface;
  }
  public putDedicatedManagementInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesDedicatedManagementInterface) {
    this._dedicatedManagementInterface.internalValue = value;
  }
  public resetDedicatedManagementInterface() {
    this._dedicatedManagementInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementInterfaceInput() {
    return this._dedicatedManagementInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // tunnel_interface - computed: false, optional: true, required: false
  private _tunnelInterface = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterfaceOutputReference(this, "tunnel_interface");
  public get tunnelInterface() {
    return this._tunnelInterface;
  }
  public putTunnelInterface(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfacesTunnelInterface) {
    this._tunnelInterface.internalValue = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference {
    return new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interfaces VoltstackSite#interfaces}
  */
  readonly interfaces: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigInterfaceListStructToTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(voltstackSiteCustomNetworkConfigInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function voltstackSiteCustomNetworkConfigInterfaceListStructToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference | VoltstackSiteCustomNetworkConfigInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VoltstackSiteCustomNetworkConfigInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VoltstackSiteCustomNetworkConfigInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference | VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference | VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfigSloConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_dc_cluster_group VoltstackSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_static_routes VoltstackSite#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_static_v6_routes VoltstackSite#no_static_v6_routes}
  */
  readonly noStaticV6Routes?: boolean | cdktf.IResolvable;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dc_cluster_group VoltstackSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes?: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_v6_routes VoltstackSite#static_v6_routes}
  */
  readonly staticV6Routes?: VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes;
}

export function voltstackSiteCustomNetworkConfigSloConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigOutputReference | VoltstackSiteCustomNetworkConfigSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_static_v6_routes: cdktf.booleanToTerraform(struct!.noStaticV6Routes),
    dc_cluster_group: voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToTerraform(struct!.dcClusterGroup),
    static_routes: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function voltstackSiteCustomNetworkConfigSloConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigSloConfigOutputReference | VoltstackSiteCustomNetworkConfigSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_static_v6_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticV6Routes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dc_cluster_group: {
      value: voltstackSiteCustomNetworkConfigSloConfigDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupList",
    },
    static_routes: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: voltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigSloConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfigSloConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noStaticV6Routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticV6Routes = this._noStaticV6Routes;
    }
    if (this._dcClusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroup = this._dcClusterGroup?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._staticV6Routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticV6Routes = this._staticV6Routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfigSloConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._noDcClusterGroup = undefined;
      this._noStaticRoutes = undefined;
      this._noStaticV6Routes = undefined;
      this._dcClusterGroup.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noStaticV6Routes = value.noStaticV6Routes;
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_static_routes - computed: false, optional: true, required: false
  private _noStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStaticRoutes() {
    return this.getBooleanAttribute('no_static_routes');
  }
  public set noStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStaticRoutes = value;
  }
  public resetNoStaticRoutes() {
    this._noStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticRoutesInput() {
    return this._noStaticRoutes;
  }

  // no_static_v6_routes - computed: false, optional: true, required: false
  private _noStaticV6Routes?: boolean | cdktf.IResolvable; 
  public get noStaticV6Routes() {
    return this.getBooleanAttribute('no_static_v6_routes');
  }
  public set noStaticV6Routes(value: boolean | cdktf.IResolvable) {
    this._noStaticV6Routes = value;
  }
  public resetNoStaticV6Routes() {
    this._noStaticV6Routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticV6RoutesInput() {
    return this._noStaticV6Routes;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: VoltstackSiteCustomNetworkConfigSloConfigDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new VoltstackSiteCustomNetworkConfigSloConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomNetworkConfigSloConfigStaticRoutes) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new VoltstackSiteCustomNetworkConfigSloConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: VoltstackSiteCustomNetworkConfigSloConfigStaticV6Routes) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }
}
export interface VoltstackSiteCustomNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#bgp_peer_address VoltstackSite#bgp_peer_address}
  */
  readonly bgpPeerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#bgp_peer_address_v6 VoltstackSite#bgp_peer_address_v6}
  */
  readonly bgpPeerAddressV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#bgp_router_id VoltstackSite#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_config VoltstackSite#default_config}
  */
  readonly defaultConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_interface_config VoltstackSite#default_interface_config}
  */
  readonly defaultInterfaceConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#forward_proxy_allow_all VoltstackSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_forward_proxy VoltstackSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_global_network VoltstackSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_network_policy VoltstackSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_nameserver VoltstackSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_nameserver_v6 VoltstackSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_vip VoltstackSite#outside_vip}
  */
  readonly outsideVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#outside_vip_v6 VoltstackSite#outside_vip_v6}
  */
  readonly outsideVipV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#site_to_site_tunnel_ip VoltstackSite#site_to_site_tunnel_ip}
  */
  readonly siteToSiteTunnelIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#sm_connection_public_ip VoltstackSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#sm_connection_pvt_ip VoltstackSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tunnel_dead_timeout VoltstackSite#tunnel_dead_timeout}
  */
  readonly tunnelDeadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#vip_vrrp_mode VoltstackSite#vip_vrrp_mode}
  */
  readonly vipVrrpMode?: string;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#active_enhanced_firewall_policies VoltstackSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#active_forward_proxy_policies VoltstackSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#active_network_policies VoltstackSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: VoltstackSiteCustomNetworkConfigActiveNetworkPolicies;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#global_network_list VoltstackSite#global_network_list}
  */
  readonly globalNetworkList?: VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface_list VoltstackSite#interface_list}
  */
  readonly interfaceList?: VoltstackSiteCustomNetworkConfigInterfaceListStruct;
  /**
  * slo_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#slo_config VoltstackSite#slo_config}
  */
  readonly sloConfig?: VoltstackSiteCustomNetworkConfigSloConfig;
}

export function voltstackSiteCustomNetworkConfigToTerraform(struct?: VoltstackSiteCustomNetworkConfigOutputReference | VoltstackSiteCustomNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_peer_address: cdktf.stringToTerraform(struct!.bgpPeerAddress),
    bgp_peer_address_v6: cdktf.stringToTerraform(struct!.bgpPeerAddressV6),
    bgp_router_id: cdktf.stringToTerraform(struct!.bgpRouterId),
    default_config: cdktf.booleanToTerraform(struct!.defaultConfig),
    default_interface_config: cdktf.booleanToTerraform(struct!.defaultInterfaceConfig),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
    outside_vip: cdktf.stringToTerraform(struct!.outsideVip),
    outside_vip_v6: cdktf.stringToTerraform(struct!.outsideVipV6),
    site_to_site_tunnel_ip: cdktf.stringToTerraform(struct!.siteToSiteTunnelIp),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    tunnel_dead_timeout: cdktf.numberToTerraform(struct!.tunnelDeadTimeout),
    vip_vrrp_mode: cdktf.stringToTerraform(struct!.vipVrrpMode),
    active_enhanced_firewall_policies: voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    global_network_list: voltstackSiteCustomNetworkConfigGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    interface_list: voltstackSiteCustomNetworkConfigInterfaceListStructToTerraform(struct!.interfaceList),
    slo_config: voltstackSiteCustomNetworkConfigSloConfigToTerraform(struct!.sloConfig),
  }
}


export function voltstackSiteCustomNetworkConfigToHclTerraform(struct?: VoltstackSiteCustomNetworkConfigOutputReference | VoltstackSiteCustomNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_peer_address_v6: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerAddressV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_router_id: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_interface_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultInterfaceConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_vip: {
      value: cdktf.stringToHclTerraform(struct!.outsideVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_vip_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideVipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_to_site_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.siteToSiteTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_dead_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tunnelDeadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_vrrp_mode: {
      value: cdktf.stringToHclTerraform(struct!.vipVrrpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_enhanced_firewall_policies: {
      value: voltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: voltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: voltstackSiteCustomNetworkConfigActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesList",
    },
    global_network_list: {
      value: voltstackSiteCustomNetworkConfigGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigGlobalNetworkListStructList",
    },
    interface_list: {
      value: voltstackSiteCustomNetworkConfigInterfaceListStructToHclTerraform(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigInterfaceListStructList",
    },
    slo_config: {
      value: voltstackSiteCustomNetworkConfigSloConfigToHclTerraform(struct!.sloConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomNetworkConfigSloConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpPeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerAddress = this._bgpPeerAddress;
    }
    if (this._bgpPeerAddressV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerAddressV6 = this._bgpPeerAddressV6;
    }
    if (this._bgpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterId = this._bgpRouterId;
    }
    if (this._defaultConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig;
    }
    if (this._defaultInterfaceConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInterfaceConfig = this._defaultInterfaceConfig;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    if (this._outsideVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideVip = this._outsideVip;
    }
    if (this._outsideVipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideVipV6 = this._outsideVipV6;
    }
    if (this._siteToSiteTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteTunnelIp = this._siteToSiteTunnelIp;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._tunnelDeadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDeadTimeout = this._tunnelDeadTimeout;
    }
    if (this._vipVrrpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipVrrpMode = this._vipVrrpMode;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    if (this._sloConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloConfig = this._sloConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpPeerAddress = undefined;
      this._bgpPeerAddressV6 = undefined;
      this._bgpRouterId = undefined;
      this._defaultConfig = undefined;
      this._defaultInterfaceConfig = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noNetworkPolicy = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
      this._outsideVip = undefined;
      this._outsideVipV6 = undefined;
      this._siteToSiteTunnelIp = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._tunnelDeadTimeout = undefined;
      this._vipVrrpMode = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._interfaceList.internalValue = undefined;
      this._sloConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpPeerAddress = value.bgpPeerAddress;
      this._bgpPeerAddressV6 = value.bgpPeerAddressV6;
      this._bgpRouterId = value.bgpRouterId;
      this._defaultConfig = value.defaultConfig;
      this._defaultInterfaceConfig = value.defaultInterfaceConfig;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
      this._outsideVip = value.outsideVip;
      this._outsideVipV6 = value.outsideVipV6;
      this._siteToSiteTunnelIp = value.siteToSiteTunnelIp;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._tunnelDeadTimeout = value.tunnelDeadTimeout;
      this._vipVrrpMode = value.vipVrrpMode;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._interfaceList.internalValue = value.interfaceList;
      this._sloConfig.internalValue = value.sloConfig;
    }
  }

  // bgp_peer_address - computed: false, optional: true, required: false
  private _bgpPeerAddress?: string; 
  public get bgpPeerAddress() {
    return this.getStringAttribute('bgp_peer_address');
  }
  public set bgpPeerAddress(value: string) {
    this._bgpPeerAddress = value;
  }
  public resetBgpPeerAddress() {
    this._bgpPeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAddressInput() {
    return this._bgpPeerAddress;
  }

  // bgp_peer_address_v6 - computed: false, optional: true, required: false
  private _bgpPeerAddressV6?: string; 
  public get bgpPeerAddressV6() {
    return this.getStringAttribute('bgp_peer_address_v6');
  }
  public set bgpPeerAddressV6(value: string) {
    this._bgpPeerAddressV6 = value;
  }
  public resetBgpPeerAddressV6() {
    this._bgpPeerAddressV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAddressV6Input() {
    return this._bgpPeerAddressV6;
  }

  // bgp_router_id - computed: false, optional: true, required: false
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
  }

  // default_interface_config - computed: false, optional: true, required: false
  private _defaultInterfaceConfig?: boolean | cdktf.IResolvable; 
  public get defaultInterfaceConfig() {
    return this.getBooleanAttribute('default_interface_config');
  }
  public set defaultInterfaceConfig(value: boolean | cdktf.IResolvable) {
    this._defaultInterfaceConfig = value;
  }
  public resetDefaultInterfaceConfig() {
    this._defaultInterfaceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInterfaceConfigInput() {
    return this._defaultInterfaceConfig;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }

  // outside_vip - computed: false, optional: true, required: false
  private _outsideVip?: string; 
  public get outsideVip() {
    return this.getStringAttribute('outside_vip');
  }
  public set outsideVip(value: string) {
    this._outsideVip = value;
  }
  public resetOutsideVip() {
    this._outsideVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVipInput() {
    return this._outsideVip;
  }

  // outside_vip_v6 - computed: false, optional: true, required: false
  private _outsideVipV6?: string; 
  public get outsideVipV6() {
    return this.getStringAttribute('outside_vip_v6');
  }
  public set outsideVipV6(value: string) {
    this._outsideVipV6 = value;
  }
  public resetOutsideVipV6() {
    this._outsideVipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVipV6Input() {
    return this._outsideVipV6;
  }

  // site_to_site_tunnel_ip - computed: false, optional: true, required: false
  private _siteToSiteTunnelIp?: string; 
  public get siteToSiteTunnelIp() {
    return this.getStringAttribute('site_to_site_tunnel_ip');
  }
  public set siteToSiteTunnelIp(value: string) {
    this._siteToSiteTunnelIp = value;
  }
  public resetSiteToSiteTunnelIp() {
    this._siteToSiteTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteTunnelIpInput() {
    return this._siteToSiteTunnelIp;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // tunnel_dead_timeout - computed: false, optional: true, required: false
  private _tunnelDeadTimeout?: number; 
  public get tunnelDeadTimeout() {
    return this.getNumberAttribute('tunnel_dead_timeout');
  }
  public set tunnelDeadTimeout(value: number) {
    this._tunnelDeadTimeout = value;
  }
  public resetTunnelDeadTimeout() {
    this._tunnelDeadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDeadTimeoutInput() {
    return this._tunnelDeadTimeout;
  }

  // vip_vrrp_mode - computed: false, optional: true, required: false
  private _vipVrrpMode?: string; 
  public get vipVrrpMode() {
    return this.getStringAttribute('vip_vrrp_mode');
  }
  public set vipVrrpMode(value: string) {
    this._vipVrrpMode = value;
  }
  public resetVipVrrpMode() {
    this._vipVrrpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipVrrpModeInput() {
    return this._vipVrrpMode;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: VoltstackSiteCustomNetworkConfigActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new VoltstackSiteCustomNetworkConfigActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: VoltstackSiteCustomNetworkConfigActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new VoltstackSiteCustomNetworkConfigActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: VoltstackSiteCustomNetworkConfigActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new VoltstackSiteCustomNetworkConfigGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: VoltstackSiteCustomNetworkConfigGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new VoltstackSiteCustomNetworkConfigInterfaceListStructOutputReference(this, "interface_list");
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: VoltstackSiteCustomNetworkConfigInterfaceListStruct) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }

  // slo_config - computed: false, optional: true, required: false
  private _sloConfig = new VoltstackSiteCustomNetworkConfigSloConfigOutputReference(this, "slo_config");
  public get sloConfig() {
    return this._sloConfig;
  }
  public putSloConfig(value: VoltstackSiteCustomNetworkConfigSloConfig) {
    this._sloConfig.internalValue = value;
  }
  public resetSloConfig() {
    this._sloConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloConfigInput() {
    return this._sloConfig.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tenant VoltstackSite#tenant}
  */
  readonly tenant?: string;
}

export function voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceOutputReference | VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#attrs VoltstackSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_gateway VoltstackSite#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_address VoltstackSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ip_prefixes VoltstackSite#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#interface VoltstackSite#interface}
  */
  readonly interface?: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface;
}

export function voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesToTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesOutputReference {
    return new VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#static_routes VoltstackSite#static_routes}
  */
  readonly staticRoutes: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStaticRoutesToTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesOutputReference | VoltstackSiteCustomStorageConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function voltstackSiteCustomStorageConfigStaticRoutesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStaticRoutesOutputReference | VoltstackSiteCustomStorageConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VoltstackSiteCustomStorageConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#yaml VoltstackSite#yaml}
  */
  readonly yaml?: string;
}

export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    yaml: cdktf.stringToTerraform(struct!.yaml),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    yaml: {
      value: cdktf.stringToHclTerraform(struct!.yaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._yaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._yaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._yaml = value.yaml;
    }
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#allow_mutations VoltstackSite#allow_mutations}
  */
  readonly allowMutations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#allow_overrides VoltstackSite#allow_overrides}
  */
  readonly allowOverrides?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#dedupe_enabled VoltstackSite#dedupe_enabled}
  */
  readonly dedupeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#destroy_on_delete VoltstackSite#destroy_on_delete}
  */
  readonly destroyOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#encrypted VoltstackSite#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#folder VoltstackSite#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_iops VoltstackSite#limit_iops}
  */
  readonly limitIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_mbps VoltstackSite#limit_mbps}
  */
  readonly limitMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#performance_policy VoltstackSite#performance_policy}
  */
  readonly performancePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pool VoltstackSite#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#protection_template VoltstackSite#protection_template}
  */
  readonly protectionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#secret_name VoltstackSite#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#secret_namespace VoltstackSite#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#sync_on_detach VoltstackSite#sync_on_detach}
  */
  readonly syncOnDetach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#thick VoltstackSite#thick}
  */
  readonly thick?: boolean | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_mutations: cdktf.stringToTerraform(struct!.allowMutations),
    allow_overrides: cdktf.stringToTerraform(struct!.allowOverrides),
    dedupe_enabled: cdktf.booleanToTerraform(struct!.dedupeEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    destroy_on_delete: cdktf.booleanToTerraform(struct!.destroyOnDelete),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    folder: cdktf.stringToTerraform(struct!.folder),
    limit_iops: cdktf.numberToTerraform(struct!.limitIops),
    limit_mbps: cdktf.numberToTerraform(struct!.limitMbps),
    performance_policy: cdktf.stringToTerraform(struct!.performancePolicy),
    pool: cdktf.stringToTerraform(struct!.pool),
    protection_template: cdktf.stringToTerraform(struct!.protectionTemplate),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    sync_on_detach: cdktf.booleanToTerraform(struct!.syncOnDetach),
    thick: cdktf.booleanToTerraform(struct!.thick),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_mutations: {
      value: cdktf.stringToHclTerraform(struct!.allowMutations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_overrides: {
      value: cdktf.stringToHclTerraform(struct!.allowOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedupe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedupeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destroy_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.destroyOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_iops: {
      value: cdktf.numberToHclTerraform(struct!.limitIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_mbps: {
      value: cdktf.numberToHclTerraform(struct!.limitMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_policy: {
      value: cdktf.stringToHclTerraform(struct!.performancePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_template: {
      value: cdktf.stringToHclTerraform(struct!.protectionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_on_detach: {
      value: cdktf.booleanToHclTerraform(struct!.syncOnDetach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thick: {
      value: cdktf.booleanToHclTerraform(struct!.thick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMutations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMutations = this._allowMutations;
    }
    if (this._allowOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverrides = this._allowOverrides;
    }
    if (this._dedupeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeEnabled = this._dedupeEnabled;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destroyOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroyOnDelete = this._destroyOnDelete;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._limitIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitIops = this._limitIops;
    }
    if (this._limitMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMbps = this._limitMbps;
    }
    if (this._performancePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.performancePolicy = this._performancePolicy;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._protectionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionTemplate = this._protectionTemplate;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._syncOnDetach !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOnDetach = this._syncOnDetach;
    }
    if (this._thick !== undefined) {
      hasAnyValues = true;
      internalValueResult.thick = this._thick;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowMutations = undefined;
      this._allowOverrides = undefined;
      this._dedupeEnabled = undefined;
      this._description = undefined;
      this._destroyOnDelete = undefined;
      this._encrypted = undefined;
      this._folder = undefined;
      this._limitIops = undefined;
      this._limitMbps = undefined;
      this._performancePolicy = undefined;
      this._pool = undefined;
      this._protectionTemplate = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._syncOnDetach = undefined;
      this._thick = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowMutations = value.allowMutations;
      this._allowOverrides = value.allowOverrides;
      this._dedupeEnabled = value.dedupeEnabled;
      this._description = value.description;
      this._destroyOnDelete = value.destroyOnDelete;
      this._encrypted = value.encrypted;
      this._folder = value.folder;
      this._limitIops = value.limitIops;
      this._limitMbps = value.limitMbps;
      this._performancePolicy = value.performancePolicy;
      this._pool = value.pool;
      this._protectionTemplate = value.protectionTemplate;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._syncOnDetach = value.syncOnDetach;
      this._thick = value.thick;
    }
  }

  // allow_mutations - computed: false, optional: true, required: false
  private _allowMutations?: string; 
  public get allowMutations() {
    return this.getStringAttribute('allow_mutations');
  }
  public set allowMutations(value: string) {
    this._allowMutations = value;
  }
  public resetAllowMutations() {
    this._allowMutations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMutationsInput() {
    return this._allowMutations;
  }

  // allow_overrides - computed: false, optional: true, required: false
  private _allowOverrides?: string; 
  public get allowOverrides() {
    return this.getStringAttribute('allow_overrides');
  }
  public set allowOverrides(value: string) {
    this._allowOverrides = value;
  }
  public resetAllowOverrides() {
    this._allowOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverridesInput() {
    return this._allowOverrides;
  }

  // dedupe_enabled - computed: false, optional: true, required: false
  private _dedupeEnabled?: boolean | cdktf.IResolvable; 
  public get dedupeEnabled() {
    return this.getBooleanAttribute('dedupe_enabled');
  }
  public set dedupeEnabled(value: boolean | cdktf.IResolvable) {
    this._dedupeEnabled = value;
  }
  public resetDedupeEnabled() {
    this._dedupeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeEnabledInput() {
    return this._dedupeEnabled;
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

  // destroy_on_delete - computed: false, optional: true, required: false
  private _destroyOnDelete?: boolean | cdktf.IResolvable; 
  public get destroyOnDelete() {
    return this.getBooleanAttribute('destroy_on_delete');
  }
  public set destroyOnDelete(value: boolean | cdktf.IResolvable) {
    this._destroyOnDelete = value;
  }
  public resetDestroyOnDelete() {
    this._destroyOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyOnDeleteInput() {
    return this._destroyOnDelete;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit_iops - computed: false, optional: true, required: false
  private _limitIops?: number; 
  public get limitIops() {
    return this.getNumberAttribute('limit_iops');
  }
  public set limitIops(value: number) {
    this._limitIops = value;
  }
  public resetLimitIops() {
    this._limitIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIopsInput() {
    return this._limitIops;
  }

  // limit_mbps - computed: false, optional: true, required: false
  private _limitMbps?: number; 
  public get limitMbps() {
    return this.getNumberAttribute('limit_mbps');
  }
  public set limitMbps(value: number) {
    this._limitMbps = value;
  }
  public resetLimitMbps() {
    this._limitMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMbpsInput() {
    return this._limitMbps;
  }

  // performance_policy - computed: false, optional: true, required: false
  private _performancePolicy?: string; 
  public get performancePolicy() {
    return this.getStringAttribute('performance_policy');
  }
  public set performancePolicy(value: string) {
    this._performancePolicy = value;
  }
  public resetPerformancePolicy() {
    this._performancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performancePolicyInput() {
    return this._performancePolicy;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // protection_template - computed: false, optional: true, required: false
  private _protectionTemplate?: string; 
  public get protectionTemplate() {
    return this.getStringAttribute('protection_template');
  }
  public set protectionTemplate(value: string) {
    this._protectionTemplate = value;
  }
  public resetProtectionTemplate() {
    this._protectionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionTemplateInput() {
    return this._protectionTemplate;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // sync_on_detach - computed: false, optional: true, required: false
  private _syncOnDetach?: boolean | cdktf.IResolvable; 
  public get syncOnDetach() {
    return this.getBooleanAttribute('sync_on_detach');
  }
  public set syncOnDetach(value: boolean | cdktf.IResolvable) {
    this._syncOnDetach = value;
  }
  public resetSyncOnDetach() {
    this._syncOnDetach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnDetachInput() {
    return this._syncOnDetach;
  }

  // thick - computed: false, optional: true, required: false
  private _thick?: boolean | cdktf.IResolvable; 
  public get thick() {
    return this.getBooleanAttribute('thick');
  }
  public set thick(value: boolean | cdktf.IResolvable) {
    this._thick = value;
  }
  public resetThick() {
    this._thick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thickInput() {
    return this._thick;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#selector VoltstackSite#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_pools VoltstackSite#storage_pools}
  */
  readonly storagePools?: string;
}

export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    storage_pools: cdktf.stringToTerraform(struct!.storagePools),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_pools: {
      value: cdktf.stringToHclTerraform(struct!.storagePools),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
      this._storagePools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
      this._storagePools = value.storagePools;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string; 
  public get storagePools() {
    return this.getStringAttribute('storage_pools');
  }
  public set storagePools(value: string) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#backend VoltstackSite#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#bandwidth_limit VoltstackSite#bandwidth_limit}
  */
  readonly bandwidthLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#iops_limit VoltstackSite#iops_limit}
  */
  readonly iopsLimit?: number;
}

export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.stringToTerraform(struct!.backend),
    bandwidth_limit: cdktf.stringToTerraform(struct!.bandwidthLimit),
    iops_limit: cdktf.numberToTerraform(struct!.iopsLimit),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_limit: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops_limit: {
      value: cdktf.numberToHclTerraform(struct!.iopsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._iopsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsLimit = this._iopsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backend = undefined;
      this._bandwidthLimit = undefined;
      this._iopsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backend = value.backend;
      this._bandwidthLimit = value.bandwidthLimit;
      this._iopsLimit = value.iopsLimit;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: string; 
  public get bandwidthLimit() {
    return this.getStringAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: string) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // iops_limit - computed: false, optional: true, required: false
  private _iopsLimit?: number; 
  public get iopsLimit() {
    return this.getNumberAttribute('iops_limit');
  }
  public set iopsLimit(value: number) {
    this._iopsLimit = value;
  }
  public resetIopsLimit() {
    this._iopsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsLimitInput() {
    return this._iopsLimit;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#advanced_storage_parameters VoltstackSite#advanced_storage_parameters}
  */
  readonly advancedStorageParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#allow_volume_expansion VoltstackSite#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_storage_class VoltstackSite#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#reclaim_policy VoltstackSite#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_class_name VoltstackSite#storage_class_name}
  */
  readonly storageClassName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_device VoltstackSite#storage_device}
  */
  readonly storageDevice: string;
  /**
  * custom_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#custom_storage VoltstackSite#custom_storage}
  */
  readonly customStorage?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage;
  /**
  * hpe_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#hpe_storage VoltstackSite#hpe_storage}
  */
  readonly hpeStorage?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage;
  /**
  * netapp_trident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#netapp_trident VoltstackSite#netapp_trident}
  */
  readonly netappTrident?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident;
  /**
  * pure_service_orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pure_service_orchestrator VoltstackSite#pure_service_orchestrator}
  */
  readonly pureServiceOrchestrator?: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator;
}

export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_storage_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.advancedStorageParameters),
    allow_volume_expansion: cdktf.booleanToTerraform(struct!.allowVolumeExpansion),
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    description: cdktf.stringToTerraform(struct!.description),
    reclaim_policy: cdktf.stringToTerraform(struct!.reclaimPolicy),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    storage_device: cdktf.stringToTerraform(struct!.storageDevice),
    custom_storage: voltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageToTerraform(struct!.customStorage),
    hpe_storage: voltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageToTerraform(struct!.hpeStorage),
    netapp_trident: voltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentToTerraform(struct!.netappTrident),
    pure_service_orchestrator: voltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorToTerraform(struct!.pureServiceOrchestrator),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStorageClassesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_storage_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.advancedStorageParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allow_volume_expansion: {
      value: cdktf.booleanToHclTerraform(struct!.allowVolumeExpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_storage_class: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.reclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_device: {
      value: cdktf.stringToHclTerraform(struct!.storageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_storage: {
      value: voltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageToHclTerraform(struct!.customStorage),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageList",
    },
    hpe_storage: {
      value: voltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageToHclTerraform(struct!.hpeStorage),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageList",
    },
    netapp_trident: {
      value: voltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentToHclTerraform(struct!.netappTrident),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentList",
    },
    pure_service_orchestrator: {
      value: voltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorToHclTerraform(struct!.pureServiceOrchestrator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedStorageParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedStorageParameters = this._advancedStorageParameters;
    }
    if (this._allowVolumeExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVolumeExpansion = this._allowVolumeExpansion;
    }
    if (this._defaultStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageClass = this._defaultStorageClass;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._reclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimPolicy = this._reclaimPolicy;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._storageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevice = this._storageDevice;
    }
    if (this._customStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStorage = this._customStorage?.internalValue;
    }
    if (this._hpeStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpeStorage = this._hpeStorage?.internalValue;
    }
    if (this._netappTrident?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappTrident = this._netappTrident?.internalValue;
    }
    if (this._pureServiceOrchestrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pureServiceOrchestrator = this._pureServiceOrchestrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedStorageParameters = undefined;
      this._allowVolumeExpansion = undefined;
      this._defaultStorageClass = undefined;
      this._description = undefined;
      this._reclaimPolicy = undefined;
      this._storageClassName = undefined;
      this._storageDevice = undefined;
      this._customStorage.internalValue = undefined;
      this._hpeStorage.internalValue = undefined;
      this._netappTrident.internalValue = undefined;
      this._pureServiceOrchestrator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedStorageParameters = value.advancedStorageParameters;
      this._allowVolumeExpansion = value.allowVolumeExpansion;
      this._defaultStorageClass = value.defaultStorageClass;
      this._description = value.description;
      this._reclaimPolicy = value.reclaimPolicy;
      this._storageClassName = value.storageClassName;
      this._storageDevice = value.storageDevice;
      this._customStorage.internalValue = value.customStorage;
      this._hpeStorage.internalValue = value.hpeStorage;
      this._netappTrident.internalValue = value.netappTrident;
      this._pureServiceOrchestrator.internalValue = value.pureServiceOrchestrator;
    }
  }

  // advanced_storage_parameters - computed: false, optional: true, required: false
  private _advancedStorageParameters?: { [key: string]: string }; 
  public get advancedStorageParameters() {
    return this.getStringMapAttribute('advanced_storage_parameters');
  }
  public set advancedStorageParameters(value: { [key: string]: string }) {
    this._advancedStorageParameters = value;
  }
  public resetAdvancedStorageParameters() {
    this._advancedStorageParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedStorageParametersInput() {
    return this._advancedStorageParameters;
  }

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion;
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
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

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // storage_device - computed: false, optional: false, required: true
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // custom_storage - computed: false, optional: true, required: false
  private _customStorage = new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorageOutputReference(this, "custom_storage");
  public get customStorage() {
    return this._customStorage;
  }
  public putCustomStorage(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesCustomStorage) {
    this._customStorage.internalValue = value;
  }
  public resetCustomStorage() {
    this._customStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStorageInput() {
    return this._customStorage.internalValue;
  }

  // hpe_storage - computed: false, optional: true, required: false
  private _hpeStorage = new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorageOutputReference(this, "hpe_storage");
  public get hpeStorage() {
    return this._hpeStorage;
  }
  public putHpeStorage(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesHpeStorage) {
    this._hpeStorage.internalValue = value;
  }
  public resetHpeStorage() {
    this._hpeStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpeStorageInput() {
    return this._hpeStorage.internalValue;
  }

  // netapp_trident - computed: false, optional: true, required: false
  private _netappTrident = new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTridentOutputReference(this, "netapp_trident");
  public get netappTrident() {
    return this._netappTrident;
  }
  public putNetappTrident(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesNetappTrident) {
    this._netappTrident.internalValue = value;
  }
  public resetNetappTrident() {
    this._netappTrident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappTridentInput() {
    return this._netappTrident.internalValue;
  }

  // pure_service_orchestrator - computed: false, optional: true, required: false
  private _pureServiceOrchestrator = new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestratorOutputReference(this, "pure_service_orchestrator");
  public get pureServiceOrchestrator() {
    return this._pureServiceOrchestrator;
  }
  public putPureServiceOrchestrator(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClassesPureServiceOrchestrator) {
    this._pureServiceOrchestrator.internalValue = value;
  }
  public resetPureServiceOrchestrator() {
    this._pureServiceOrchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureServiceOrchestratorInput() {
    return this._pureServiceOrchestrator.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageClassListStorageClassesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageClassListStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageClassListStorageClassesOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageClassListStruct {
  /**
  * storage_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_classes VoltstackSite#storage_classes}
  */
  readonly storageClasses?: VoltstackSiteCustomStorageConfigStorageClassListStorageClasses[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageClassListStructToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStructOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_classes: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageClassListStorageClassesToTerraform, true)(struct!.storageClasses),
  }
}


export function voltstackSiteCustomStorageConfigStorageClassListStructToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageClassListStructOutputReference | VoltstackSiteCustomStorageConfigStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_classes: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageClassListStorageClassesToHclTerraform, true)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageClassListStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClasses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new VoltstackSiteCustomStorageConfigStorageClassListStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: VoltstackSiteCustomStorageConfigStorageClassListStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#api_server_port VoltstackSite#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#iscsi_chap_user VoltstackSite#iscsi_chap_user}
  */
  readonly iscsiChapUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_server_ip_address VoltstackSite#storage_server_ip_address}
  */
  readonly storageServerIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_server_name VoltstackSite#storage_server_name}
  */
  readonly storageServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#username VoltstackSite#username}
  */
  readonly username: string;
  /**
  * iscsi_chap_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#iscsi_chap_password VoltstackSite#iscsi_chap_password}
  */
  readonly iscsiChapPassword?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#password VoltstackSite#password}
  */
  readonly password?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    iscsi_chap_user: cdktf.stringToTerraform(struct!.iscsiChapUser),
    storage_server_ip_address: cdktf.stringToTerraform(struct!.storageServerIpAddress),
    storage_server_name: cdktf.stringToTerraform(struct!.storageServerName),
    username: cdktf.stringToTerraform(struct!.username),
    iscsi_chap_password: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToTerraform(struct!.iscsiChapPassword),
    password: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordToTerraform(struct!.password),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iscsi_chap_user: {
      value: cdktf.stringToHclTerraform(struct!.iscsiChapUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_server_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.storageServerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_server_name: {
      value: cdktf.stringToHclTerraform(struct!.storageServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_chap_password: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToHclTerraform(struct!.iscsiChapPassword),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordList",
    },
    password: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._iscsiChapUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiChapUser = this._iscsiChapUser;
    }
    if (this._storageServerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageServerIpAddress = this._storageServerIpAddress;
    }
    if (this._storageServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageServerName = this._storageServerName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._iscsiChapPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiChapPassword = this._iscsiChapPassword?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerPort = undefined;
      this._iscsiChapUser = undefined;
      this._storageServerIpAddress = undefined;
      this._storageServerName = undefined;
      this._username = undefined;
      this._iscsiChapPassword.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerPort = value.apiServerPort;
      this._iscsiChapUser = value.iscsiChapUser;
      this._storageServerIpAddress = value.storageServerIpAddress;
      this._storageServerName = value.storageServerName;
      this._username = value.username;
      this._iscsiChapPassword.internalValue = value.iscsiChapPassword;
      this._password.internalValue = value.password;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // iscsi_chap_user - computed: false, optional: true, required: false
  private _iscsiChapUser?: string; 
  public get iscsiChapUser() {
    return this.getStringAttribute('iscsi_chap_user');
  }
  public set iscsiChapUser(value: string) {
    this._iscsiChapUser = value;
  }
  public resetIscsiChapUser() {
    this._iscsiChapUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiChapUserInput() {
    return this._iscsiChapUser;
  }

  // storage_server_ip_address - computed: false, optional: true, required: false
  private _storageServerIpAddress?: string; 
  public get storageServerIpAddress() {
    return this.getStringAttribute('storage_server_ip_address');
  }
  public set storageServerIpAddress(value: string) {
    this._storageServerIpAddress = value;
  }
  public resetStorageServerIpAddress() {
    this._storageServerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerIpAddressInput() {
    return this._storageServerIpAddress;
  }

  // storage_server_name - computed: false, optional: true, required: false
  private _storageServerName?: string; 
  public get storageServerName() {
    return this.getStringAttribute('storage_server_name');
  }
  public set storageServerName(value: string) {
    this._storageServerName = value;
  }
  public resetStorageServerName() {
    this._storageServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerNameInput() {
    return this._storageServerName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // iscsi_chap_password - computed: false, optional: true, required: false
  private _iscsiChapPassword = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference(this, "iscsi_chap_password");
  public get iscsiChapPassword() {
    return this._iscsiChapPassword;
  }
  public putIscsiChapPassword(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword) {
    this._iscsiChapPassword.internalValue = value;
  }
  public resetIscsiChapPassword() {
    this._iscsiChapPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiChapPasswordInput() {
    return this._iscsiChapPassword.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStoragePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#ipv6_prefixes VoltstackSite#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#prefixes VoltstackSite#prefixes}
  */
  readonly prefixes?: string[];
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#adaptive_qos_policy VoltstackSite#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#encryption VoltstackSite#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#export_policy VoltstackSite#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_qos VoltstackSite#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#qos_policy VoltstackSite#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#security_style VoltstackSite#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_dir VoltstackSite#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_policy VoltstackSite#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_reserve VoltstackSite#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#space_reserve VoltstackSite#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#split_on_clone VoltstackSite#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tiering_policy VoltstackSite#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#unix_permissions VoltstackSite#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#zone VoltstackSite#zone}
  */
  readonly zone?: string;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#volume_defaults VoltstackSite#volume_defaults}
  */
  readonly volumeDefaults?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    zone: cdktf.stringToTerraform(struct!.zone),
    volume_defaults: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_defaults: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._zone = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._zone = value.zone;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#adaptive_qos_policy VoltstackSite#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#encryption VoltstackSite#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#export_policy VoltstackSite#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_qos VoltstackSite#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#qos_policy VoltstackSite#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#security_style VoltstackSite#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_dir VoltstackSite#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_policy VoltstackSite#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_reserve VoltstackSite#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#space_reserve VoltstackSite#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#split_on_clone VoltstackSite#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tiering_policy VoltstackSite#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#unix_permissions VoltstackSite#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#auto_export_policy VoltstackSite#auto_export_policy}
  */
  readonly autoExportPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#backend_name VoltstackSite#backend_name}
  */
  readonly backendName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#client_certificate VoltstackSite#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#data_lif_dns_name VoltstackSite#data_lif_dns_name}
  */
  readonly dataLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#data_lif_ip VoltstackSite#data_lif_ip}
  */
  readonly dataLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_aggregate_usage VoltstackSite#limit_aggregate_usage}
  */
  readonly limitAggregateUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_volume_size VoltstackSite#limit_volume_size}
  */
  readonly limitVolumeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#management_lif_dns_name VoltstackSite#management_lif_dns_name}
  */
  readonly managementLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#management_lif_ip VoltstackSite#management_lif_ip}
  */
  readonly managementLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#nfs_mount_options VoltstackSite#nfs_mount_options}
  */
  readonly nfsMountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#region VoltstackSite#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_driver_name VoltstackSite#storage_driver_name}
  */
  readonly storageDriverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_prefix VoltstackSite#storage_prefix}
  */
  readonly storagePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#svm VoltstackSite#svm}
  */
  readonly svm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#trusted_ca_certificate VoltstackSite#trusted_ca_certificate}
  */
  readonly trustedCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#username VoltstackSite#username}
  */
  readonly username: string;
  /**
  * auto_export_cidrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#auto_export_cidrs VoltstackSite#auto_export_cidrs}
  */
  readonly autoExportCidrs?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#client_private_key VoltstackSite#client_private_key}
  */
  readonly clientPrivateKey?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#password VoltstackSite#password}
  */
  readonly password?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage VoltstackSite#storage}
  */
  readonly storage?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#volume_defaults VoltstackSite#volume_defaults}
  */
  readonly volumeDefaults?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_export_policy: cdktf.booleanToTerraform(struct!.autoExportPolicy),
    backend_name: cdktf.stringToTerraform(struct!.backendName),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    data_lif_dns_name: cdktf.stringToTerraform(struct!.dataLifDnsName),
    data_lif_ip: cdktf.stringToTerraform(struct!.dataLifIp),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    limit_aggregate_usage: cdktf.stringToTerraform(struct!.limitAggregateUsage),
    limit_volume_size: cdktf.stringToTerraform(struct!.limitVolumeSize),
    management_lif_dns_name: cdktf.stringToTerraform(struct!.managementLifDnsName),
    management_lif_ip: cdktf.stringToTerraform(struct!.managementLifIp),
    nfs_mount_options: cdktf.stringToTerraform(struct!.nfsMountOptions),
    region: cdktf.stringToTerraform(struct!.region),
    storage_driver_name: cdktf.stringToTerraform(struct!.storageDriverName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    svm: cdktf.stringToTerraform(struct!.svm),
    trusted_ca_certificate: cdktf.stringToTerraform(struct!.trustedCaCertificate),
    username: cdktf.stringToTerraform(struct!.username),
    auto_export_cidrs: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToTerraform(struct!.autoExportCidrs),
    client_private_key: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    password: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToTerraform(struct!.password),
    storage: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToTerraform, true)(struct!.storage),
    volume_defaults: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_export_policy: {
      value: cdktf.booleanToHclTerraform(struct!.autoExportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_name: {
      value: cdktf.stringToHclTerraform(struct!.backendName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dataLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataLifIp),
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
    limit_aggregate_usage: {
      value: cdktf.stringToHclTerraform(struct!.limitAggregateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_volume_size: {
      value: cdktf.stringToHclTerraform(struct!.limitVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.managementLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_mount_options: {
      value: cdktf.stringToHclTerraform(struct!.nfsMountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_driver_name: {
      value: cdktf.stringToHclTerraform(struct!.storageDriverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm: {
      value: cdktf.stringToHclTerraform(struct!.svm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_export_cidrs: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToHclTerraform(struct!.autoExportCidrs),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsList",
    },
    client_private_key: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyList",
    },
    password: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordList",
    },
    storage: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList",
    },
    volume_defaults: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportPolicy = this._autoExportPolicy;
    }
    if (this._backendName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendName = this._backendName;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._dataLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifDnsName = this._dataLifDnsName;
    }
    if (this._dataLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifIp = this._dataLifIp;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._limitAggregateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitAggregateUsage = this._limitAggregateUsage;
    }
    if (this._limitVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitVolumeSize = this._limitVolumeSize;
    }
    if (this._managementLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifDnsName = this._managementLifDnsName;
    }
    if (this._managementLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifIp = this._managementLifIp;
    }
    if (this._nfsMountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsMountOptions = this._nfsMountOptions;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDriverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDriverName = this._storageDriverName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._svm !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm;
    }
    if (this._trustedCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaCertificate = this._trustedCaCertificate;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._autoExportCidrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportCidrs = this._autoExportCidrs?.internalValue;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoExportPolicy = undefined;
      this._backendName = undefined;
      this._clientCertificate = undefined;
      this._dataLifDnsName = undefined;
      this._dataLifIp = undefined;
      this._labels = undefined;
      this._limitAggregateUsage = undefined;
      this._limitVolumeSize = undefined;
      this._managementLifDnsName = undefined;
      this._managementLifIp = undefined;
      this._nfsMountOptions = undefined;
      this._region = undefined;
      this._storageDriverName = undefined;
      this._storagePrefix = undefined;
      this._svm = undefined;
      this._trustedCaCertificate = undefined;
      this._username = undefined;
      this._autoExportCidrs.internalValue = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._password.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoExportPolicy = value.autoExportPolicy;
      this._backendName = value.backendName;
      this._clientCertificate = value.clientCertificate;
      this._dataLifDnsName = value.dataLifDnsName;
      this._dataLifIp = value.dataLifIp;
      this._labels = value.labels;
      this._limitAggregateUsage = value.limitAggregateUsage;
      this._limitVolumeSize = value.limitVolumeSize;
      this._managementLifDnsName = value.managementLifDnsName;
      this._managementLifIp = value.managementLifIp;
      this._nfsMountOptions = value.nfsMountOptions;
      this._region = value.region;
      this._storageDriverName = value.storageDriverName;
      this._storagePrefix = value.storagePrefix;
      this._svm = value.svm;
      this._trustedCaCertificate = value.trustedCaCertificate;
      this._username = value.username;
      this._autoExportCidrs.internalValue = value.autoExportCidrs;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._password.internalValue = value.password;
      this._storage.internalValue = value.storage;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // auto_export_policy - computed: false, optional: true, required: false
  private _autoExportPolicy?: boolean | cdktf.IResolvable; 
  public get autoExportPolicy() {
    return this.getBooleanAttribute('auto_export_policy');
  }
  public set autoExportPolicy(value: boolean | cdktf.IResolvable) {
    this._autoExportPolicy = value;
  }
  public resetAutoExportPolicy() {
    this._autoExportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportPolicyInput() {
    return this._autoExportPolicy;
  }

  // backend_name - computed: false, optional: true, required: false
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  public resetBackendName() {
    this._backendName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // data_lif_dns_name - computed: false, optional: true, required: false
  private _dataLifDnsName?: string; 
  public get dataLifDnsName() {
    return this.getStringAttribute('data_lif_dns_name');
  }
  public set dataLifDnsName(value: string) {
    this._dataLifDnsName = value;
  }
  public resetDataLifDnsName() {
    this._dataLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifDnsNameInput() {
    return this._dataLifDnsName;
  }

  // data_lif_ip - computed: false, optional: true, required: false
  private _dataLifIp?: string; 
  public get dataLifIp() {
    return this.getStringAttribute('data_lif_ip');
  }
  public set dataLifIp(value: string) {
    this._dataLifIp = value;
  }
  public resetDataLifIp() {
    this._dataLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifIpInput() {
    return this._dataLifIp;
  }

  // labels - computed: false, optional: true, required: false
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

  // limit_aggregate_usage - computed: false, optional: true, required: false
  private _limitAggregateUsage?: string; 
  public get limitAggregateUsage() {
    return this.getStringAttribute('limit_aggregate_usage');
  }
  public set limitAggregateUsage(value: string) {
    this._limitAggregateUsage = value;
  }
  public resetLimitAggregateUsage() {
    this._limitAggregateUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAggregateUsageInput() {
    return this._limitAggregateUsage;
  }

  // limit_volume_size - computed: false, optional: true, required: false
  private _limitVolumeSize?: string; 
  public get limitVolumeSize() {
    return this.getStringAttribute('limit_volume_size');
  }
  public set limitVolumeSize(value: string) {
    this._limitVolumeSize = value;
  }
  public resetLimitVolumeSize() {
    this._limitVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVolumeSizeInput() {
    return this._limitVolumeSize;
  }

  // management_lif_dns_name - computed: false, optional: true, required: false
  private _managementLifDnsName?: string; 
  public get managementLifDnsName() {
    return this.getStringAttribute('management_lif_dns_name');
  }
  public set managementLifDnsName(value: string) {
    this._managementLifDnsName = value;
  }
  public resetManagementLifDnsName() {
    this._managementLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifDnsNameInput() {
    return this._managementLifDnsName;
  }

  // management_lif_ip - computed: false, optional: true, required: false
  private _managementLifIp?: string; 
  public get managementLifIp() {
    return this.getStringAttribute('management_lif_ip');
  }
  public set managementLifIp(value: string) {
    this._managementLifIp = value;
  }
  public resetManagementLifIp() {
    this._managementLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifIpInput() {
    return this._managementLifIp;
  }

  // nfs_mount_options - computed: false, optional: true, required: false
  private _nfsMountOptions?: string; 
  public get nfsMountOptions() {
    return this.getStringAttribute('nfs_mount_options');
  }
  public set nfsMountOptions(value: string) {
    this._nfsMountOptions = value;
  }
  public resetNfsMountOptions() {
    this._nfsMountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsMountOptionsInput() {
    return this._nfsMountOptions;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_driver_name - computed: false, optional: false, required: true
  private _storageDriverName?: string; 
  public get storageDriverName() {
    return this.getStringAttribute('storage_driver_name');
  }
  public set storageDriverName(value: string) {
    this._storageDriverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDriverNameInput() {
    return this._storageDriverName;
  }

  // storage_prefix - computed: false, optional: true, required: false
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  public resetStoragePrefix() {
    this._storagePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // svm - computed: false, optional: true, required: false
  private _svm?: string; 
  public get svm() {
    return this.getStringAttribute('svm');
  }
  public set svm(value: string) {
    this._svm = value;
  }
  public resetSvm() {
    this._svm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm;
  }

  // trusted_ca_certificate - computed: false, optional: true, required: false
  private _trustedCaCertificate?: string; 
  public get trustedCaCertificate() {
    return this.getStringAttribute('trusted_ca_certificate');
  }
  public set trustedCaCertificate(value: string) {
    this._trustedCaCertificate = value;
  }
  public resetTrustedCaCertificate() {
    this._trustedCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaCertificateInput() {
    return this._trustedCaCertificate;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // auto_export_cidrs - computed: false, optional: true, required: false
  private _autoExportCidrs = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference(this, "auto_export_cidrs");
  public get autoExportCidrs() {
    return this._autoExportCidrs;
  }
  public putAutoExportCidrs(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs) {
    this._autoExportCidrs.internalValue = value;
  }
  public resetAutoExportCidrs() {
    this._autoExportCidrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportCidrsInput() {
    return this._autoExportCidrs.internalValue;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#adaptive_qos_policy VoltstackSite#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#encryption VoltstackSite#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#export_policy VoltstackSite#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_qos VoltstackSite#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#qos_policy VoltstackSite#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#security_style VoltstackSite#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_dir VoltstackSite#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_policy VoltstackSite#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_reserve VoltstackSite#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#space_reserve VoltstackSite#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#split_on_clone VoltstackSite#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tiering_policy VoltstackSite#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#unix_permissions VoltstackSite#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#zone VoltstackSite#zone}
  */
  readonly zone?: string;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#volume_defaults VoltstackSite#volume_defaults}
  */
  readonly volumeDefaults?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    zone: cdktf.stringToTerraform(struct!.zone),
    volume_defaults: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_defaults: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._zone = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._zone = value.zone;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#chap_target_username VoltstackSite#chap_target_username}
  */
  readonly chapTargetUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#chap_username VoltstackSite#chap_username}
  */
  readonly chapUsername?: string;
  /**
  * chap_initiator_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#chap_initiator_secret VoltstackSite#chap_initiator_secret}
  */
  readonly chapInitiatorSecret?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret;
  /**
  * chap_target_initiator_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#chap_target_initiator_secret VoltstackSite#chap_target_initiator_secret}
  */
  readonly chapTargetInitiatorSecret?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_target_username: cdktf.stringToTerraform(struct!.chapTargetUsername),
    chap_username: cdktf.stringToTerraform(struct!.chapUsername),
    chap_initiator_secret: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToTerraform(struct!.chapInitiatorSecret),
    chap_target_initiator_secret: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToTerraform(struct!.chapTargetInitiatorSecret),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_target_username: {
      value: cdktf.stringToHclTerraform(struct!.chapTargetUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_username: {
      value: cdktf.stringToHclTerraform(struct!.chapUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_initiator_secret: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToHclTerraform(struct!.chapInitiatorSecret),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretList",
    },
    chap_target_initiator_secret: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToHclTerraform(struct!.chapTargetInitiatorSecret),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapTargetUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapTargetUsername = this._chapTargetUsername;
    }
    if (this._chapUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapUsername = this._chapUsername;
    }
    if (this._chapInitiatorSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapInitiatorSecret = this._chapInitiatorSecret?.internalValue;
    }
    if (this._chapTargetInitiatorSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapTargetInitiatorSecret = this._chapTargetInitiatorSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chapTargetUsername = undefined;
      this._chapUsername = undefined;
      this._chapInitiatorSecret.internalValue = undefined;
      this._chapTargetInitiatorSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chapTargetUsername = value.chapTargetUsername;
      this._chapUsername = value.chapUsername;
      this._chapInitiatorSecret.internalValue = value.chapInitiatorSecret;
      this._chapTargetInitiatorSecret.internalValue = value.chapTargetInitiatorSecret;
    }
  }

  // chap_target_username - computed: false, optional: true, required: false
  private _chapTargetUsername?: string; 
  public get chapTargetUsername() {
    return this.getStringAttribute('chap_target_username');
  }
  public set chapTargetUsername(value: string) {
    this._chapTargetUsername = value;
  }
  public resetChapTargetUsername() {
    this._chapTargetUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapTargetUsernameInput() {
    return this._chapTargetUsername;
  }

  // chap_username - computed: false, optional: true, required: false
  private _chapUsername?: string; 
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }
  public set chapUsername(value: string) {
    this._chapUsername = value;
  }
  public resetChapUsername() {
    this._chapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapUsernameInput() {
    return this._chapUsername;
  }

  // chap_initiator_secret - computed: false, optional: true, required: false
  private _chapInitiatorSecret = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference(this, "chap_initiator_secret");
  public get chapInitiatorSecret() {
    return this._chapInitiatorSecret;
  }
  public putChapInitiatorSecret(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret) {
    this._chapInitiatorSecret.internalValue = value;
  }
  public resetChapInitiatorSecret() {
    this._chapInitiatorSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapInitiatorSecretInput() {
    return this._chapInitiatorSecret.internalValue;
  }

  // chap_target_initiator_secret - computed: false, optional: true, required: false
  private _chapTargetInitiatorSecret = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference(this, "chap_target_initiator_secret");
  public get chapTargetInitiatorSecret() {
    return this._chapTargetInitiatorSecret;
  }
  public putChapTargetInitiatorSecret(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret) {
    this._chapTargetInitiatorSecret.internalValue = value;
  }
  public resetChapTargetInitiatorSecret() {
    this._chapTargetInitiatorSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapTargetInitiatorSecretInput() {
    return this._chapTargetInitiatorSecret.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#adaptive_qos_policy VoltstackSite#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#encryption VoltstackSite#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#export_policy VoltstackSite#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_qos VoltstackSite#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#qos_policy VoltstackSite#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#security_style VoltstackSite#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_dir VoltstackSite#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_policy VoltstackSite#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#snapshot_reserve VoltstackSite#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#space_reserve VoltstackSite#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#split_on_clone VoltstackSite#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#tiering_policy VoltstackSite#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#unix_permissions VoltstackSite#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#client_certificate VoltstackSite#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#data_lif_dns_name VoltstackSite#data_lif_dns_name}
  */
  readonly dataLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#data_lif_ip VoltstackSite#data_lif_ip}
  */
  readonly dataLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#igroup_name VoltstackSite#igroup_name}
  */
  readonly igroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_aggregate_usage VoltstackSite#limit_aggregate_usage}
  */
  readonly limitAggregateUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#limit_volume_size VoltstackSite#limit_volume_size}
  */
  readonly limitVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#management_lif_dns_name VoltstackSite#management_lif_dns_name}
  */
  readonly managementLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#management_lif_ip VoltstackSite#management_lif_ip}
  */
  readonly managementLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#no_chap VoltstackSite#no_chap}
  */
  readonly noChap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#region VoltstackSite#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_driver_name VoltstackSite#storage_driver_name}
  */
  readonly storageDriverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_prefix VoltstackSite#storage_prefix}
  */
  readonly storagePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#svm VoltstackSite#svm}
  */
  readonly svm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#trusted_ca_certificate VoltstackSite#trusted_ca_certificate}
  */
  readonly trustedCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#username VoltstackSite#username}
  */
  readonly username: string;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#client_private_key VoltstackSite#client_private_key}
  */
  readonly clientPrivateKey?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#password VoltstackSite#password}
  */
  readonly password?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage VoltstackSite#storage}
  */
  readonly storage?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable;
  /**
  * use_chap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#use_chap VoltstackSite#use_chap}
  */
  readonly useChap?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#volume_defaults VoltstackSite#volume_defaults}
  */
  readonly volumeDefaults?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    data_lif_dns_name: cdktf.stringToTerraform(struct!.dataLifDnsName),
    data_lif_ip: cdktf.stringToTerraform(struct!.dataLifIp),
    igroup_name: cdktf.stringToTerraform(struct!.igroupName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    limit_aggregate_usage: cdktf.numberToTerraform(struct!.limitAggregateUsage),
    limit_volume_size: cdktf.numberToTerraform(struct!.limitVolumeSize),
    management_lif_dns_name: cdktf.stringToTerraform(struct!.managementLifDnsName),
    management_lif_ip: cdktf.stringToTerraform(struct!.managementLifIp),
    no_chap: cdktf.booleanToTerraform(struct!.noChap),
    region: cdktf.stringToTerraform(struct!.region),
    storage_driver_name: cdktf.stringToTerraform(struct!.storageDriverName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    svm: cdktf.stringToTerraform(struct!.svm),
    trusted_ca_certificate: cdktf.stringToTerraform(struct!.trustedCaCertificate),
    username: cdktf.stringToTerraform(struct!.username),
    client_private_key: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    password: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToTerraform(struct!.password),
    storage: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToTerraform, true)(struct!.storage),
    use_chap: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToTerraform(struct!.useChap),
    volume_defaults: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dataLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igroup_name: {
      value: cdktf.stringToHclTerraform(struct!.igroupName),
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
    limit_aggregate_usage: {
      value: cdktf.numberToHclTerraform(struct!.limitAggregateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.limitVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.managementLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_chap: {
      value: cdktf.booleanToHclTerraform(struct!.noChap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_driver_name: {
      value: cdktf.stringToHclTerraform(struct!.storageDriverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm: {
      value: cdktf.stringToHclTerraform(struct!.svm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_private_key: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyList",
    },
    password: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordList",
    },
    storage: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList",
    },
    use_chap: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToHclTerraform(struct!.useChap),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapList",
    },
    volume_defaults: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._dataLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifDnsName = this._dataLifDnsName;
    }
    if (this._dataLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifIp = this._dataLifIp;
    }
    if (this._igroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.igroupName = this._igroupName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._limitAggregateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitAggregateUsage = this._limitAggregateUsage;
    }
    if (this._limitVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitVolumeSize = this._limitVolumeSize;
    }
    if (this._managementLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifDnsName = this._managementLifDnsName;
    }
    if (this._managementLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifIp = this._managementLifIp;
    }
    if (this._noChap !== undefined) {
      hasAnyValues = true;
      internalValueResult.noChap = this._noChap;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDriverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDriverName = this._storageDriverName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._svm !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm;
    }
    if (this._trustedCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaCertificate = this._trustedCaCertificate;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._useChap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChap = this._useChap?.internalValue;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificate = undefined;
      this._dataLifDnsName = undefined;
      this._dataLifIp = undefined;
      this._igroupName = undefined;
      this._labels = undefined;
      this._limitAggregateUsage = undefined;
      this._limitVolumeSize = undefined;
      this._managementLifDnsName = undefined;
      this._managementLifIp = undefined;
      this._noChap = undefined;
      this._region = undefined;
      this._storageDriverName = undefined;
      this._storagePrefix = undefined;
      this._svm = undefined;
      this._trustedCaCertificate = undefined;
      this._username = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._password.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._useChap.internalValue = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificate = value.clientCertificate;
      this._dataLifDnsName = value.dataLifDnsName;
      this._dataLifIp = value.dataLifIp;
      this._igroupName = value.igroupName;
      this._labels = value.labels;
      this._limitAggregateUsage = value.limitAggregateUsage;
      this._limitVolumeSize = value.limitVolumeSize;
      this._managementLifDnsName = value.managementLifDnsName;
      this._managementLifIp = value.managementLifIp;
      this._noChap = value.noChap;
      this._region = value.region;
      this._storageDriverName = value.storageDriverName;
      this._storagePrefix = value.storagePrefix;
      this._svm = value.svm;
      this._trustedCaCertificate = value.trustedCaCertificate;
      this._username = value.username;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._password.internalValue = value.password;
      this._storage.internalValue = value.storage;
      this._useChap.internalValue = value.useChap;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // data_lif_dns_name - computed: false, optional: true, required: false
  private _dataLifDnsName?: string; 
  public get dataLifDnsName() {
    return this.getStringAttribute('data_lif_dns_name');
  }
  public set dataLifDnsName(value: string) {
    this._dataLifDnsName = value;
  }
  public resetDataLifDnsName() {
    this._dataLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifDnsNameInput() {
    return this._dataLifDnsName;
  }

  // data_lif_ip - computed: false, optional: true, required: false
  private _dataLifIp?: string; 
  public get dataLifIp() {
    return this.getStringAttribute('data_lif_ip');
  }
  public set dataLifIp(value: string) {
    this._dataLifIp = value;
  }
  public resetDataLifIp() {
    this._dataLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifIpInput() {
    return this._dataLifIp;
  }

  // igroup_name - computed: false, optional: true, required: false
  private _igroupName?: string; 
  public get igroupName() {
    return this.getStringAttribute('igroup_name');
  }
  public set igroupName(value: string) {
    this._igroupName = value;
  }
  public resetIgroupName() {
    this._igroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupNameInput() {
    return this._igroupName;
  }

  // labels - computed: false, optional: true, required: false
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

  // limit_aggregate_usage - computed: false, optional: true, required: false
  private _limitAggregateUsage?: number; 
  public get limitAggregateUsage() {
    return this.getNumberAttribute('limit_aggregate_usage');
  }
  public set limitAggregateUsage(value: number) {
    this._limitAggregateUsage = value;
  }
  public resetLimitAggregateUsage() {
    this._limitAggregateUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAggregateUsageInput() {
    return this._limitAggregateUsage;
  }

  // limit_volume_size - computed: false, optional: true, required: false
  private _limitVolumeSize?: number; 
  public get limitVolumeSize() {
    return this.getNumberAttribute('limit_volume_size');
  }
  public set limitVolumeSize(value: number) {
    this._limitVolumeSize = value;
  }
  public resetLimitVolumeSize() {
    this._limitVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVolumeSizeInput() {
    return this._limitVolumeSize;
  }

  // management_lif_dns_name - computed: false, optional: true, required: false
  private _managementLifDnsName?: string; 
  public get managementLifDnsName() {
    return this.getStringAttribute('management_lif_dns_name');
  }
  public set managementLifDnsName(value: string) {
    this._managementLifDnsName = value;
  }
  public resetManagementLifDnsName() {
    this._managementLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifDnsNameInput() {
    return this._managementLifDnsName;
  }

  // management_lif_ip - computed: false, optional: true, required: false
  private _managementLifIp?: string; 
  public get managementLifIp() {
    return this.getStringAttribute('management_lif_ip');
  }
  public set managementLifIp(value: string) {
    this._managementLifIp = value;
  }
  public resetManagementLifIp() {
    this._managementLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifIpInput() {
    return this._managementLifIp;
  }

  // no_chap - computed: false, optional: true, required: false
  private _noChap?: boolean | cdktf.IResolvable; 
  public get noChap() {
    return this.getBooleanAttribute('no_chap');
  }
  public set noChap(value: boolean | cdktf.IResolvable) {
    this._noChap = value;
  }
  public resetNoChap() {
    this._noChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChapInput() {
    return this._noChap;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_driver_name - computed: false, optional: false, required: true
  private _storageDriverName?: string; 
  public get storageDriverName() {
    return this.getStringAttribute('storage_driver_name');
  }
  public set storageDriverName(value: string) {
    this._storageDriverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDriverNameInput() {
    return this._storageDriverName;
  }

  // storage_prefix - computed: false, optional: true, required: false
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  public resetStoragePrefix() {
    this._storagePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // svm - computed: false, optional: true, required: false
  private _svm?: string; 
  public get svm() {
    return this.getStringAttribute('svm');
  }
  public set svm(value: string) {
    this._svm = value;
  }
  public resetSvm() {
    this._svm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm;
  }

  // trusted_ca_certificate - computed: false, optional: true, required: false
  private _trustedCaCertificate?: string; 
  public get trustedCaCertificate() {
    return this.getStringAttribute('trusted_ca_certificate');
  }
  public set trustedCaCertificate(value: string) {
    this._trustedCaCertificate = value;
  }
  public resetTrustedCaCertificate() {
    this._trustedCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaCertificateInput() {
    return this._trustedCaCertificate;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // use_chap - computed: false, optional: true, required: false
  private _useChap = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference(this, "use_chap");
  public get useChap() {
    return this._useChap;
  }
  public putUseChap(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap) {
    this._useChap.internalValue = value;
  }
  public resetUseChap() {
    this._useChap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap.internalValue;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident {
  /**
  * netapp_backend_ontap_nas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#netapp_backend_ontap_nas VoltstackSite#netapp_backend_ontap_nas}
  */
  readonly netappBackendOntapNas?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas;
  /**
  * netapp_backend_ontap_san block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#netapp_backend_ontap_san VoltstackSite#netapp_backend_ontap_san}
  */
  readonly netappBackendOntapSan?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    netapp_backend_ontap_nas: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToTerraform(struct!.netappBackendOntapNas),
    netapp_backend_ontap_san: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToTerraform(struct!.netappBackendOntapSan),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    netapp_backend_ontap_nas: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToHclTerraform(struct!.netappBackendOntapNas),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasList",
    },
    netapp_backend_ontap_san: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToHclTerraform(struct!.netappBackendOntapSan),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netappBackendOntapNas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappBackendOntapNas = this._netappBackendOntapNas?.internalValue;
    }
    if (this._netappBackendOntapSan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappBackendOntapSan = this._netappBackendOntapSan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._netappBackendOntapNas.internalValue = undefined;
      this._netappBackendOntapSan.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._netappBackendOntapNas.internalValue = value.netappBackendOntapNas;
      this._netappBackendOntapSan.internalValue = value.netappBackendOntapSan;
    }
  }

  // netapp_backend_ontap_nas - computed: false, optional: true, required: false
  private _netappBackendOntapNas = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference(this, "netapp_backend_ontap_nas");
  public get netappBackendOntapNas() {
    return this._netappBackendOntapNas;
  }
  public putNetappBackendOntapNas(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas) {
    this._netappBackendOntapNas.internalValue = value;
  }
  public resetNetappBackendOntapNas() {
    this._netappBackendOntapNas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappBackendOntapNasInput() {
    return this._netappBackendOntapNas.internalValue;
  }

  // netapp_backend_ontap_san - computed: false, optional: true, required: false
  private _netappBackendOntapSan = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference(this, "netapp_backend_ontap_san");
  public get netappBackendOntapSan() {
    return this._netappBackendOntapSan;
  }
  public putNetappBackendOntapSan(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan) {
    this._netappBackendOntapSan.internalValue = value;
  }
  public resetNetappBackendOntapSan() {
    this._netappBackendOntapSan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappBackendOntapSanInput() {
    return this._netappBackendOntapSan.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mgmt_dns_name VoltstackSite#mgmt_dns_name}
  */
  readonly mgmtDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mgmt_ip VoltstackSite#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#api_token VoltstackSite#api_token}
  */
  readonly apiToken?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mgmt_dns_name: cdktf.stringToTerraform(struct!.mgmtDnsName),
    mgmt_ip: cdktf.stringToTerraform(struct!.mgmtIp),
    api_token: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToTerraform(struct!.apiToken),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mgmt_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.mgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mgmtDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtDnsName = this._mgmtDnsName;
    }
    if (this._mgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtIp = this._mgmtIp;
    }
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._mgmtDnsName = undefined;
      this._mgmtIp = undefined;
      this._apiToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._mgmtDnsName = value.mgmtDnsName;
      this._mgmtIp = value.mgmtIp;
      this._apiToken.internalValue = value.apiToken;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // mgmt_dns_name - computed: false, optional: true, required: false
  private _mgmtDnsName?: string; 
  public get mgmtDnsName() {
    return this.getStringAttribute('mgmt_dns_name');
  }
  public set mgmtDnsName(value: string) {
    this._mgmtDnsName = value;
  }
  public resetMgmtDnsName() {
    this._mgmtDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtDnsNameInput() {
    return this._mgmtDnsName;
  }

  // mgmt_ip - computed: false, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_fs_opt VoltstackSite#default_fs_opt}
  */
  readonly defaultFsOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_fs_type VoltstackSite#default_fs_type}
  */
  readonly defaultFsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#default_mount_opts VoltstackSite#default_mount_opts}
  */
  readonly defaultMountOpts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#disable_preempt_attachments VoltstackSite#disable_preempt_attachments}
  */
  readonly disablePreemptAttachments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#iscsi_login_timeout VoltstackSite#iscsi_login_timeout}
  */
  readonly iscsiLoginTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#san_type VoltstackSite#san_type}
  */
  readonly sanType: string;
  /**
  * flash_arrays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#flash_arrays VoltstackSite#flash_arrays}
  */
  readonly flashArrays: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_fs_opt: cdktf.stringToTerraform(struct!.defaultFsOpt),
    default_fs_type: cdktf.stringToTerraform(struct!.defaultFsType),
    default_mount_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultMountOpts),
    disable_preempt_attachments: cdktf.booleanToTerraform(struct!.disablePreemptAttachments),
    iscsi_login_timeout: cdktf.numberToTerraform(struct!.iscsiLoginTimeout),
    san_type: cdktf.stringToTerraform(struct!.sanType),
    flash_arrays: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToTerraform, true)(struct!.flashArrays),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_fs_opt: {
      value: cdktf.stringToHclTerraform(struct!.defaultFsOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_fs_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultFsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_mount_opts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultMountOpts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_preempt_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.disablePreemptAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iscsi_login_timeout: {
      value: cdktf.numberToHclTerraform(struct!.iscsiLoginTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    san_type: {
      value: cdktf.stringToHclTerraform(struct!.sanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flash_arrays: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToHclTerraform, true)(struct!.flashArrays),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultFsOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFsOpt = this._defaultFsOpt;
    }
    if (this._defaultFsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFsType = this._defaultFsType;
    }
    if (this._defaultMountOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMountOpts = this._defaultMountOpts;
    }
    if (this._disablePreemptAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePreemptAttachments = this._disablePreemptAttachments;
    }
    if (this._iscsiLoginTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiLoginTimeout = this._iscsiLoginTimeout;
    }
    if (this._sanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanType = this._sanType;
    }
    if (this._flashArrays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashArrays = this._flashArrays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultFsOpt = undefined;
      this._defaultFsType = undefined;
      this._defaultMountOpts = undefined;
      this._disablePreemptAttachments = undefined;
      this._iscsiLoginTimeout = undefined;
      this._sanType = undefined;
      this._flashArrays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultFsOpt = value.defaultFsOpt;
      this._defaultFsType = value.defaultFsType;
      this._defaultMountOpts = value.defaultMountOpts;
      this._disablePreemptAttachments = value.disablePreemptAttachments;
      this._iscsiLoginTimeout = value.iscsiLoginTimeout;
      this._sanType = value.sanType;
      this._flashArrays.internalValue = value.flashArrays;
    }
  }

  // default_fs_opt - computed: false, optional: true, required: false
  private _defaultFsOpt?: string; 
  public get defaultFsOpt() {
    return this.getStringAttribute('default_fs_opt');
  }
  public set defaultFsOpt(value: string) {
    this._defaultFsOpt = value;
  }
  public resetDefaultFsOpt() {
    this._defaultFsOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFsOptInput() {
    return this._defaultFsOpt;
  }

  // default_fs_type - computed: false, optional: false, required: true
  private _defaultFsType?: string; 
  public get defaultFsType() {
    return this.getStringAttribute('default_fs_type');
  }
  public set defaultFsType(value: string) {
    this._defaultFsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFsTypeInput() {
    return this._defaultFsType;
  }

  // default_mount_opts - computed: false, optional: true, required: false
  private _defaultMountOpts?: string[]; 
  public get defaultMountOpts() {
    return this.getListAttribute('default_mount_opts');
  }
  public set defaultMountOpts(value: string[]) {
    this._defaultMountOpts = value;
  }
  public resetDefaultMountOpts() {
    this._defaultMountOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMountOptsInput() {
    return this._defaultMountOpts;
  }

  // disable_preempt_attachments - computed: false, optional: true, required: false
  private _disablePreemptAttachments?: boolean | cdktf.IResolvable; 
  public get disablePreemptAttachments() {
    return this.getBooleanAttribute('disable_preempt_attachments');
  }
  public set disablePreemptAttachments(value: boolean | cdktf.IResolvable) {
    this._disablePreemptAttachments = value;
  }
  public resetDisablePreemptAttachments() {
    this._disablePreemptAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePreemptAttachmentsInput() {
    return this._disablePreemptAttachments;
  }

  // iscsi_login_timeout - computed: false, optional: false, required: true
  private _iscsiLoginTimeout?: number; 
  public get iscsiLoginTimeout() {
    return this.getNumberAttribute('iscsi_login_timeout');
  }
  public set iscsiLoginTimeout(value: number) {
    this._iscsiLoginTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiLoginTimeoutInput() {
    return this._iscsiLoginTimeout;
  }

  // san_type - computed: false, optional: false, required: true
  private _sanType?: string; 
  public get sanType() {
    return this.getStringAttribute('san_type');
  }
  public set sanType(value: string) {
    this._sanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sanTypeInput() {
    return this._sanType;
  }

  // flash_arrays - computed: false, optional: false, required: true
  private _flashArrays = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList(this, "flash_arrays", false);
  public get flashArrays() {
    return this._flashArrays;
  }
  public putFlashArrays(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable) {
    this._flashArrays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flashArraysInput() {
    return this._flashArrays.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#decryption_provider VoltstackSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#location VoltstackSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#store_provider VoltstackSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#provider VoltstackSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#url VoltstackSite#url}
  */
  readonly url: string;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#blindfold_secret_info VoltstackSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#clear_secret_info VoltstackSite#clear_secret_info}
  */
  readonly clearSecretInfo?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#lables VoltstackSite#lables}
  */
  readonly lables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mgmt_dns_name VoltstackSite#mgmt_dns_name}
  */
  readonly mgmtDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#mgmt_ip VoltstackSite#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#nfs_endpoint_dns_name VoltstackSite#nfs_endpoint_dns_name}
  */
  readonly nfsEndpointDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#nfs_endpoint_ip VoltstackSite#nfs_endpoint_ip}
  */
  readonly nfsEndpointIp?: string;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#api_token VoltstackSite#api_token}
  */
  readonly apiToken?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lables),
    mgmt_dns_name: cdktf.stringToTerraform(struct!.mgmtDnsName),
    mgmt_ip: cdktf.stringToTerraform(struct!.mgmtIp),
    nfs_endpoint_dns_name: cdktf.stringToTerraform(struct!.nfsEndpointDnsName),
    nfs_endpoint_ip: cdktf.stringToTerraform(struct!.nfsEndpointIp),
    api_token: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToTerraform(struct!.apiToken),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mgmt_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.mgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_endpoint_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.nfsEndpointDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.nfsEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lables !== undefined) {
      hasAnyValues = true;
      internalValueResult.lables = this._lables;
    }
    if (this._mgmtDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtDnsName = this._mgmtDnsName;
    }
    if (this._mgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtIp = this._mgmtIp;
    }
    if (this._nfsEndpointDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsEndpointDnsName = this._nfsEndpointDnsName;
    }
    if (this._nfsEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsEndpointIp = this._nfsEndpointIp;
    }
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lables = undefined;
      this._mgmtDnsName = undefined;
      this._mgmtIp = undefined;
      this._nfsEndpointDnsName = undefined;
      this._nfsEndpointIp = undefined;
      this._apiToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lables = value.lables;
      this._mgmtDnsName = value.mgmtDnsName;
      this._mgmtIp = value.mgmtIp;
      this._nfsEndpointDnsName = value.nfsEndpointDnsName;
      this._nfsEndpointIp = value.nfsEndpointIp;
      this._apiToken.internalValue = value.apiToken;
    }
  }

  // lables - computed: false, optional: true, required: false
  private _lables?: { [key: string]: string }; 
  public get lables() {
    return this.getStringMapAttribute('lables');
  }
  public set lables(value: { [key: string]: string }) {
    this._lables = value;
  }
  public resetLables() {
    this._lables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lablesInput() {
    return this._lables;
  }

  // mgmt_dns_name - computed: false, optional: true, required: false
  private _mgmtDnsName?: string; 
  public get mgmtDnsName() {
    return this.getStringAttribute('mgmt_dns_name');
  }
  public set mgmtDnsName(value: string) {
    this._mgmtDnsName = value;
  }
  public resetMgmtDnsName() {
    this._mgmtDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtDnsNameInput() {
    return this._mgmtDnsName;
  }

  // mgmt_ip - computed: false, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // nfs_endpoint_dns_name - computed: false, optional: true, required: false
  private _nfsEndpointDnsName?: string; 
  public get nfsEndpointDnsName() {
    return this.getStringAttribute('nfs_endpoint_dns_name');
  }
  public set nfsEndpointDnsName(value: string) {
    this._nfsEndpointDnsName = value;
  }
  public resetNfsEndpointDnsName() {
    this._nfsEndpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsEndpointDnsNameInput() {
    return this._nfsEndpointDnsName;
  }

  // nfs_endpoint_ip - computed: false, optional: true, required: false
  private _nfsEndpointIp?: string; 
  public get nfsEndpointIp() {
    return this.getStringAttribute('nfs_endpoint_ip');
  }
  public set nfsEndpointIp(value: string) {
    this._nfsEndpointIp = value;
  }
  public resetNfsEndpointIp() {
    this._nfsEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsEndpointIpInput() {
    return this._nfsEndpointIp;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#enable_snapshot_directory VoltstackSite#enable_snapshot_directory}
  */
  readonly enableSnapshotDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#export_rules VoltstackSite#export_rules}
  */
  readonly exportRules?: string;
  /**
  * flash_blades block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#flash_blades VoltstackSite#flash_blades}
  */
  readonly flashBlades: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_snapshot_directory: cdktf.booleanToTerraform(struct!.enableSnapshotDirectory),
    export_rules: cdktf.stringToTerraform(struct!.exportRules),
    flash_blades: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToTerraform, true)(struct!.flashBlades),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_snapshot_directory: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnapshotDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.stringToHclTerraform(struct!.exportRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flash_blades: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToHclTerraform, true)(struct!.flashBlades),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSnapshotDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnapshotDirectory = this._enableSnapshotDirectory;
    }
    if (this._exportRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRules = this._exportRules;
    }
    if (this._flashBlades?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashBlades = this._flashBlades?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSnapshotDirectory = undefined;
      this._exportRules = undefined;
      this._flashBlades.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSnapshotDirectory = value.enableSnapshotDirectory;
      this._exportRules = value.exportRules;
      this._flashBlades.internalValue = value.flashBlades;
    }
  }

  // enable_snapshot_directory - computed: false, optional: true, required: false
  private _enableSnapshotDirectory?: boolean | cdktf.IResolvable; 
  public get enableSnapshotDirectory() {
    return this.getBooleanAttribute('enable_snapshot_directory');
  }
  public set enableSnapshotDirectory(value: boolean | cdktf.IResolvable) {
    this._enableSnapshotDirectory = value;
  }
  public resetEnableSnapshotDirectory() {
    this._enableSnapshotDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotDirectoryInput() {
    return this._enableSnapshotDirectory;
  }

  // export_rules - computed: false, optional: true, required: false
  private _exportRules?: string; 
  public get exportRules() {
    return this.getStringAttribute('export_rules');
  }
  public set exportRules(value: string) {
    this._exportRules = value;
  }
  public resetExportRules() {
    this._exportRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules;
  }

  // flash_blades - computed: false, optional: false, required: true
  private _flashBlades = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList(this, "flash_blades", false);
  public get flashBlades() {
    return this._flashBlades;
  }
  public putFlashBlades(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable) {
    this._flashBlades.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flashBladesInput() {
    return this._flashBlades.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays {
  /**
  * flash_array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#flash_array VoltstackSite#flash_array}
  */
  readonly flashArray?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray;
  /**
  * flash_blade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#flash_blade VoltstackSite#flash_blade}
  */
  readonly flashBlade?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_array: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToTerraform(struct!.flashArray),
    flash_blade: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToTerraform(struct!.flashBlade),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_array: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToHclTerraform(struct!.flashArray),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayList",
    },
    flash_blade: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToHclTerraform(struct!.flashBlade),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flashArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashArray = this._flashArray?.internalValue;
    }
    if (this._flashBlade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashBlade = this._flashBlade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flashArray.internalValue = undefined;
      this._flashBlade.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flashArray.internalValue = value.flashArray;
      this._flashBlade.internalValue = value.flashBlade;
    }
  }

  // flash_array - computed: false, optional: true, required: false
  private _flashArray = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference(this, "flash_array");
  public get flashArray() {
    return this._flashArray;
  }
  public putFlashArray(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray) {
    this._flashArray.internalValue = value;
  }
  public resetFlashArray() {
    this._flashArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashArrayInput() {
    return this._flashArray.internalValue;
  }

  // flash_blade - computed: false, optional: true, required: false
  private _flashBlade = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference(this, "flash_blade");
  public get flashBlade() {
    return this._flashBlade;
  }
  public putFlashBlade(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade) {
    this._flashBlade.internalValue = value;
  }
  public resetFlashBlade() {
    this._flashBlade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashBladeInput() {
    return this._flashBlade.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#cluster_id VoltstackSite#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#enable_storage_topology VoltstackSite#enable_storage_topology}
  */
  readonly enableStorageTopology?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#enable_strict_topology VoltstackSite#enable_strict_topology}
  */
  readonly enableStrictTopology?: boolean | cdktf.IResolvable;
  /**
  * arrays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#arrays VoltstackSite#arrays}
  */
  readonly arrays: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    enable_storage_topology: cdktf.booleanToTerraform(struct!.enableStorageTopology),
    enable_strict_topology: cdktf.booleanToTerraform(struct!.enableStrictTopology),
    arrays: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToTerraform(struct!.arrays),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_storage_topology: {
      value: cdktf.booleanToHclTerraform(struct!.enableStorageTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_strict_topology: {
      value: cdktf.booleanToHclTerraform(struct!.enableStrictTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    arrays: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToHclTerraform(struct!.arrays),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._enableStorageTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStorageTopology = this._enableStorageTopology;
    }
    if (this._enableStrictTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStrictTopology = this._enableStrictTopology;
    }
    if (this._arrays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrays = this._arrays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._enableStorageTopology = undefined;
      this._enableStrictTopology = undefined;
      this._arrays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._enableStorageTopology = value.enableStorageTopology;
      this._enableStrictTopology = value.enableStrictTopology;
      this._arrays.internalValue = value.arrays;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enable_storage_topology - computed: false, optional: true, required: false
  private _enableStorageTopology?: boolean | cdktf.IResolvable; 
  public get enableStorageTopology() {
    return this.getBooleanAttribute('enable_storage_topology');
  }
  public set enableStorageTopology(value: boolean | cdktf.IResolvable) {
    this._enableStorageTopology = value;
  }
  public resetEnableStorageTopology() {
    this._enableStorageTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStorageTopologyInput() {
    return this._enableStorageTopology;
  }

  // enable_strict_topology - computed: false, optional: true, required: false
  private _enableStrictTopology?: boolean | cdktf.IResolvable; 
  public get enableStrictTopology() {
    return this.getBooleanAttribute('enable_strict_topology');
  }
  public set enableStrictTopology(value: boolean | cdktf.IResolvable) {
    this._enableStrictTopology = value;
  }
  public resetEnableStrictTopology() {
    this._enableStrictTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStrictTopologyInput() {
    return this._enableStrictTopology;
  }

  // arrays - computed: false, optional: false, required: true
  private _arrays = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference(this, "arrays");
  public get arrays() {
    return this._arrays;
  }
  public putArrays(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorArrays) {
    this._arrays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arraysInput() {
    return this._arrays.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#advanced_advanced_parameters VoltstackSite#advanced_advanced_parameters}
  */
  readonly advancedAdvancedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#custom_storage VoltstackSite#custom_storage}
  */
  readonly customStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_device VoltstackSite#storage_device}
  */
  readonly storageDevice: string;
  /**
  * hpe_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#hpe_storage VoltstackSite#hpe_storage}
  */
  readonly hpeStorage?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage;
  /**
  * netapp_trident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#netapp_trident VoltstackSite#netapp_trident}
  */
  readonly netappTrident?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident;
  /**
  * pure_service_orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#pure_service_orchestrator VoltstackSite#pure_service_orchestrator}
  */
  readonly pureServiceOrchestrator?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_advanced_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.advancedAdvancedParameters),
    custom_storage: cdktf.booleanToTerraform(struct!.customStorage),
    storage_device: cdktf.stringToTerraform(struct!.storageDevice),
    hpe_storage: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageToTerraform(struct!.hpeStorage),
    netapp_trident: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentToTerraform(struct!.netappTrident),
    pure_service_orchestrator: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorToTerraform(struct!.pureServiceOrchestrator),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_advanced_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.advancedAdvancedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_storage: {
      value: cdktf.booleanToHclTerraform(struct!.customStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_device: {
      value: cdktf.stringToHclTerraform(struct!.storageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hpe_storage: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageToHclTerraform(struct!.hpeStorage),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageList",
    },
    netapp_trident: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentToHclTerraform(struct!.netappTrident),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentList",
    },
    pure_service_orchestrator: {
      value: voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorToHclTerraform(struct!.pureServiceOrchestrator),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedAdvancedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAdvancedParameters = this._advancedAdvancedParameters;
    }
    if (this._customStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStorage = this._customStorage;
    }
    if (this._storageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevice = this._storageDevice;
    }
    if (this._hpeStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpeStorage = this._hpeStorage?.internalValue;
    }
    if (this._netappTrident?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappTrident = this._netappTrident?.internalValue;
    }
    if (this._pureServiceOrchestrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pureServiceOrchestrator = this._pureServiceOrchestrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedAdvancedParameters = undefined;
      this._customStorage = undefined;
      this._storageDevice = undefined;
      this._hpeStorage.internalValue = undefined;
      this._netappTrident.internalValue = undefined;
      this._pureServiceOrchestrator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedAdvancedParameters = value.advancedAdvancedParameters;
      this._customStorage = value.customStorage;
      this._storageDevice = value.storageDevice;
      this._hpeStorage.internalValue = value.hpeStorage;
      this._netappTrident.internalValue = value.netappTrident;
      this._pureServiceOrchestrator.internalValue = value.pureServiceOrchestrator;
    }
  }

  // advanced_advanced_parameters - computed: false, optional: true, required: false
  private _advancedAdvancedParameters?: { [key: string]: string }; 
  public get advancedAdvancedParameters() {
    return this.getStringMapAttribute('advanced_advanced_parameters');
  }
  public set advancedAdvancedParameters(value: { [key: string]: string }) {
    this._advancedAdvancedParameters = value;
  }
  public resetAdvancedAdvancedParameters() {
    this._advancedAdvancedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAdvancedParametersInput() {
    return this._advancedAdvancedParameters;
  }

  // custom_storage - computed: false, optional: true, required: false
  private _customStorage?: boolean | cdktf.IResolvable; 
  public get customStorage() {
    return this.getBooleanAttribute('custom_storage');
  }
  public set customStorage(value: boolean | cdktf.IResolvable) {
    this._customStorage = value;
  }
  public resetCustomStorage() {
    this._customStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStorageInput() {
    return this._customStorage;
  }

  // storage_device - computed: false, optional: false, required: true
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // hpe_storage - computed: false, optional: true, required: false
  private _hpeStorage = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorageOutputReference(this, "hpe_storage");
  public get hpeStorage() {
    return this._hpeStorage;
  }
  public putHpeStorage(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesHpeStorage) {
    this._hpeStorage.internalValue = value;
  }
  public resetHpeStorage() {
    this._hpeStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpeStorageInput() {
    return this._hpeStorage.internalValue;
  }

  // netapp_trident - computed: false, optional: true, required: false
  private _netappTrident = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTridentOutputReference(this, "netapp_trident");
  public get netappTrident() {
    return this._netappTrident;
  }
  public putNetappTrident(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesNetappTrident) {
    this._netappTrident.internalValue = value;
  }
  public resetNetappTrident() {
    this._netappTrident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappTridentInput() {
    return this._netappTrident.internalValue;
  }

  // pure_service_orchestrator - computed: false, optional: true, required: false
  private _pureServiceOrchestrator = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference(this, "pure_service_orchestrator");
  public get pureServiceOrchestrator() {
    return this._pureServiceOrchestrator;
  }
  public putPureServiceOrchestrator(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesPureServiceOrchestrator) {
    this._pureServiceOrchestrator.internalValue = value;
  }
  public resetPureServiceOrchestrator() {
    this._pureServiceOrchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureServiceOrchestratorInput() {
    return this._pureServiceOrchestrator.internalValue;
  }
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VoltstackSiteCustomStorageConfigStorageDeviceListStruct {
  /**
  * storage_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#storage_devices VoltstackSite#storage_devices}
  */
  readonly storageDevices?: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices[] | cdktf.IResolvable;
}

export function voltstackSiteCustomStorageConfigStorageDeviceListStructToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStructOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_devices: cdktf.listMapper(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesToTerraform, true)(struct!.storageDevices),
  }
}


export function voltstackSiteCustomStorageConfigStorageDeviceListStructToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageDeviceListStructOutputReference | VoltstackSiteCustomStorageConfigStorageDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_devices: {
      value: cdktf.listMapperHcl(voltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesToHclTerraform, true)(struct!.storageDevices),
      isBlock: true,
      type: "list",
      storageClassType: "VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevices = this._storageDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageDevices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageDevices.internalValue = value.storageDevices;
    }
  }

  // storage_devices - computed: false, optional: true, required: false
  private _storageDevices = new VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevicesList(this, "storage_devices", false);
  public get storageDevices() {
    return this._storageDevices;
  }
  public putStorageDevices(value: VoltstackSiteCustomStorageConfigStorageDeviceListStorageDevices[] | cdktf.IResolvable) {
    this._storageDevices.internalValue = value;
  }
  public resetStorageDevices() {
    this._storageDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDevicesInput() {
    return this._storageDevices.internalValue;
  }
}
export interface VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#end_ip VoltstackSite#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/voltstack_site#start_ip VoltstackSite#start_ip}
  */
  readonly startIp?: string;
}

export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsToTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function voltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsOutputReference {
    return new VoltstackSiteCustomStorageConfigStorageInterfaceListStorageInterfacesStorageInterfaceDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
