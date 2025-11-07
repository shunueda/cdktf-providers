// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#interfaces Instance#interfaces}
  */
  readonly interfaces?: InstanceInterfaces[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#spec Instance#spec}
  */
  readonly spec: InstanceSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceAccessInfo {
}

export function instanceAccessInfoToTerraform(struct?: InstanceAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceAccessInfoToHclTerraform(struct?: InstanceAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceAccessInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceAccessInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceAccessInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface InstanceInterfaces {
}

export function instanceInterfacesToTerraform(struct?: InstanceInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceInterfacesToHclTerraform(struct?: InstanceInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vnet - computed: true, optional: false, required: false
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
}

export class InstanceInterfacesList extends cdktf.ComplexList {
  public internalValue? : InstanceInterfaces[] | cdktf.IResolvable

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
  public get(index: number): InstanceInterfacesOutputReference {
    return new InstanceInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#instance_group Instance#instance_group}
  */
  readonly instanceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#instance_type Instance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#machine_image Instance#machine_image}
  */
  readonly machineImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#quick_connect_enabled Instance#quick_connect_enabled}
  */
  readonly quickConnectEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#quick_connect_url Instance#quick_connect_url}
  */
  readonly quickConnectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#ssh_public_key_names Instance#ssh_public_key_names}
  */
  readonly sshPublicKeyNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
}

export function instanceSpecToTerraform(struct?: InstanceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_group: cdktf.stringToTerraform(struct!.instanceGroup),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    machine_image: cdktf.stringToTerraform(struct!.machineImage),
    quick_connect_enabled: cdktf.stringToTerraform(struct!.quickConnectEnabled),
    quick_connect_url: cdktf.stringToTerraform(struct!.quickConnectUrl),
    ssh_public_key_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeyNames),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function instanceSpecToHclTerraform(struct?: InstanceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_group: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_image: {
      value: cdktf.stringToHclTerraform(struct!.machineImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quick_connect_enabled: {
      value: cdktf.stringToHclTerraform(struct!.quickConnectEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quick_connect_url: {
      value: cdktf.stringToHclTerraform(struct!.quickConnectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroup = this._instanceGroup;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._machineImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineImage = this._machineImage;
    }
    if (this._quickConnectEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickConnectEnabled = this._quickConnectEnabled;
    }
    if (this._quickConnectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickConnectUrl = this._quickConnectUrl;
    }
    if (this._sshPublicKeyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeyNames = this._sshPublicKeyNames;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceGroup = undefined;
      this._instanceType = undefined;
      this._machineImage = undefined;
      this._quickConnectEnabled = undefined;
      this._quickConnectUrl = undefined;
      this._sshPublicKeyNames = undefined;
      this._userData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceGroup = value.instanceGroup;
      this._instanceType = value.instanceType;
      this._machineImage = value.machineImage;
      this._quickConnectEnabled = value.quickConnectEnabled;
      this._quickConnectUrl = value.quickConnectUrl;
      this._sshPublicKeyNames = value.sshPublicKeyNames;
      this._userData = value.userData;
    }
  }

  // instance_group - computed: false, optional: true, required: false
  private _instanceGroup?: string; 
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }
  public set instanceGroup(value: string) {
    this._instanceGroup = value;
  }
  public resetInstanceGroup() {
    this._instanceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // machine_image - computed: false, optional: false, required: true
  private _machineImage?: string; 
  public get machineImage() {
    return this.getStringAttribute('machine_image');
  }
  public set machineImage(value: string) {
    this._machineImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineImageInput() {
    return this._machineImage;
  }

  // quick_connect_enabled - computed: false, optional: true, required: false
  private _quickConnectEnabled?: string; 
  public get quickConnectEnabled() {
    return this.getStringAttribute('quick_connect_enabled');
  }
  public set quickConnectEnabled(value: string) {
    this._quickConnectEnabled = value;
  }
  public resetQuickConnectEnabled() {
    this._quickConnectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectEnabledInput() {
    return this._quickConnectEnabled;
  }

  // quick_connect_url - computed: true, optional: true, required: false
  private _quickConnectUrl?: string; 
  public get quickConnectUrl() {
    return this.getStringAttribute('quick_connect_url');
  }
  public set quickConnectUrl(value: string) {
    this._quickConnectUrl = value;
  }
  public resetQuickConnectUrl() {
    this._quickConnectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectUrlInput() {
    return this._quickConnectUrl;
  }

  // ssh_public_key_names - computed: false, optional: false, required: true
  private _sshPublicKeyNames?: string[]; 
  public get sshPublicKeyNames() {
    return this.getListAttribute('ssh_public_key_names');
  }
  public set sshPublicKeyNames(value: string[]) {
    this._sshPublicKeyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyNamesInput() {
    return this._sshPublicKeyNames;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}
export interface InstanceSshProxy {
}

export function instanceSshProxyToTerraform(struct?: InstanceSshProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceSshProxyToHclTerraform(struct?: InstanceSshProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceSshProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceSshProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSshProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface InstanceTimeouts {
  /**
  * Timeout for instance resource operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#resource_timeout Instance#resource_timeout}
  */
  readonly resourceTimeout?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_timeout: cdktf.stringToTerraform(struct!.resourceTimeout),
  }
}


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resourceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimeout = this._resourceTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTimeout = value.resourceTimeout;
    }
  }

  // resource_timeout - computed: true, optional: true, required: false
  private _resourceTimeout?: string; 
  public get resourceTimeout() {
    return this.getStringAttribute('resource_timeout');
  }
  public set resourceTimeout(value: string) {
    this._resourceTimeout = value;
  }
  public resetResourceTimeout() {
    this._resourceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimeoutInput() {
    return this._resourceTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance intelcloud_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/instance intelcloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._interfaces.internalValue = config.interfaces;
    this._name = config.name;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_info - computed: true, optional: false, required: false
  private _accessInfo = new InstanceAccessInfoOutputReference(this, "access_info");
  public get accessInfo() {
    return this._accessInfo;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // cloudaccount - computed: true, optional: false, required: false
  public get cloudaccount() {
    return this.getStringAttribute('cloudaccount');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: true, required: false
  private _interfaces = new InstanceInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: InstanceInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new InstanceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: InstanceSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // ssh_proxy - computed: true, optional: false, required: false
  private _sshProxy = new InstanceSshProxyOutputReference(this, "ssh_proxy");
  public get sshProxy() {
    return this._sshProxy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interfaces: cdktf.listMapper(instanceInterfacesToTerraform, false)(this._interfaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      spec: instanceSpecToTerraform(this._spec.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      interfaces: {
        value: cdktf.listMapperHcl(instanceInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceInterfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: instanceSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceSpec",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
