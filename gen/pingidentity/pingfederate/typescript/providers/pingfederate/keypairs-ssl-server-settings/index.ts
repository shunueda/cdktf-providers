// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsSslServerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The active SSL Server Certificate Key pairs for PF Administrator Console. Must not be empty and must contain a reference to the cert configured in `admin_console_cert_ref.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#active_admin_console_certs KeypairsSslServerSettings#active_admin_console_certs}
  */
  readonly activeAdminConsoleCerts: KeypairsSslServerSettingsActiveAdminConsoleCerts[] | cdktf.IResolvable;
  /**
  * The active SSL Server Certificate Key pairs for Runtime Server. Must not be empty and must contain a reference to the cert configured in `runtime_server_cert_ref.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#active_runtime_server_certs KeypairsSslServerSettings#active_runtime_server_certs}
  */
  readonly activeRuntimeServerCerts: KeypairsSslServerSettingsActiveRuntimeServerCerts[] | cdktf.IResolvable;
  /**
  * Reference to the default SSL Server Certificate Key pair active for PF Administrator Console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#admin_console_cert_ref KeypairsSslServerSettings#admin_console_cert_ref}
  */
  readonly adminConsoleCertRef: KeypairsSslServerSettingsAdminConsoleCertRef;
  /**
  * Reference to the default SSL Server Certificate Key pair active for Runtime Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#runtime_server_cert_ref KeypairsSslServerSettings#runtime_server_cert_ref}
  */
  readonly runtimeServerCertRef: KeypairsSslServerSettingsRuntimeServerCertRef;
}
export interface KeypairsSslServerSettingsActiveAdminConsoleCerts {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#id KeypairsSslServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsSslServerSettingsActiveAdminConsoleCertsToTerraform(struct?: KeypairsSslServerSettingsActiveAdminConsoleCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsSslServerSettingsActiveAdminConsoleCertsToHclTerraform(struct?: KeypairsSslServerSettingsActiveAdminConsoleCerts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsSslServerSettingsActiveAdminConsoleCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsSslServerSettingsActiveAdminConsoleCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsSslServerSettingsActiveAdminConsoleCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class KeypairsSslServerSettingsActiveAdminConsoleCertsList extends cdktf.ComplexList {
  public internalValue? : KeypairsSslServerSettingsActiveAdminConsoleCerts[] | cdktf.IResolvable

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
  public get(index: number): KeypairsSslServerSettingsActiveAdminConsoleCertsOutputReference {
    return new KeypairsSslServerSettingsActiveAdminConsoleCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsSslServerSettingsActiveRuntimeServerCerts {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#id KeypairsSslServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsSslServerSettingsActiveRuntimeServerCertsToTerraform(struct?: KeypairsSslServerSettingsActiveRuntimeServerCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsSslServerSettingsActiveRuntimeServerCertsToHclTerraform(struct?: KeypairsSslServerSettingsActiveRuntimeServerCerts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsSslServerSettingsActiveRuntimeServerCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsSslServerSettingsActiveRuntimeServerCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsSslServerSettingsActiveRuntimeServerCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class KeypairsSslServerSettingsActiveRuntimeServerCertsList extends cdktf.ComplexList {
  public internalValue? : KeypairsSslServerSettingsActiveRuntimeServerCerts[] | cdktf.IResolvable

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
  public get(index: number): KeypairsSslServerSettingsActiveRuntimeServerCertsOutputReference {
    return new KeypairsSslServerSettingsActiveRuntimeServerCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsSslServerSettingsAdminConsoleCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#id KeypairsSslServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsSslServerSettingsAdminConsoleCertRefToTerraform(struct?: KeypairsSslServerSettingsAdminConsoleCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsSslServerSettingsAdminConsoleCertRefToHclTerraform(struct?: KeypairsSslServerSettingsAdminConsoleCertRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsSslServerSettingsAdminConsoleCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsSslServerSettingsAdminConsoleCertRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsSslServerSettingsAdminConsoleCertRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface KeypairsSslServerSettingsRuntimeServerCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#id KeypairsSslServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsSslServerSettingsRuntimeServerCertRefToTerraform(struct?: KeypairsSslServerSettingsRuntimeServerCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsSslServerSettingsRuntimeServerCertRefToHclTerraform(struct?: KeypairsSslServerSettingsRuntimeServerCertRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsSslServerSettingsRuntimeServerCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsSslServerSettingsRuntimeServerCertRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsSslServerSettingsRuntimeServerCertRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings pingfederate_keypairs_ssl_server_settings}
*/
export class KeypairsSslServerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_ssl_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsSslServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsSslServerSettings to import
  * @param importFromId The id of the existing KeypairsSslServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsSslServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_ssl_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_settings pingfederate_keypairs_ssl_server_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsSslServerSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsSslServerSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_ssl_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAdminConsoleCerts.internalValue = config.activeAdminConsoleCerts;
    this._activeRuntimeServerCerts.internalValue = config.activeRuntimeServerCerts;
    this._adminConsoleCertRef.internalValue = config.adminConsoleCertRef;
    this._runtimeServerCertRef.internalValue = config.runtimeServerCertRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_admin_console_certs - computed: false, optional: false, required: true
  private _activeAdminConsoleCerts = new KeypairsSslServerSettingsActiveAdminConsoleCertsList(this, "active_admin_console_certs", true);
  public get activeAdminConsoleCerts() {
    return this._activeAdminConsoleCerts;
  }
  public putActiveAdminConsoleCerts(value: KeypairsSslServerSettingsActiveAdminConsoleCerts[] | cdktf.IResolvable) {
    this._activeAdminConsoleCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAdminConsoleCertsInput() {
    return this._activeAdminConsoleCerts.internalValue;
  }

  // active_runtime_server_certs - computed: false, optional: false, required: true
  private _activeRuntimeServerCerts = new KeypairsSslServerSettingsActiveRuntimeServerCertsList(this, "active_runtime_server_certs", true);
  public get activeRuntimeServerCerts() {
    return this._activeRuntimeServerCerts;
  }
  public putActiveRuntimeServerCerts(value: KeypairsSslServerSettingsActiveRuntimeServerCerts[] | cdktf.IResolvable) {
    this._activeRuntimeServerCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRuntimeServerCertsInput() {
    return this._activeRuntimeServerCerts.internalValue;
  }

  // admin_console_cert_ref - computed: false, optional: false, required: true
  private _adminConsoleCertRef = new KeypairsSslServerSettingsAdminConsoleCertRefOutputReference(this, "admin_console_cert_ref");
  public get adminConsoleCertRef() {
    return this._adminConsoleCertRef;
  }
  public putAdminConsoleCertRef(value: KeypairsSslServerSettingsAdminConsoleCertRef) {
    this._adminConsoleCertRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsoleCertRefInput() {
    return this._adminConsoleCertRef.internalValue;
  }

  // runtime_server_cert_ref - computed: false, optional: false, required: true
  private _runtimeServerCertRef = new KeypairsSslServerSettingsRuntimeServerCertRefOutputReference(this, "runtime_server_cert_ref");
  public get runtimeServerCertRef() {
    return this._runtimeServerCertRef;
  }
  public putRuntimeServerCertRef(value: KeypairsSslServerSettingsRuntimeServerCertRef) {
    this._runtimeServerCertRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeServerCertRefInput() {
    return this._runtimeServerCertRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_admin_console_certs: cdktf.listMapper(keypairsSslServerSettingsActiveAdminConsoleCertsToTerraform, false)(this._activeAdminConsoleCerts.internalValue),
      active_runtime_server_certs: cdktf.listMapper(keypairsSslServerSettingsActiveRuntimeServerCertsToTerraform, false)(this._activeRuntimeServerCerts.internalValue),
      admin_console_cert_ref: keypairsSslServerSettingsAdminConsoleCertRefToTerraform(this._adminConsoleCertRef.internalValue),
      runtime_server_cert_ref: keypairsSslServerSettingsRuntimeServerCertRefToTerraform(this._runtimeServerCertRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_admin_console_certs: {
        value: cdktf.listMapperHcl(keypairsSslServerSettingsActiveAdminConsoleCertsToHclTerraform, false)(this._activeAdminConsoleCerts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeypairsSslServerSettingsActiveAdminConsoleCertsList",
      },
      active_runtime_server_certs: {
        value: cdktf.listMapperHcl(keypairsSslServerSettingsActiveRuntimeServerCertsToHclTerraform, false)(this._activeRuntimeServerCerts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeypairsSslServerSettingsActiveRuntimeServerCertsList",
      },
      admin_console_cert_ref: {
        value: keypairsSslServerSettingsAdminConsoleCertRefToHclTerraform(this._adminConsoleCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsSslServerSettingsAdminConsoleCertRef",
      },
      runtime_server_cert_ref: {
        value: keypairsSslServerSettingsRuntimeServerCertRefToHclTerraform(this._runtimeServerCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsSslServerSettingsRuntimeServerCertRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
