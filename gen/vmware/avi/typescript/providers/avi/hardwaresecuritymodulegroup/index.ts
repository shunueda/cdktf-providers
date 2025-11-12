// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HardwaresecuritymodulegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#id Hardwaresecuritymodulegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#name Hardwaresecuritymodulegroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#tenant_ref Hardwaresecuritymodulegroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#uuid Hardwaresecuritymodulegroup#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#configpb_attributes Hardwaresecuritymodulegroup#configpb_attributes}
  */
  readonly configpbAttributes?: HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * hsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#hsm Hardwaresecuritymodulegroup#hsm}
  */
  readonly hsm: HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#markers Hardwaresecuritymodulegroup#markers}
  */
  readonly markers?: HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable;
}
export interface HardwaresecuritymodulegroupConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#version Hardwaresecuritymodulegroup#version}
  */
  readonly version?: string;
}

export function hardwaresecuritymodulegroupConfigpbAttributesToTerraform(struct?: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function hardwaresecuritymodulegroupConfigpbAttributesToHclTerraform(struct?: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class HardwaresecuritymodulegroupConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupConfigpbAttributesOutputReference {
    return new HardwaresecuritymodulegroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmCloudhsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#client_config Hardwaresecuritymodulegroup#client_config}
  */
  readonly clientConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#cluster_cert Hardwaresecuritymodulegroup#cluster_cert}
  */
  readonly clusterCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#crypto_user_name Hardwaresecuritymodulegroup#crypto_user_name}
  */
  readonly cryptoUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#crypto_user_password Hardwaresecuritymodulegroup#crypto_user_password}
  */
  readonly cryptoUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#hsm_ip Hardwaresecuritymodulegroup#hsm_ip}
  */
  readonly hsmIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#mgmt_config Hardwaresecuritymodulegroup#mgmt_config}
  */
  readonly mgmtConfig?: string;
}

export function hardwaresecuritymodulegroupHsmCloudhsmToTerraform(struct?: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: cdktf.stringToTerraform(struct!.clientConfig),
    cluster_cert: cdktf.stringToTerraform(struct!.clusterCert),
    crypto_user_name: cdktf.stringToTerraform(struct!.cryptoUserName),
    crypto_user_password: cdktf.stringToTerraform(struct!.cryptoUserPassword),
    hsm_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hsmIp),
    mgmt_config: cdktf.stringToTerraform(struct!.mgmtConfig),
  }
}


export function hardwaresecuritymodulegroupHsmCloudhsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: cdktf.stringToHclTerraform(struct!.clientConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cert: {
      value: cdktf.stringToHclTerraform(struct!.clusterCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_user_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_user_password: {
      value: cdktf.stringToHclTerraform(struct!.cryptoUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hsmIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mgmt_config: {
      value: cdktf.stringToHclTerraform(struct!.mgmtConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmCloudhsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig;
    }
    if (this._clusterCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCert = this._clusterCert;
    }
    if (this._cryptoUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoUserName = this._cryptoUserName;
    }
    if (this._cryptoUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoUserPassword = this._cryptoUserPassword;
    }
    if (this._hsmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmIp = this._hsmIp;
    }
    if (this._mgmtConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtConfig = this._mgmtConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig = undefined;
      this._clusterCert = undefined;
      this._cryptoUserName = undefined;
      this._cryptoUserPassword = undefined;
      this._hsmIp = undefined;
      this._mgmtConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig = value.clientConfig;
      this._clusterCert = value.clusterCert;
      this._cryptoUserName = value.cryptoUserName;
      this._cryptoUserPassword = value.cryptoUserPassword;
      this._hsmIp = value.hsmIp;
      this._mgmtConfig = value.mgmtConfig;
    }
  }

  // client_config - computed: true, optional: true, required: false
  private _clientConfig?: string; 
  public get clientConfig() {
    return this.getStringAttribute('client_config');
  }
  public set clientConfig(value: string) {
    this._clientConfig = value;
  }
  public resetClientConfig() {
    this._clientConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig;
  }

  // cluster_cert - computed: true, optional: true, required: false
  private _clusterCert?: string; 
  public get clusterCert() {
    return this.getStringAttribute('cluster_cert');
  }
  public set clusterCert(value: string) {
    this._clusterCert = value;
  }
  public resetClusterCert() {
    this._clusterCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertInput() {
    return this._clusterCert;
  }

  // crypto_user_name - computed: true, optional: true, required: false
  private _cryptoUserName?: string; 
  public get cryptoUserName() {
    return this.getStringAttribute('crypto_user_name');
  }
  public set cryptoUserName(value: string) {
    this._cryptoUserName = value;
  }
  public resetCryptoUserName() {
    this._cryptoUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoUserNameInput() {
    return this._cryptoUserName;
  }

  // crypto_user_password - computed: true, optional: true, required: false
  private _cryptoUserPassword?: string; 
  public get cryptoUserPassword() {
    return this.getStringAttribute('crypto_user_password');
  }
  public set cryptoUserPassword(value: string) {
    this._cryptoUserPassword = value;
  }
  public resetCryptoUserPassword() {
    this._cryptoUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoUserPasswordInput() {
    return this._cryptoUserPassword;
  }

  // hsm_ip - computed: false, optional: true, required: false
  private _hsmIp?: string[]; 
  public get hsmIp() {
    return this.getListAttribute('hsm_ip');
  }
  public set hsmIp(value: string[]) {
    this._hsmIp = value;
  }
  public resetHsmIp() {
    this._hsmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmIpInput() {
    return this._hsmIp;
  }

  // mgmt_config - computed: true, optional: true, required: false
  private _mgmtConfig?: string; 
  public get mgmtConfig() {
    return this.getStringAttribute('mgmt_config');
  }
  public set mgmtConfig(value: string) {
    this._mgmtConfig = value;
  }
  public resetMgmtConfig() {
    this._mgmtConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtConfigInput() {
    return this._mgmtConfig;
  }
}

export class HardwaresecuritymodulegroupHsmCloudhsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmCloudhsmOutputReference {
    return new HardwaresecuritymodulegroupHsmCloudhsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmNethsmRemoteIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#addr Hardwaresecuritymodulegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
}

export function hardwaresecuritymodulegroupHsmNethsmRemoteIpToTerraform(struct?: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hardwaresecuritymodulegroupHsmNethsmRemoteIpToHclTerraform(struct?: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class HardwaresecuritymodulegroupHsmNethsmRemoteIpList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference {
    return new HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmNethsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#esn Hardwaresecuritymodulegroup#esn}
  */
  readonly esn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#keyhash Hardwaresecuritymodulegroup#keyhash}
  */
  readonly keyhash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#module_id Hardwaresecuritymodulegroup#module_id}
  */
  readonly moduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#priority Hardwaresecuritymodulegroup#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#remote_port Hardwaresecuritymodulegroup#remote_port}
  */
  readonly remotePort?: string;
  /**
  * remote_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#remote_ip Hardwaresecuritymodulegroup#remote_ip}
  */
  readonly remoteIp: HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmNethsmToTerraform(struct?: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esn: cdktf.stringToTerraform(struct!.esn),
    keyhash: cdktf.stringToTerraform(struct!.keyhash),
    module_id: cdktf.stringToTerraform(struct!.moduleId),
    priority: cdktf.stringToTerraform(struct!.priority),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
    remote_ip: cdktf.listMapper(hardwaresecuritymodulegroupHsmNethsmRemoteIpToTerraform, true)(struct!.remoteIp),
  }
}


export function hardwaresecuritymodulegroupHsmNethsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esn: {
      value: cdktf.stringToHclTerraform(struct!.esn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyhash: {
      value: cdktf.stringToHclTerraform(struct!.keyhash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_id: {
      value: cdktf.stringToHclTerraform(struct!.moduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.stringToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmNethsmRemoteIpToHclTerraform, true)(struct!.remoteIp),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmNethsmRemoteIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmNethsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esn !== undefined) {
      hasAnyValues = true;
      internalValueResult.esn = this._esn;
    }
    if (this._keyhash !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyhash = this._keyhash;
    }
    if (this._moduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleId = this._moduleId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    if (this._remoteIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._esn = undefined;
      this._keyhash = undefined;
      this._moduleId = undefined;
      this._priority = undefined;
      this._remotePort = undefined;
      this._remoteIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._esn = value.esn;
      this._keyhash = value.keyhash;
      this._moduleId = value.moduleId;
      this._priority = value.priority;
      this._remotePort = value.remotePort;
      this._remoteIp.internalValue = value.remoteIp;
    }
  }

  // esn - computed: false, optional: false, required: true
  private _esn?: string; 
  public get esn() {
    return this.getStringAttribute('esn');
  }
  public set esn(value: string) {
    this._esn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esnInput() {
    return this._esn;
  }

  // keyhash - computed: false, optional: false, required: true
  private _keyhash?: string; 
  public get keyhash() {
    return this.getStringAttribute('keyhash');
  }
  public set keyhash(value: string) {
    this._keyhash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyhashInput() {
    return this._keyhash;
  }

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp = new HardwaresecuritymodulegroupHsmNethsmRemoteIpList(this, "remote_ip", true);
  public get remoteIp() {
    return this._remoteIp;
  }
  public putRemoteIp(value: HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable) {
    this._remoteIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmNethsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmNethsmOutputReference {
    return new HardwaresecuritymodulegroupHsmNethsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmRfsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#addr Hardwaresecuritymodulegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
}

export function hardwaresecuritymodulegroupHsmRfsIpToTerraform(struct?: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hardwaresecuritymodulegroupHsmRfsIpToHclTerraform(struct?: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class HardwaresecuritymodulegroupHsmRfsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class HardwaresecuritymodulegroupHsmRfsIpList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmRfsIpOutputReference {
    return new HardwaresecuritymodulegroupHsmRfsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmRfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#port Hardwaresecuritymodulegroup#port}
  */
  readonly port?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#ip Hardwaresecuritymodulegroup#ip}
  */
  readonly ip: HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmRfsToTerraform(struct?: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    ip: cdktf.listMapper(hardwaresecuritymodulegroupHsmRfsIpToTerraform, true)(struct!.ip),
  }
}


export function hardwaresecuritymodulegroupHsmRfsToHclTerraform(struct?: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmRfsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmRfsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmRfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._ip.internalValue = value.ip;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new HardwaresecuritymodulegroupHsmRfsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmRfsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmRfsOutputReference {
    return new HardwaresecuritymodulegroupHsmRfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSlunaNodeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#chrystoki_conf Hardwaresecuritymodulegroup#chrystoki_conf}
  */
  readonly chrystokiConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#client_cert Hardwaresecuritymodulegroup#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#client_ip Hardwaresecuritymodulegroup#client_ip}
  */
  readonly clientIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#client_priv_key Hardwaresecuritymodulegroup#client_priv_key}
  */
  readonly clientPrivKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#session_major_number Hardwaresecuritymodulegroup#session_major_number}
  */
  readonly sessionMajorNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#session_minor_number Hardwaresecuritymodulegroup#session_minor_number}
  */
  readonly sessionMinorNumber?: string;
}

export function hardwaresecuritymodulegroupHsmSlunaNodeInfoToTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chrystoki_conf: cdktf.stringToTerraform(struct!.chrystokiConf),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    client_priv_key: cdktf.stringToTerraform(struct!.clientPrivKey),
    session_major_number: cdktf.stringToTerraform(struct!.sessionMajorNumber),
    session_minor_number: cdktf.stringToTerraform(struct!.sessionMinorNumber),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaNodeInfoToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chrystoki_conf: {
      value: cdktf.stringToHclTerraform(struct!.chrystokiConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_priv_key: {
      value: cdktf.stringToHclTerraform(struct!.clientPrivKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_major_number: {
      value: cdktf.stringToHclTerraform(struct!.sessionMajorNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_minor_number: {
      value: cdktf.stringToHclTerraform(struct!.sessionMinorNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chrystokiConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.chrystokiConf = this._chrystokiConf;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._clientPrivKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivKey = this._clientPrivKey;
    }
    if (this._sessionMajorNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMajorNumber = this._sessionMajorNumber;
    }
    if (this._sessionMinorNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMinorNumber = this._sessionMinorNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chrystokiConf = undefined;
      this._clientCert = undefined;
      this._clientIp = undefined;
      this._clientPrivKey = undefined;
      this._sessionMajorNumber = undefined;
      this._sessionMinorNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chrystokiConf = value.chrystokiConf;
      this._clientCert = value.clientCert;
      this._clientIp = value.clientIp;
      this._clientPrivKey = value.clientPrivKey;
      this._sessionMajorNumber = value.sessionMajorNumber;
      this._sessionMinorNumber = value.sessionMinorNumber;
    }
  }

  // chrystoki_conf - computed: true, optional: true, required: false
  private _chrystokiConf?: string; 
  public get chrystokiConf() {
    return this.getStringAttribute('chrystoki_conf');
  }
  public set chrystokiConf(value: string) {
    this._chrystokiConf = value;
  }
  public resetChrystokiConf() {
    this._chrystokiConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chrystokiConfInput() {
    return this._chrystokiConf;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_ip - computed: false, optional: false, required: true
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // client_priv_key - computed: true, optional: true, required: false
  private _clientPrivKey?: string; 
  public get clientPrivKey() {
    return this.getStringAttribute('client_priv_key');
  }
  public set clientPrivKey(value: string) {
    this._clientPrivKey = value;
  }
  public resetClientPrivKey() {
    this._clientPrivKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivKeyInput() {
    return this._clientPrivKey;
  }

  // session_major_number - computed: true, optional: true, required: false
  private _sessionMajorNumber?: string; 
  public get sessionMajorNumber() {
    return this.getStringAttribute('session_major_number');
  }
  public set sessionMajorNumber(value: string) {
    this._sessionMajorNumber = value;
  }
  public resetSessionMajorNumber() {
    this._sessionMajorNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMajorNumberInput() {
    return this._sessionMajorNumber;
  }

  // session_minor_number - computed: true, optional: true, required: false
  private _sessionMinorNumber?: string; 
  public get sessionMinorNumber() {
    return this.getStringAttribute('session_minor_number');
  }
  public set sessionMinorNumber(value: string) {
    this._sessionMinorNumber = value;
  }
  public resetSessionMinorNumber() {
    this._sessionMinorNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMinorNumberInput() {
    return this._sessionMinorNumber;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaNodeInfoList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSlunaServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#index Hardwaresecuritymodulegroup#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#partition_passwd Hardwaresecuritymodulegroup#partition_passwd}
  */
  readonly partitionPasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#partition_serial_number Hardwaresecuritymodulegroup#partition_serial_number}
  */
  readonly partitionSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#remote_ip Hardwaresecuritymodulegroup#remote_ip}
  */
  readonly remoteIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#server_cert Hardwaresecuritymodulegroup#server_cert}
  */
  readonly serverCert: string;
}

export function hardwaresecuritymodulegroupHsmSlunaServerToTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    partition_passwd: cdktf.stringToTerraform(struct!.partitionPasswd),
    partition_serial_number: cdktf.stringToTerraform(struct!.partitionSerialNumber),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaServerToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_passwd: {
      value: cdktf.stringToHclTerraform(struct!.partitionPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.partitionSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._partitionPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionPasswd = this._partitionPasswd;
    }
    if (this._partitionSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSerialNumber = this._partitionSerialNumber;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._partitionPasswd = undefined;
      this._partitionSerialNumber = undefined;
      this._remoteIp = undefined;
      this._serverCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._partitionPasswd = value.partitionPasswd;
      this._partitionSerialNumber = value.partitionSerialNumber;
      this._remoteIp = value.remoteIp;
      this._serverCert = value.serverCert;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // partition_passwd - computed: true, optional: true, required: false
  private _partitionPasswd?: string; 
  public get partitionPasswd() {
    return this.getStringAttribute('partition_passwd');
  }
  public set partitionPasswd(value: string) {
    this._partitionPasswd = value;
  }
  public resetPartitionPasswd() {
    this._partitionPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionPasswdInput() {
    return this._partitionPasswd;
  }

  // partition_serial_number - computed: true, optional: true, required: false
  private _partitionSerialNumber?: string; 
  public get partitionSerialNumber() {
    return this.getStringAttribute('partition_serial_number');
  }
  public set partitionSerialNumber(value: string) {
    this._partitionSerialNumber = value;
  }
  public resetPartitionSerialNumber() {
    this._partitionSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSerialNumberInput() {
    return this._partitionSerialNumber;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // server_cert - computed: false, optional: false, required: true
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaServerList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaServerOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSluna {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#ha_group_num Hardwaresecuritymodulegroup#ha_group_num}
  */
  readonly haGroupNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#is_ha Hardwaresecuritymodulegroup#is_ha}
  */
  readonly isHa: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#server_pem Hardwaresecuritymodulegroup#server_pem}
  */
  readonly serverPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#use_dedicated_network Hardwaresecuritymodulegroup#use_dedicated_network}
  */
  readonly useDedicatedNetwork?: string;
  /**
  * node_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#node_info Hardwaresecuritymodulegroup#node_info}
  */
  readonly nodeInfo?: HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#server Hardwaresecuritymodulegroup#server}
  */
  readonly server?: HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmSlunaToTerraform(struct?: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_group_num: cdktf.stringToTerraform(struct!.haGroupNum),
    is_ha: cdktf.stringToTerraform(struct!.isHa),
    server_pem: cdktf.stringToTerraform(struct!.serverPem),
    use_dedicated_network: cdktf.stringToTerraform(struct!.useDedicatedNetwork),
    node_info: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaNodeInfoToTerraform, true)(struct!.nodeInfo),
    server: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaServerToTerraform, true)(struct!.server),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_group_num: {
      value: cdktf.stringToHclTerraform(struct!.haGroupNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ha: {
      value: cdktf.stringToHclTerraform(struct!.isHa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_pem: {
      value: cdktf.stringToHclTerraform(struct!.serverPem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_dedicated_network: {
      value: cdktf.stringToHclTerraform(struct!.useDedicatedNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_info: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaNodeInfoToHclTerraform, true)(struct!.nodeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaNodeInfoList",
    },
    server: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haGroupNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupNum = this._haGroupNum;
    }
    if (this._isHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHa = this._isHa;
    }
    if (this._serverPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPem = this._serverPem;
    }
    if (this._useDedicatedNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDedicatedNetwork = this._useDedicatedNetwork;
    }
    if (this._nodeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInfo = this._nodeInfo?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haGroupNum = undefined;
      this._isHa = undefined;
      this._serverPem = undefined;
      this._useDedicatedNetwork = undefined;
      this._nodeInfo.internalValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haGroupNum = value.haGroupNum;
      this._isHa = value.isHa;
      this._serverPem = value.serverPem;
      this._useDedicatedNetwork = value.useDedicatedNetwork;
      this._nodeInfo.internalValue = value.nodeInfo;
      this._server.internalValue = value.server;
    }
  }

  // ha_group_num - computed: true, optional: true, required: false
  private _haGroupNum?: string; 
  public get haGroupNum() {
    return this.getStringAttribute('ha_group_num');
  }
  public set haGroupNum(value: string) {
    this._haGroupNum = value;
  }
  public resetHaGroupNum() {
    this._haGroupNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupNumInput() {
    return this._haGroupNum;
  }

  // is_ha - computed: false, optional: false, required: true
  private _isHa?: string; 
  public get isHa() {
    return this.getStringAttribute('is_ha');
  }
  public set isHa(value: string) {
    this._isHa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // server_pem - computed: true, optional: true, required: false
  private _serverPem?: string; 
  public get serverPem() {
    return this.getStringAttribute('server_pem');
  }
  public set serverPem(value: string) {
    this._serverPem = value;
  }
  public resetServerPem() {
    this._serverPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPemInput() {
    return this._serverPem;
  }

  // use_dedicated_network - computed: false, optional: true, required: false
  private _useDedicatedNetwork?: string; 
  public get useDedicatedNetwork() {
    return this.getStringAttribute('use_dedicated_network');
  }
  public set useDedicatedNetwork(value: string) {
    this._useDedicatedNetwork = value;
  }
  public resetUseDedicatedNetwork() {
    this._useDedicatedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDedicatedNetworkInput() {
    return this._useDedicatedNetwork;
  }

  // node_info - computed: false, optional: true, required: false
  private _nodeInfo = new HardwaresecuritymodulegroupHsmSlunaNodeInfoList(this, "node_info", false);
  public get nodeInfo() {
    return this._nodeInfo;
  }
  public putNodeInfo(value: HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable) {
    this._nodeInfo.internalValue = value;
  }
  public resetNodeInfo() {
    this._nodeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInfoInput() {
    return this._nodeInfo.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new HardwaresecuritymodulegroupHsmSlunaServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
  /**
  * cloudhsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#cloudhsm Hardwaresecuritymodulegroup#cloudhsm}
  */
  readonly cloudhsm?: HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable;
  /**
  * nethsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#nethsm Hardwaresecuritymodulegroup#nethsm}
  */
  readonly nethsm?: HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable;
  /**
  * rfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#rfs Hardwaresecuritymodulegroup#rfs}
  */
  readonly rfs?: HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable;
  /**
  * sluna block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#sluna Hardwaresecuritymodulegroup#sluna}
  */
  readonly sluna?: HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmToTerraform(struct?: HardwaresecuritymodulegroupHsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cloudhsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmCloudhsmToTerraform, true)(struct!.cloudhsm),
    nethsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmNethsmToTerraform, true)(struct!.nethsm),
    rfs: cdktf.listMapper(hardwaresecuritymodulegroupHsmRfsToTerraform, true)(struct!.rfs),
    sluna: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaToTerraform, true)(struct!.sluna),
  }
}


export function hardwaresecuritymodulegroupHsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsm | cdktf.IResolvable): any {
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
    cloudhsm: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmCloudhsmToHclTerraform, true)(struct!.cloudhsm),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmCloudhsmList",
    },
    nethsm: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmNethsmToHclTerraform, true)(struct!.nethsm),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmNethsmList",
    },
    rfs: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmRfsToHclTerraform, true)(struct!.rfs),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmRfsList",
    },
    sluna: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaToHclTerraform, true)(struct!.sluna),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cloudhsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudhsm = this._cloudhsm?.internalValue;
    }
    if (this._nethsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nethsm = this._nethsm?.internalValue;
    }
    if (this._rfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfs = this._rfs?.internalValue;
    }
    if (this._sluna?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sluna = this._sluna?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cloudhsm.internalValue = undefined;
      this._nethsm.internalValue = undefined;
      this._rfs.internalValue = undefined;
      this._sluna.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cloudhsm.internalValue = value.cloudhsm;
      this._nethsm.internalValue = value.nethsm;
      this._rfs.internalValue = value.rfs;
      this._sluna.internalValue = value.sluna;
    }
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

  // cloudhsm - computed: false, optional: true, required: false
  private _cloudhsm = new HardwaresecuritymodulegroupHsmCloudhsmList(this, "cloudhsm", true);
  public get cloudhsm() {
    return this._cloudhsm;
  }
  public putCloudhsm(value: HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable) {
    this._cloudhsm.internalValue = value;
  }
  public resetCloudhsm() {
    this._cloudhsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudhsmInput() {
    return this._cloudhsm.internalValue;
  }

  // nethsm - computed: false, optional: true, required: false
  private _nethsm = new HardwaresecuritymodulegroupHsmNethsmList(this, "nethsm", false);
  public get nethsm() {
    return this._nethsm;
  }
  public putNethsm(value: HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable) {
    this._nethsm.internalValue = value;
  }
  public resetNethsm() {
    this._nethsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nethsmInput() {
    return this._nethsm.internalValue;
  }

  // rfs - computed: false, optional: true, required: false
  private _rfs = new HardwaresecuritymodulegroupHsmRfsList(this, "rfs", true);
  public get rfs() {
    return this._rfs;
  }
  public putRfs(value: HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable) {
    this._rfs.internalValue = value;
  }
  public resetRfs() {
    this._rfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfsInput() {
    return this._rfs.internalValue;
  }

  // sluna - computed: false, optional: true, required: false
  private _sluna = new HardwaresecuritymodulegroupHsmSlunaList(this, "sluna", true);
  public get sluna() {
    return this._sluna;
  }
  public putSluna(value: HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable) {
    this._sluna.internalValue = value;
  }
  public resetSluna() {
    this._sluna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slunaInput() {
    return this._sluna.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmOutputReference {
    return new HardwaresecuritymodulegroupHsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#key Hardwaresecuritymodulegroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#values Hardwaresecuritymodulegroup#values}
  */
  readonly values?: string[];
}

export function hardwaresecuritymodulegroupMarkersToTerraform(struct?: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function hardwaresecuritymodulegroupMarkersToHclTerraform(struct?: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HardwaresecuritymodulegroupMarkersList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupMarkersOutputReference {
    return new HardwaresecuritymodulegroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup avi_hardwaresecuritymodulegroup}
*/
export class Hardwaresecuritymodulegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_hardwaresecuritymodulegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hardwaresecuritymodulegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hardwaresecuritymodulegroup to import
  * @param importFromId The id of the existing Hardwaresecuritymodulegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hardwaresecuritymodulegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_hardwaresecuritymodulegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/hardwaresecuritymodulegroup avi_hardwaresecuritymodulegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HardwaresecuritymodulegroupConfig
  */
  public constructor(scope: Construct, id: string, config: HardwaresecuritymodulegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_hardwaresecuritymodulegroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._hsm.internalValue = config.hsm;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new HardwaresecuritymodulegroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // hsm - computed: false, optional: false, required: true
  private _hsm = new HardwaresecuritymodulegroupHsmList(this, "hsm", true);
  public get hsm() {
    return this._hsm;
  }
  public putHsm(value: HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable) {
    this._hsm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new HardwaresecuritymodulegroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(hardwaresecuritymodulegroupConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      hsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmToTerraform, true)(this._hsm.internalValue),
      markers: cdktf.listMapper(hardwaresecuritymodulegroupMarkersToTerraform, true)(this._markers.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HardwaresecuritymodulegroupConfigpbAttributesList",
      },
      hsm: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmToHclTerraform, true)(this._hsm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HardwaresecuritymodulegroupHsmList",
      },
      markers: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HardwaresecuritymodulegroupMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
