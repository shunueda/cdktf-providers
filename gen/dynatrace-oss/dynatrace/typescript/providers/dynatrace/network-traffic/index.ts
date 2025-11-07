// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkTrafficConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#host_id NetworkTraffic#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#id NetworkTraffic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * exclude_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#exclude_ip NetworkTraffic#exclude_ip}
  */
  readonly excludeIp?: NetworkTrafficExcludeIp;
  /**
  * exclude_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#exclude_nic NetworkTraffic#exclude_nic}
  */
  readonly excludeNic?: NetworkTrafficExcludeNic;
}
export interface NetworkTrafficExcludeIpIpAddressForm {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#ip_address NetworkTraffic#ip_address}
  */
  readonly ipAddress: string;
}

export function networkTrafficExcludeIpIpAddressFormToTerraform(struct?: NetworkTrafficExcludeIpIpAddressForm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function networkTrafficExcludeIpIpAddressFormToHclTerraform(struct?: NetworkTrafficExcludeIpIpAddressForm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NetworkTrafficExcludeIpIpAddressFormOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkTrafficExcludeIpIpAddressForm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTrafficExcludeIpIpAddressForm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
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

export class NetworkTrafficExcludeIpIpAddressFormList extends cdktf.ComplexList {
  public internalValue? : NetworkTrafficExcludeIpIpAddressForm[] | cdktf.IResolvable

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
  public get(index: number): NetworkTrafficExcludeIpIpAddressFormOutputReference {
    return new NetworkTrafficExcludeIpIpAddressFormOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkTrafficExcludeIp {
  /**
  * ip_address_form block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#ip_address_form NetworkTraffic#ip_address_form}
  */
  readonly ipAddressForm: NetworkTrafficExcludeIpIpAddressForm[] | cdktf.IResolvable;
}

export function networkTrafficExcludeIpToTerraform(struct?: NetworkTrafficExcludeIpOutputReference | NetworkTrafficExcludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_form: cdktf.listMapper(networkTrafficExcludeIpIpAddressFormToTerraform, true)(struct!.ipAddressForm),
  }
}


export function networkTrafficExcludeIpToHclTerraform(struct?: NetworkTrafficExcludeIpOutputReference | NetworkTrafficExcludeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_form: {
      value: cdktf.listMapperHcl(networkTrafficExcludeIpIpAddressFormToHclTerraform, true)(struct!.ipAddressForm),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkTrafficExcludeIpIpAddressFormList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkTrafficExcludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkTrafficExcludeIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressForm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressForm = this._ipAddressForm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTrafficExcludeIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressForm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressForm.internalValue = value.ipAddressForm;
    }
  }

  // ip_address_form - computed: false, optional: false, required: true
  private _ipAddressForm = new NetworkTrafficExcludeIpIpAddressFormList(this, "ip_address_form", false);
  public get ipAddressForm() {
    return this._ipAddressForm;
  }
  public putIpAddressForm(value: NetworkTrafficExcludeIpIpAddressForm[] | cdktf.IResolvable) {
    this._ipAddressForm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFormInput() {
    return this._ipAddressForm.internalValue;
  }
}
export interface NetworkTrafficExcludeNicNicForm {
  /**
  * Network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#interface NetworkTraffic#interface}
  */
  readonly interface: string;
  /**
  * Possible Values: `OS_TYPE_AIX`, `OS_TYPE_DARWIN`, `OS_TYPE_HPUX`, `OS_TYPE_LINUX`, `OS_TYPE_SOLARIS`, `OS_TYPE_UNKNOWN`, `OS_TYPE_WINDOWS`, `OS_TYPE_ZOS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#os NetworkTraffic#os}
  */
  readonly os: string;
}

export function networkTrafficExcludeNicNicFormToTerraform(struct?: NetworkTrafficExcludeNicNicForm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    os: cdktf.stringToTerraform(struct!.os),
  }
}


export function networkTrafficExcludeNicNicFormToHclTerraform(struct?: NetworkTrafficExcludeNicNicForm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkTrafficExcludeNicNicFormOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkTrafficExcludeNicNicForm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTrafficExcludeNicNicForm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._os = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._os = value.os;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }
}

export class NetworkTrafficExcludeNicNicFormList extends cdktf.ComplexList {
  public internalValue? : NetworkTrafficExcludeNicNicForm[] | cdktf.IResolvable

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
  public get(index: number): NetworkTrafficExcludeNicNicFormOutputReference {
    return new NetworkTrafficExcludeNicNicFormOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkTrafficExcludeNic {
  /**
  * nic_form block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#nic_form NetworkTraffic#nic_form}
  */
  readonly nicForm: NetworkTrafficExcludeNicNicForm[] | cdktf.IResolvable;
}

export function networkTrafficExcludeNicToTerraform(struct?: NetworkTrafficExcludeNicOutputReference | NetworkTrafficExcludeNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nic_form: cdktf.listMapper(networkTrafficExcludeNicNicFormToTerraform, true)(struct!.nicForm),
  }
}


export function networkTrafficExcludeNicToHclTerraform(struct?: NetworkTrafficExcludeNicOutputReference | NetworkTrafficExcludeNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nic_form: {
      value: cdktf.listMapperHcl(networkTrafficExcludeNicNicFormToHclTerraform, true)(struct!.nicForm),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkTrafficExcludeNicNicFormList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkTrafficExcludeNicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkTrafficExcludeNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nicForm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicForm = this._nicForm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTrafficExcludeNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nicForm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nicForm.internalValue = value.nicForm;
    }
  }

  // nic_form - computed: false, optional: false, required: true
  private _nicForm = new NetworkTrafficExcludeNicNicFormList(this, "nic_form", false);
  public get nicForm() {
    return this._nicForm;
  }
  public putNicForm(value: NetworkTrafficExcludeNicNicForm[] | cdktf.IResolvable) {
    this._nicForm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicFormInput() {
    return this._nicForm.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic dynatrace_network_traffic}
*/
export class NetworkTraffic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_network_traffic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkTraffic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkTraffic to import
  * @param importFromId The id of the existing NetworkTraffic that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkTraffic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_network_traffic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_traffic dynatrace_network_traffic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkTrafficConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkTrafficConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_network_traffic',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostId = config.hostId;
    this._id = config.id;
    this._excludeIp.internalValue = config.excludeIp;
    this._excludeNic.internalValue = config.excludeNic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // exclude_ip - computed: false, optional: true, required: false
  private _excludeIp = new NetworkTrafficExcludeIpOutputReference(this, "exclude_ip");
  public get excludeIp() {
    return this._excludeIp;
  }
  public putExcludeIp(value: NetworkTrafficExcludeIp) {
    this._excludeIp.internalValue = value;
  }
  public resetExcludeIp() {
    this._excludeIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpInput() {
    return this._excludeIp.internalValue;
  }

  // exclude_nic - computed: false, optional: true, required: false
  private _excludeNic = new NetworkTrafficExcludeNicOutputReference(this, "exclude_nic");
  public get excludeNic() {
    return this._excludeNic;
  }
  public putExcludeNic(value: NetworkTrafficExcludeNic) {
    this._excludeNic.internalValue = value;
  }
  public resetExcludeNic() {
    this._excludeNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNicInput() {
    return this._excludeNic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      exclude_ip: networkTrafficExcludeIpToTerraform(this._excludeIp.internalValue),
      exclude_nic: networkTrafficExcludeNicToTerraform(this._excludeNic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      exclude_ip: {
        value: networkTrafficExcludeIpToHclTerraform(this._excludeIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkTrafficExcludeIpList",
      },
      exclude_nic: {
        value: networkTrafficExcludeNicToHclTerraform(this._excludeNic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkTrafficExcludeNicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
