// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigipInstanceSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#annotations BigipInstanceSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#description BigipInstanceSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#disable BigipInstanceSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#id BigipInstanceSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#labels BigipInstanceSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#name BigipInstanceSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#namespace BigipInstanceSite#namespace}
  */
  readonly namespace: string;
  /**
  * central_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#central_manager BigipInstanceSite#central_manager}
  */
  readonly centralManager: BigipInstanceSiteCentralManager;
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#node_list BigipInstanceSite#node_list}
  */
  readonly nodeList?: BigipInstanceSiteNodeListStruct[] | cdktf.IResolvable;
  /**
  * volterra_software block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#volterra_software BigipInstanceSite#volterra_software}
  */
  readonly volterraSoftware?: BigipInstanceSiteVolterraSoftware;
}
export interface BigipInstanceSiteCentralManagerCentralManagerSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#name BigipInstanceSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#namespace BigipInstanceSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#tenant BigipInstanceSite#tenant}
  */
  readonly tenant?: string;
}

export function bigipInstanceSiteCentralManagerCentralManagerSiteToTerraform(struct?: BigipInstanceSiteCentralManagerCentralManagerSite | cdktf.IResolvable): any {
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


export function bigipInstanceSiteCentralManagerCentralManagerSiteToHclTerraform(struct?: BigipInstanceSiteCentralManagerCentralManagerSite | cdktf.IResolvable): any {
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

export class BigipInstanceSiteCentralManagerCentralManagerSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigipInstanceSiteCentralManagerCentralManagerSite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigipInstanceSiteCentralManagerCentralManagerSite | cdktf.IResolvable | undefined) {
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

export class BigipInstanceSiteCentralManagerCentralManagerSiteList extends cdktf.ComplexList {
  public internalValue? : BigipInstanceSiteCentralManagerCentralManagerSite[] | cdktf.IResolvable

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
  public get(index: number): BigipInstanceSiteCentralManagerCentralManagerSiteOutputReference {
    return new BigipInstanceSiteCentralManagerCentralManagerSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigipInstanceSiteCentralManager {
  /**
  * central_manager_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#central_manager_site BigipInstanceSite#central_manager_site}
  */
  readonly centralManagerSite?: BigipInstanceSiteCentralManagerCentralManagerSite[] | cdktf.IResolvable;
}

export function bigipInstanceSiteCentralManagerToTerraform(struct?: BigipInstanceSiteCentralManagerOutputReference | BigipInstanceSiteCentralManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    central_manager_site: cdktf.listMapper(bigipInstanceSiteCentralManagerCentralManagerSiteToTerraform, true)(struct!.centralManagerSite),
  }
}


export function bigipInstanceSiteCentralManagerToHclTerraform(struct?: BigipInstanceSiteCentralManagerOutputReference | BigipInstanceSiteCentralManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    central_manager_site: {
      value: cdktf.listMapperHcl(bigipInstanceSiteCentralManagerCentralManagerSiteToHclTerraform, true)(struct!.centralManagerSite),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteCentralManagerCentralManagerSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteCentralManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteCentralManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._centralManagerSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralManagerSite = this._centralManagerSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteCentralManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centralManagerSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._centralManagerSite.internalValue = value.centralManagerSite;
    }
  }

  // central_manager_site - computed: false, optional: true, required: false
  private _centralManagerSite = new BigipInstanceSiteCentralManagerCentralManagerSiteList(this, "central_manager_site", false);
  public get centralManagerSite() {
    return this._centralManagerSite;
  }
  public putCentralManagerSite(value: BigipInstanceSiteCentralManagerCentralManagerSite[] | cdktf.IResolvable) {
    this._centralManagerSite.internalValue = value;
  }
  public resetCentralManagerSite() {
    this._centralManagerSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagerSiteInput() {
    return this._centralManagerSite.internalValue;
  }
}
export interface BigipInstanceSiteNodeListInterfaceListBondInterface {
}

export function bigipInstanceSiteNodeListInterfaceListBondInterfaceToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListBondInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListBondInterfaceToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListBondInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListDhcpServer {
}

export function bigipInstanceSiteNodeListInterfaceListDhcpServerToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListDhcpServerOutputReference | BigipInstanceSiteNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListDhcpServerToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListDhcpServerOutputReference | BigipInstanceSiteNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#device BigipInstanceSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#mac BigipInstanceSite#mac}
  */
  readonly mac?: string;
}

export function bigipInstanceSiteNodeListInterfaceListEthernetInterfaceToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListEthernetInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function bigipInstanceSiteNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListEthernetInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
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

  // mac - computed: false, optional: true, required: false
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
}
export interface BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig {
}

export function bigipInstanceSiteNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListIpv6AutoConfigOutputReference | BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListIpv6AutoConfigOutputReference | BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListMonitor {
}

export function bigipInstanceSiteNodeListInterfaceListMonitorToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListMonitorOutputReference | BigipInstanceSiteNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListMonitorToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListMonitorOutputReference | BigipInstanceSiteNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#name BigipInstanceSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#namespace BigipInstanceSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#tenant BigipInstanceSite#tenant}
  */
  readonly tenant?: string;
}

export function bigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function bigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface BigipInstanceSiteNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#site_local_inside_network BigipInstanceSite#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#site_local_network BigipInstanceSite#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#segment_network BigipInstanceSite#segment_network}
  */
  readonly segmentNetwork?: BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function bigipInstanceSiteNodeListInterfaceListNetworkOptionToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListNetworkOptionOutputReference | BigipInstanceSiteNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: bigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function bigipInstanceSiteNodeListInterfaceListNetworkOptionToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListNetworkOptionOutputReference | BigipInstanceSiteNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    segment_network: {
      value: bigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
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

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: BigipInstanceSiteNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface BigipInstanceSiteNodeListInterfaceListStaticIp {
}

export function bigipInstanceSiteNodeListInterfaceListStaticIpToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStaticIpOutputReference | BigipInstanceSiteNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListStaticIpToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStaticIpOutputReference | BigipInstanceSiteNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListStaticIpv6Address {
}

export function bigipInstanceSiteNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStaticIpv6AddressOutputReference | BigipInstanceSiteNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigipInstanceSiteNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStaticIpv6AddressOutputReference | BigipInstanceSiteNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigipInstanceSiteNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigipInstanceSiteNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#device BigipInstanceSite#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#vlan_id BigipInstanceSite#vlan_id}
  */
  readonly vlanId?: number;
}

export function bigipInstanceSiteNodeListInterfaceListVlanInterfaceToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListVlanInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function bigipInstanceSiteNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListVlanInterfaceOutputReference | BigipInstanceSiteNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
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
}
export interface BigipInstanceSiteNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#description BigipInstanceSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#dhcp_client BigipInstanceSite#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#labels BigipInstanceSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#monitor_disabled BigipInstanceSite#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#mtu BigipInstanceSite#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#name BigipInstanceSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#no_ipv4_address BigipInstanceSite#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#no_ipv6_address BigipInstanceSite#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#priority BigipInstanceSite#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#site_to_site_connectivity_interface_disabled BigipInstanceSite#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#site_to_site_connectivity_interface_enabled BigipInstanceSite#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#bond_interface BigipInstanceSite#bond_interface}
  */
  readonly bondInterface?: BigipInstanceSiteNodeListInterfaceListBondInterface;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#dhcp_server BigipInstanceSite#dhcp_server}
  */
  readonly dhcpServer?: BigipInstanceSiteNodeListInterfaceListDhcpServer;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#ethernet_interface BigipInstanceSite#ethernet_interface}
  */
  readonly ethernetInterface?: BigipInstanceSiteNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#ipv6_auto_config BigipInstanceSite#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#monitor BigipInstanceSite#monitor}
  */
  readonly monitor?: BigipInstanceSiteNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#network_option BigipInstanceSite#network_option}
  */
  readonly networkOption: BigipInstanceSiteNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#static_ip BigipInstanceSite#static_ip}
  */
  readonly staticIp?: BigipInstanceSiteNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#static_ipv6_address BigipInstanceSite#static_ipv6_address}
  */
  readonly staticIpv6Address?: BigipInstanceSiteNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#vlan_interface BigipInstanceSite#vlan_interface}
  */
  readonly vlanInterface?: BigipInstanceSiteNodeListInterfaceListVlanInterface;
}

export function bigipInstanceSiteNodeListInterfaceListStructToTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: bigipInstanceSiteNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    dhcp_server: bigipInstanceSiteNodeListInterfaceListDhcpServerToTerraform(struct!.dhcpServer),
    ethernet_interface: bigipInstanceSiteNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: bigipInstanceSiteNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: bigipInstanceSiteNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: bigipInstanceSiteNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: bigipInstanceSiteNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: bigipInstanceSiteNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: bigipInstanceSiteNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function bigipInstanceSiteNodeListInterfaceListStructToHclTerraform(struct?: BigipInstanceSiteNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
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
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: bigipInstanceSiteNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListBondInterfaceList",
    },
    dhcp_server: {
      value: bigipInstanceSiteNodeListInterfaceListDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListDhcpServerList",
    },
    ethernet_interface: {
      value: bigipInstanceSiteNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: bigipInstanceSiteNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: bigipInstanceSiteNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: bigipInstanceSiteNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: bigipInstanceSiteNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: bigipInstanceSiteNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: bigipInstanceSiteNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigipInstanceSiteNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._dhcpServer.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
    }
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
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

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new BigipInstanceSiteNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: BigipInstanceSiteNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new BigipInstanceSiteNodeListInterfaceListDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: BigipInstanceSiteNodeListInterfaceListDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new BigipInstanceSiteNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: BigipInstanceSiteNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new BigipInstanceSiteNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: BigipInstanceSiteNodeListInterfaceListIpv6AutoConfig) {
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
  private _monitor = new BigipInstanceSiteNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: BigipInstanceSiteNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new BigipInstanceSiteNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: BigipInstanceSiteNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new BigipInstanceSiteNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: BigipInstanceSiteNodeListInterfaceListStaticIp) {
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
  private _staticIpv6Address = new BigipInstanceSiteNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: BigipInstanceSiteNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new BigipInstanceSiteNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: BigipInstanceSiteNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class BigipInstanceSiteNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : BigipInstanceSiteNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): BigipInstanceSiteNodeListInterfaceListStructOutputReference {
    return new BigipInstanceSiteNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigipInstanceSiteNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#hostname BigipInstanceSite#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#public_ip BigipInstanceSite#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#type BigipInstanceSite#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#interface_list BigipInstanceSite#interface_list}
  */
  readonly interfaceList?: BigipInstanceSiteNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function bigipInstanceSiteNodeListStructToTerraform(struct?: BigipInstanceSiteNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(bigipInstanceSiteNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function bigipInstanceSiteNodeListStructToHclTerraform(struct?: BigipInstanceSiteNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
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
    interface_list: {
      value: cdktf.listMapperHcl(bigipInstanceSiteNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "BigipInstanceSiteNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigipInstanceSiteNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new BigipInstanceSiteNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: BigipInstanceSiteNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class BigipInstanceSiteNodeListStructList extends cdktf.ComplexList {
  public internalValue? : BigipInstanceSiteNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): BigipInstanceSiteNodeListStructOutputReference {
    return new BigipInstanceSiteNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigipInstanceSiteVolterraSoftware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#default_sw_version BigipInstanceSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#volterra_software_version BigipInstanceSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function bigipInstanceSiteVolterraSoftwareToTerraform(struct?: BigipInstanceSiteVolterraSoftwareOutputReference | BigipInstanceSiteVolterraSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function bigipInstanceSiteVolterraSoftwareToHclTerraform(struct?: BigipInstanceSiteVolterraSoftwareOutputReference | BigipInstanceSiteVolterraSoftware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipInstanceSiteVolterraSoftwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipInstanceSiteVolterraSoftware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipInstanceSiteVolterraSoftware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site volterra_bigip_instance_site}
*/
export class BigipInstanceSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_bigip_instance_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigipInstanceSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigipInstanceSite to import
  * @param importFromId The id of the existing BigipInstanceSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigipInstanceSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_bigip_instance_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/bigip_instance_site volterra_bigip_instance_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigipInstanceSiteConfig
  */
  public constructor(scope: Construct, id: string, config: BigipInstanceSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_bigip_instance_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._centralManager.internalValue = config.centralManager;
    this._nodeList.internalValue = config.nodeList;
    this._volterraSoftware.internalValue = config.volterraSoftware;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // central_manager - computed: false, optional: false, required: true
  private _centralManager = new BigipInstanceSiteCentralManagerOutputReference(this, "central_manager");
  public get centralManager() {
    return this._centralManager;
  }
  public putCentralManager(value: BigipInstanceSiteCentralManager) {
    this._centralManager.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagerInput() {
    return this._centralManager.internalValue;
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new BigipInstanceSiteNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: BigipInstanceSiteNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }

  // volterra_software - computed: false, optional: true, required: false
  private _volterraSoftware = new BigipInstanceSiteVolterraSoftwareOutputReference(this, "volterra_software");
  public get volterraSoftware() {
    return this._volterraSoftware;
  }
  public putVolterraSoftware(value: BigipInstanceSiteVolterraSoftware) {
    this._volterraSoftware.internalValue = value;
  }
  public resetVolterraSoftware() {
    this._volterraSoftware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareInput() {
    return this._volterraSoftware.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      central_manager: bigipInstanceSiteCentralManagerToTerraform(this._centralManager.internalValue),
      node_list: cdktf.listMapper(bigipInstanceSiteNodeListStructToTerraform, true)(this._nodeList.internalValue),
      volterra_software: bigipInstanceSiteVolterraSoftwareToTerraform(this._volterraSoftware.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_manager: {
        value: bigipInstanceSiteCentralManagerToHclTerraform(this._centralManager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipInstanceSiteCentralManagerList",
      },
      node_list: {
        value: cdktf.listMapperHcl(bigipInstanceSiteNodeListStructToHclTerraform, true)(this._nodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipInstanceSiteNodeListStructList",
      },
      volterra_software: {
        value: bigipInstanceSiteVolterraSoftwareToHclTerraform(this._volterraSoftware.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipInstanceSiteVolterraSoftwareList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
