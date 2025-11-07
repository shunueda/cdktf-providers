// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#allow_provisioning Environment#allow_provisioning}
  */
  readonly allowProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_cyberark_vault_query_string Environment#ase_db_cyberark_vault_query_string}
  */
  readonly aseDbCyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_hashicorp_vault_engine Environment#ase_db_hashicorp_vault_engine}
  */
  readonly aseDbHashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_hashicorp_vault_secret_key Environment#ase_db_hashicorp_vault_secret_key}
  */
  readonly aseDbHashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_hashicorp_vault_secret_path Environment#ase_db_hashicorp_vault_secret_path}
  */
  readonly aseDbHashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_hashicorp_vault_username_key Environment#ase_db_hashicorp_vault_username_key}
  */
  readonly aseDbHashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_password Environment#ase_db_password}
  */
  readonly aseDbPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_use_kerberos_authentication Environment#ase_db_use_kerberos_authentication}
  */
  readonly aseDbUseKerberosAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_username Environment#ase_db_username}
  */
  readonly aseDbUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ase_db_vault Environment#ase_db_vault}
  */
  readonly aseDbVault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#bits Environment#bits}
  */
  readonly bits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#cluster_home Environment#cluster_home}
  */
  readonly clusterHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#connector_port Environment#connector_port}
  */
  readonly connectorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#cyberark_vault_query_string Environment#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#database_type Environment#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#dsp_keystore_alias Environment#dsp_keystore_alias}
  */
  readonly dspKeystoreAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#dsp_keystore_password Environment#dsp_keystore_password}
  */
  readonly dspKeystorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#dsp_keystore_path Environment#dsp_keystore_path}
  */
  readonly dspKeystorePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#dsp_truststore_password Environment#dsp_truststore_password}
  */
  readonly dspTruststorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#dsp_truststore_path Environment#dsp_truststore_path}
  */
  readonly dspTruststorePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#engine_id Environment#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hashicorp_vault_engine Environment#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hashicorp_vault_secret_key Environment#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hashicorp_vault_secret_path Environment#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hashicorp_vault_username_key Environment#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ignore_tag_changes Environment#ignore_tag_changes}
  */
  readonly ignoreTagChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#is_cluster Environment#is_cluster}
  */
  readonly isCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#is_replica Environment#is_replica}
  */
  readonly isReplica?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#is_staging Environment#is_staging}
  */
  readonly isStaging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#is_target Environment#is_target}
  */
  readonly isTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#is_windows_target Environment#is_windows_target}
  */
  readonly isWindowsTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#name Environment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#oracle_base Environment#oracle_base}
  */
  readonly oracleBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#os_type Environment#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#password Environment#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#staging_environment Environment#staging_environment}
  */
  readonly stagingEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#toolkit_path Environment#toolkit_path}
  */
  readonly toolkitPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#use_engine_public_key Environment#use_engine_public_key}
  */
  readonly useEnginePublicKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#use_kerberos_authentication Environment#use_kerberos_authentication}
  */
  readonly useKerberosAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#username Environment#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#vault Environment#vault}
  */
  readonly vault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#version Environment#version}
  */
  readonly version?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hosts Environment#hosts}
  */
  readonly hosts?: EnvironmentHosts[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#tags Environment#tags}
  */
  readonly tags?: EnvironmentTags[] | cdktf.IResolvable;
}
export interface EnvironmentRepositories {
}

export function environmentRepositoriesToTerraform(struct?: EnvironmentRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function environmentRepositoriesToHclTerraform(struct?: EnvironmentRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EnvironmentRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_provisioning - computed: true, optional: false, required: false
  public get allowProvisioning() {
    return this.getBooleanAttribute('allow_provisioning');
  }

  // bits - computed: true, optional: false, required: false
  public get bits() {
    return this.getNumberAttribute('bits');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_staging - computed: true, optional: false, required: false
  public get isStaging() {
    return this.getBooleanAttribute('is_staging');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oracle_base - computed: true, optional: false, required: false
  public get oracleBase() {
    return this.getStringAttribute('oracle_base');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class EnvironmentRepositoriesList extends cdktf.ComplexList {

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
  public get(index: number): EnvironmentRepositoriesOutputReference {
    return new EnvironmentRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#hostname Environment#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#java_home Environment#java_home}
  */
  readonly javaHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#nfs_addresses Environment#nfs_addresses}
  */
  readonly nfsAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#oracle_tde_keystores_root_path Environment#oracle_tde_keystores_root_path}
  */
  readonly oracleTdeKeystoresRootPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#ssh_port Environment#ssh_port}
  */
  readonly sshPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#toolkit_path Environment#toolkit_path}
  */
  readonly toolkitPath?: string;
}

export function environmentHostsToTerraform(struct?: EnvironmentHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    java_home: cdktf.stringToTerraform(struct!.javaHome),
    nfs_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nfsAddresses),
    oracle_tde_keystores_root_path: cdktf.stringToTerraform(struct!.oracleTdeKeystoresRootPath),
    ssh_port: cdktf.numberToTerraform(struct!.sshPort),
    toolkit_path: cdktf.stringToTerraform(struct!.toolkitPath),
  }
}


export function environmentHostsToHclTerraform(struct?: EnvironmentHosts | cdktf.IResolvable): any {
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
    java_home: {
      value: cdktf.stringToHclTerraform(struct!.javaHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nfsAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oracle_tde_keystores_root_path: {
      value: cdktf.stringToHclTerraform(struct!.oracleTdeKeystoresRootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.numberToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    toolkit_path: {
      value: cdktf.stringToHclTerraform(struct!.toolkitPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._javaHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaHome = this._javaHome;
    }
    if (this._nfsAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsAddresses = this._nfsAddresses;
    }
    if (this._oracleTdeKeystoresRootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTdeKeystoresRootPath = this._oracleTdeKeystoresRootPath;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._toolkitPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolkitPath = this._toolkitPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._javaHome = undefined;
      this._nfsAddresses = undefined;
      this._oracleTdeKeystoresRootPath = undefined;
      this._sshPort = undefined;
      this._toolkitPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._javaHome = value.javaHome;
      this._nfsAddresses = value.nfsAddresses;
      this._oracleTdeKeystoresRootPath = value.oracleTdeKeystoresRootPath;
      this._sshPort = value.sshPort;
      this._toolkitPath = value.toolkitPath;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // java_home - computed: false, optional: true, required: false
  private _javaHome?: string; 
  public get javaHome() {
    return this.getStringAttribute('java_home');
  }
  public set javaHome(value: string) {
    this._javaHome = value;
  }
  public resetJavaHome() {
    this._javaHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaHomeInput() {
    return this._javaHome;
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // nfs_addresses - computed: true, optional: true, required: false
  private _nfsAddresses?: string[]; 
  public get nfsAddresses() {
    return this.getListAttribute('nfs_addresses');
  }
  public set nfsAddresses(value: string[]) {
    this._nfsAddresses = value;
  }
  public resetNfsAddresses() {
    this._nfsAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsAddressesInput() {
    return this._nfsAddresses;
  }

  // oracle_tde_keystores_root_path - computed: false, optional: true, required: false
  private _oracleTdeKeystoresRootPath?: string; 
  public get oracleTdeKeystoresRootPath() {
    return this.getStringAttribute('oracle_tde_keystores_root_path');
  }
  public set oracleTdeKeystoresRootPath(value: string) {
    this._oracleTdeKeystoresRootPath = value;
  }
  public resetOracleTdeKeystoresRootPath() {
    this._oracleTdeKeystoresRootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTdeKeystoresRootPathInput() {
    return this._oracleTdeKeystoresRootPath;
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // processor_type - computed: true, optional: false, required: false
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: number; 
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }
  public set sshPort(value: number) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // toolkit_path - computed: false, optional: true, required: false
  private _toolkitPath?: string; 
  public get toolkitPath() {
    return this.getStringAttribute('toolkit_path');
  }
  public set toolkitPath(value: string) {
    this._toolkitPath = value;
  }
  public resetToolkitPath() {
    this._toolkitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolkitPathInput() {
    return this._toolkitPath;
  }
}

export class EnvironmentHostsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentHosts[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentHostsOutputReference {
    return new EnvironmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#key Environment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#value Environment#value}
  */
  readonly value?: string;
}

export function environmentTagsToTerraform(struct?: EnvironmentTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentTagsToHclTerraform(struct?: EnvironmentTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvironmentTagsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTags[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTagsOutputReference {
    return new EnvironmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment delphix_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/environment delphix_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'delphix_environment',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowProvisioning = config.allowProvisioning;
    this._aseDbCyberarkVaultQueryString = config.aseDbCyberarkVaultQueryString;
    this._aseDbHashicorpVaultEngine = config.aseDbHashicorpVaultEngine;
    this._aseDbHashicorpVaultSecretKey = config.aseDbHashicorpVaultSecretKey;
    this._aseDbHashicorpVaultSecretPath = config.aseDbHashicorpVaultSecretPath;
    this._aseDbHashicorpVaultUsernameKey = config.aseDbHashicorpVaultUsernameKey;
    this._aseDbPassword = config.aseDbPassword;
    this._aseDbUseKerberosAuthentication = config.aseDbUseKerberosAuthentication;
    this._aseDbUsername = config.aseDbUsername;
    this._aseDbVault = config.aseDbVault;
    this._bits = config.bits;
    this._clusterHome = config.clusterHome;
    this._connectorPort = config.connectorPort;
    this._cyberarkVaultQueryString = config.cyberarkVaultQueryString;
    this._databaseType = config.databaseType;
    this._description = config.description;
    this._dspKeystoreAlias = config.dspKeystoreAlias;
    this._dspKeystorePassword = config.dspKeystorePassword;
    this._dspKeystorePath = config.dspKeystorePath;
    this._dspTruststorePassword = config.dspTruststorePassword;
    this._dspTruststorePath = config.dspTruststorePath;
    this._engineId = config.engineId;
    this._hashicorpVaultEngine = config.hashicorpVaultEngine;
    this._hashicorpVaultSecretKey = config.hashicorpVaultSecretKey;
    this._hashicorpVaultSecretPath = config.hashicorpVaultSecretPath;
    this._hashicorpVaultUsernameKey = config.hashicorpVaultUsernameKey;
    this._ignoreTagChanges = config.ignoreTagChanges;
    this._isCluster = config.isCluster;
    this._isReplica = config.isReplica;
    this._isStaging = config.isStaging;
    this._isTarget = config.isTarget;
    this._isWindowsTarget = config.isWindowsTarget;
    this._name = config.name;
    this._oracleBase = config.oracleBase;
    this._osType = config.osType;
    this._password = config.password;
    this._stagingEnvironment = config.stagingEnvironment;
    this._toolkitPath = config.toolkitPath;
    this._useEnginePublicKey = config.useEnginePublicKey;
    this._useKerberosAuthentication = config.useKerberosAuthentication;
    this._username = config.username;
    this._vault = config.vault;
    this._version = config.version;
    this._hosts.internalValue = config.hosts;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_provisioning - computed: false, optional: true, required: false
  private _allowProvisioning?: boolean | cdktf.IResolvable; 
  public get allowProvisioning() {
    return this.getBooleanAttribute('allow_provisioning');
  }
  public set allowProvisioning(value: boolean | cdktf.IResolvable) {
    this._allowProvisioning = value;
  }
  public resetAllowProvisioning() {
    this._allowProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProvisioningInput() {
    return this._allowProvisioning;
  }

  // ase_db_cyberark_vault_query_string - computed: false, optional: true, required: false
  private _aseDbCyberarkVaultQueryString?: string; 
  public get aseDbCyberarkVaultQueryString() {
    return this.getStringAttribute('ase_db_cyberark_vault_query_string');
  }
  public set aseDbCyberarkVaultQueryString(value: string) {
    this._aseDbCyberarkVaultQueryString = value;
  }
  public resetAseDbCyberarkVaultQueryString() {
    this._aseDbCyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbCyberarkVaultQueryStringInput() {
    return this._aseDbCyberarkVaultQueryString;
  }

  // ase_db_hashicorp_vault_engine - computed: false, optional: true, required: false
  private _aseDbHashicorpVaultEngine?: string; 
  public get aseDbHashicorpVaultEngine() {
    return this.getStringAttribute('ase_db_hashicorp_vault_engine');
  }
  public set aseDbHashicorpVaultEngine(value: string) {
    this._aseDbHashicorpVaultEngine = value;
  }
  public resetAseDbHashicorpVaultEngine() {
    this._aseDbHashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbHashicorpVaultEngineInput() {
    return this._aseDbHashicorpVaultEngine;
  }

  // ase_db_hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _aseDbHashicorpVaultSecretKey?: string; 
  public get aseDbHashicorpVaultSecretKey() {
    return this.getStringAttribute('ase_db_hashicorp_vault_secret_key');
  }
  public set aseDbHashicorpVaultSecretKey(value: string) {
    this._aseDbHashicorpVaultSecretKey = value;
  }
  public resetAseDbHashicorpVaultSecretKey() {
    this._aseDbHashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbHashicorpVaultSecretKeyInput() {
    return this._aseDbHashicorpVaultSecretKey;
  }

  // ase_db_hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _aseDbHashicorpVaultSecretPath?: string; 
  public get aseDbHashicorpVaultSecretPath() {
    return this.getStringAttribute('ase_db_hashicorp_vault_secret_path');
  }
  public set aseDbHashicorpVaultSecretPath(value: string) {
    this._aseDbHashicorpVaultSecretPath = value;
  }
  public resetAseDbHashicorpVaultSecretPath() {
    this._aseDbHashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbHashicorpVaultSecretPathInput() {
    return this._aseDbHashicorpVaultSecretPath;
  }

  // ase_db_hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _aseDbHashicorpVaultUsernameKey?: string; 
  public get aseDbHashicorpVaultUsernameKey() {
    return this.getStringAttribute('ase_db_hashicorp_vault_username_key');
  }
  public set aseDbHashicorpVaultUsernameKey(value: string) {
    this._aseDbHashicorpVaultUsernameKey = value;
  }
  public resetAseDbHashicorpVaultUsernameKey() {
    this._aseDbHashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbHashicorpVaultUsernameKeyInput() {
    return this._aseDbHashicorpVaultUsernameKey;
  }

  // ase_db_password - computed: false, optional: true, required: false
  private _aseDbPassword?: string; 
  public get aseDbPassword() {
    return this.getStringAttribute('ase_db_password');
  }
  public set aseDbPassword(value: string) {
    this._aseDbPassword = value;
  }
  public resetAseDbPassword() {
    this._aseDbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbPasswordInput() {
    return this._aseDbPassword;
  }

  // ase_db_use_kerberos_authentication - computed: false, optional: true, required: false
  private _aseDbUseKerberosAuthentication?: boolean | cdktf.IResolvable; 
  public get aseDbUseKerberosAuthentication() {
    return this.getBooleanAttribute('ase_db_use_kerberos_authentication');
  }
  public set aseDbUseKerberosAuthentication(value: boolean | cdktf.IResolvable) {
    this._aseDbUseKerberosAuthentication = value;
  }
  public resetAseDbUseKerberosAuthentication() {
    this._aseDbUseKerberosAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbUseKerberosAuthenticationInput() {
    return this._aseDbUseKerberosAuthentication;
  }

  // ase_db_username - computed: false, optional: true, required: false
  private _aseDbUsername?: string; 
  public get aseDbUsername() {
    return this.getStringAttribute('ase_db_username');
  }
  public set aseDbUsername(value: string) {
    this._aseDbUsername = value;
  }
  public resetAseDbUsername() {
    this._aseDbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbUsernameInput() {
    return this._aseDbUsername;
  }

  // ase_db_vault - computed: false, optional: true, required: false
  private _aseDbVault?: string; 
  public get aseDbVault() {
    return this.getStringAttribute('ase_db_vault');
  }
  public set aseDbVault(value: string) {
    this._aseDbVault = value;
  }
  public resetAseDbVault() {
    this._aseDbVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseDbVaultInput() {
    return this._aseDbVault;
  }

  // bits - computed: false, optional: true, required: false
  private _bits?: number; 
  public get bits() {
    return this.getNumberAttribute('bits');
  }
  public set bits(value: number) {
    this._bits = value;
  }
  public resetBits() {
    this._bits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
  }

  // cluster_home - computed: false, optional: true, required: false
  private _clusterHome?: string; 
  public get clusterHome() {
    return this.getStringAttribute('cluster_home');
  }
  public set clusterHome(value: string) {
    this._clusterHome = value;
  }
  public resetClusterHome() {
    this._clusterHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterHomeInput() {
    return this._clusterHome;
  }

  // connector_port - computed: false, optional: true, required: false
  private _connectorPort?: number; 
  public get connectorPort() {
    return this.getNumberAttribute('connector_port');
  }
  public set connectorPort(value: number) {
    this._connectorPort = value;
  }
  public resetConnectorPort() {
    this._connectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorPortInput() {
    return this._connectorPort;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
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

  // dsp_keystore_alias - computed: false, optional: true, required: false
  private _dspKeystoreAlias?: string; 
  public get dspKeystoreAlias() {
    return this.getStringAttribute('dsp_keystore_alias');
  }
  public set dspKeystoreAlias(value: string) {
    this._dspKeystoreAlias = value;
  }
  public resetDspKeystoreAlias() {
    this._dspKeystoreAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspKeystoreAliasInput() {
    return this._dspKeystoreAlias;
  }

  // dsp_keystore_password - computed: false, optional: true, required: false
  private _dspKeystorePassword?: string; 
  public get dspKeystorePassword() {
    return this.getStringAttribute('dsp_keystore_password');
  }
  public set dspKeystorePassword(value: string) {
    this._dspKeystorePassword = value;
  }
  public resetDspKeystorePassword() {
    this._dspKeystorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspKeystorePasswordInput() {
    return this._dspKeystorePassword;
  }

  // dsp_keystore_path - computed: false, optional: true, required: false
  private _dspKeystorePath?: string; 
  public get dspKeystorePath() {
    return this.getStringAttribute('dsp_keystore_path');
  }
  public set dspKeystorePath(value: string) {
    this._dspKeystorePath = value;
  }
  public resetDspKeystorePath() {
    this._dspKeystorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspKeystorePathInput() {
    return this._dspKeystorePath;
  }

  // dsp_truststore_password - computed: false, optional: true, required: false
  private _dspTruststorePassword?: string; 
  public get dspTruststorePassword() {
    return this.getStringAttribute('dsp_truststore_password');
  }
  public set dspTruststorePassword(value: string) {
    this._dspTruststorePassword = value;
  }
  public resetDspTruststorePassword() {
    this._dspTruststorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspTruststorePasswordInput() {
    return this._dspTruststorePassword;
  }

  // dsp_truststore_path - computed: false, optional: true, required: false
  private _dspTruststorePath?: string; 
  public get dspTruststorePath() {
    return this.getStringAttribute('dsp_truststore_path');
  }
  public set dspTruststorePath(value: string) {
    this._dspTruststorePath = value;
  }
  public resetDspTruststorePath() {
    this._dspTruststorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspTruststorePathInput() {
    return this._dspTruststorePath;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tag_changes - computed: false, optional: true, required: false
  private _ignoreTagChanges?: boolean | cdktf.IResolvable; 
  public get ignoreTagChanges() {
    return this.getBooleanAttribute('ignore_tag_changes');
  }
  public set ignoreTagChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreTagChanges = value;
  }
  public resetIgnoreTagChanges() {
    this._ignoreTagChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagChangesInput() {
    return this._ignoreTagChanges;
  }

  // is_cluster - computed: false, optional: true, required: false
  private _isCluster?: boolean | cdktf.IResolvable; 
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }
  public set isCluster(value: boolean | cdktf.IResolvable) {
    this._isCluster = value;
  }
  public resetIsCluster() {
    this._isCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClusterInput() {
    return this._isCluster;
  }

  // is_replica - computed: false, optional: true, required: false
  private _isReplica?: boolean | cdktf.IResolvable; 
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }
  public set isReplica(value: boolean | cdktf.IResolvable) {
    this._isReplica = value;
  }
  public resetIsReplica() {
    this._isReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplicaInput() {
    return this._isReplica;
  }

  // is_staging - computed: false, optional: true, required: false
  private _isStaging?: boolean | cdktf.IResolvable; 
  public get isStaging() {
    return this.getBooleanAttribute('is_staging');
  }
  public set isStaging(value: boolean | cdktf.IResolvable) {
    this._isStaging = value;
  }
  public resetIsStaging() {
    this._isStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStagingInput() {
    return this._isStaging;
  }

  // is_target - computed: false, optional: true, required: false
  private _isTarget?: boolean | cdktf.IResolvable; 
  public get isTarget() {
    return this.getBooleanAttribute('is_target');
  }
  public set isTarget(value: boolean | cdktf.IResolvable) {
    this._isTarget = value;
  }
  public resetIsTarget() {
    this._isTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTargetInput() {
    return this._isTarget;
  }

  // is_windows_target - computed: false, optional: true, required: false
  private _isWindowsTarget?: boolean | cdktf.IResolvable; 
  public get isWindowsTarget() {
    return this.getBooleanAttribute('is_windows_target');
  }
  public set isWindowsTarget(value: boolean | cdktf.IResolvable) {
    this._isWindowsTarget = value;
  }
  public resetIsWindowsTarget() {
    this._isWindowsTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWindowsTargetInput() {
    return this._isWindowsTarget;
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // oracle_base - computed: false, optional: true, required: false
  private _oracleBase?: string; 
  public get oracleBase() {
    return this.getStringAttribute('oracle_base');
  }
  public set oracleBase(value: string) {
    this._oracleBase = value;
  }
  public resetOracleBase() {
    this._oracleBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleBaseInput() {
    return this._oracleBase;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // repositories - computed: true, optional: false, required: false
  private _repositories = new EnvironmentRepositoriesList(this, "repositories", false);
  public get repositories() {
    return this._repositories;
  }

  // staging_environment - computed: false, optional: true, required: false
  private _stagingEnvironment?: string; 
  public get stagingEnvironment() {
    return this.getStringAttribute('staging_environment');
  }
  public set stagingEnvironment(value: string) {
    this._stagingEnvironment = value;
  }
  public resetStagingEnvironment() {
    this._stagingEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingEnvironmentInput() {
    return this._stagingEnvironment;
  }

  // toolkit_path - computed: false, optional: true, required: false
  private _toolkitPath?: string; 
  public get toolkitPath() {
    return this.getStringAttribute('toolkit_path');
  }
  public set toolkitPath(value: string) {
    this._toolkitPath = value;
  }
  public resetToolkitPath() {
    this._toolkitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolkitPathInput() {
    return this._toolkitPath;
  }

  // use_engine_public_key - computed: false, optional: true, required: false
  private _useEnginePublicKey?: boolean | cdktf.IResolvable; 
  public get useEnginePublicKey() {
    return this.getBooleanAttribute('use_engine_public_key');
  }
  public set useEnginePublicKey(value: boolean | cdktf.IResolvable) {
    this._useEnginePublicKey = value;
  }
  public resetUseEnginePublicKey() {
    this._useEnginePublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnginePublicKeyInput() {
    return this._useEnginePublicKey;
  }

  // use_kerberos_authentication - computed: false, optional: true, required: false
  private _useKerberosAuthentication?: boolean | cdktf.IResolvable; 
  public get useKerberosAuthentication() {
    return this.getBooleanAttribute('use_kerberos_authentication');
  }
  public set useKerberosAuthentication(value: boolean | cdktf.IResolvable) {
    this._useKerberosAuthentication = value;
  }
  public resetUseKerberosAuthentication() {
    this._useKerberosAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKerberosAuthenticationInput() {
    return this._useKerberosAuthentication;
  }

  // user_ref - computed: true, optional: false, required: false
  public get userRef() {
    return this.getStringAttribute('user_ref');
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }

  // version - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: true, required: false
  private _hosts = new EnvironmentHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: EnvironmentHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new EnvironmentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EnvironmentTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_provisioning: cdktf.booleanToTerraform(this._allowProvisioning),
      ase_db_cyberark_vault_query_string: cdktf.stringToTerraform(this._aseDbCyberarkVaultQueryString),
      ase_db_hashicorp_vault_engine: cdktf.stringToTerraform(this._aseDbHashicorpVaultEngine),
      ase_db_hashicorp_vault_secret_key: cdktf.stringToTerraform(this._aseDbHashicorpVaultSecretKey),
      ase_db_hashicorp_vault_secret_path: cdktf.stringToTerraform(this._aseDbHashicorpVaultSecretPath),
      ase_db_hashicorp_vault_username_key: cdktf.stringToTerraform(this._aseDbHashicorpVaultUsernameKey),
      ase_db_password: cdktf.stringToTerraform(this._aseDbPassword),
      ase_db_use_kerberos_authentication: cdktf.booleanToTerraform(this._aseDbUseKerberosAuthentication),
      ase_db_username: cdktf.stringToTerraform(this._aseDbUsername),
      ase_db_vault: cdktf.stringToTerraform(this._aseDbVault),
      bits: cdktf.numberToTerraform(this._bits),
      cluster_home: cdktf.stringToTerraform(this._clusterHome),
      connector_port: cdktf.numberToTerraform(this._connectorPort),
      cyberark_vault_query_string: cdktf.stringToTerraform(this._cyberarkVaultQueryString),
      database_type: cdktf.stringToTerraform(this._databaseType),
      description: cdktf.stringToTerraform(this._description),
      dsp_keystore_alias: cdktf.stringToTerraform(this._dspKeystoreAlias),
      dsp_keystore_password: cdktf.stringToTerraform(this._dspKeystorePassword),
      dsp_keystore_path: cdktf.stringToTerraform(this._dspKeystorePath),
      dsp_truststore_password: cdktf.stringToTerraform(this._dspTruststorePassword),
      dsp_truststore_path: cdktf.stringToTerraform(this._dspTruststorePath),
      engine_id: cdktf.stringToTerraform(this._engineId),
      hashicorp_vault_engine: cdktf.stringToTerraform(this._hashicorpVaultEngine),
      hashicorp_vault_secret_key: cdktf.stringToTerraform(this._hashicorpVaultSecretKey),
      hashicorp_vault_secret_path: cdktf.stringToTerraform(this._hashicorpVaultSecretPath),
      hashicorp_vault_username_key: cdktf.stringToTerraform(this._hashicorpVaultUsernameKey),
      ignore_tag_changes: cdktf.booleanToTerraform(this._ignoreTagChanges),
      is_cluster: cdktf.booleanToTerraform(this._isCluster),
      is_replica: cdktf.booleanToTerraform(this._isReplica),
      is_staging: cdktf.booleanToTerraform(this._isStaging),
      is_target: cdktf.booleanToTerraform(this._isTarget),
      is_windows_target: cdktf.booleanToTerraform(this._isWindowsTarget),
      name: cdktf.stringToTerraform(this._name),
      oracle_base: cdktf.stringToTerraform(this._oracleBase),
      os_type: cdktf.stringToTerraform(this._osType),
      password: cdktf.stringToTerraform(this._password),
      staging_environment: cdktf.stringToTerraform(this._stagingEnvironment),
      toolkit_path: cdktf.stringToTerraform(this._toolkitPath),
      use_engine_public_key: cdktf.booleanToTerraform(this._useEnginePublicKey),
      use_kerberos_authentication: cdktf.booleanToTerraform(this._useKerberosAuthentication),
      username: cdktf.stringToTerraform(this._username),
      vault: cdktf.stringToTerraform(this._vault),
      version: cdktf.stringToTerraform(this._version),
      hosts: cdktf.listMapper(environmentHostsToTerraform, true)(this._hosts.internalValue),
      tags: cdktf.listMapper(environmentTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_provisioning: {
        value: cdktf.booleanToHclTerraform(this._allowProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ase_db_cyberark_vault_query_string: {
        value: cdktf.stringToHclTerraform(this._aseDbCyberarkVaultQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_hashicorp_vault_engine: {
        value: cdktf.stringToHclTerraform(this._aseDbHashicorpVaultEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_hashicorp_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._aseDbHashicorpVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_hashicorp_vault_secret_path: {
        value: cdktf.stringToHclTerraform(this._aseDbHashicorpVaultSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_hashicorp_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._aseDbHashicorpVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_password: {
        value: cdktf.stringToHclTerraform(this._aseDbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_use_kerberos_authentication: {
        value: cdktf.booleanToHclTerraform(this._aseDbUseKerberosAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ase_db_username: {
        value: cdktf.stringToHclTerraform(this._aseDbUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ase_db_vault: {
        value: cdktf.stringToHclTerraform(this._aseDbVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bits: {
        value: cdktf.numberToHclTerraform(this._bits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_home: {
        value: cdktf.stringToHclTerraform(this._clusterHome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_port: {
        value: cdktf.numberToHclTerraform(this._connectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cyberark_vault_query_string: {
        value: cdktf.stringToHclTerraform(this._cyberarkVaultQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
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
      dsp_keystore_alias: {
        value: cdktf.stringToHclTerraform(this._dspKeystoreAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsp_keystore_password: {
        value: cdktf.stringToHclTerraform(this._dspKeystorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsp_keystore_path: {
        value: cdktf.stringToHclTerraform(this._dspKeystorePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsp_truststore_password: {
        value: cdktf.stringToHclTerraform(this._dspTruststorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsp_truststore_path: {
        value: cdktf.stringToHclTerraform(this._dspTruststorePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_engine: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_secret_path: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_tag_changes: {
        value: cdktf.booleanToHclTerraform(this._ignoreTagChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cluster: {
        value: cdktf.booleanToHclTerraform(this._isCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_replica: {
        value: cdktf.booleanToHclTerraform(this._isReplica),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_staging: {
        value: cdktf.booleanToHclTerraform(this._isStaging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_target: {
        value: cdktf.booleanToHclTerraform(this._isTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_windows_target: {
        value: cdktf.booleanToHclTerraform(this._isWindowsTarget),
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
      oracle_base: {
        value: cdktf.stringToHclTerraform(this._oracleBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_environment: {
        value: cdktf.stringToHclTerraform(this._stagingEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toolkit_path: {
        value: cdktf.stringToHclTerraform(this._toolkitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_engine_public_key: {
        value: cdktf.booleanToHclTerraform(this._useEnginePublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_kerberos_authentication: {
        value: cdktf.booleanToHclTerraform(this._useKerberosAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault: {
        value: cdktf.stringToHclTerraform(this._vault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(environmentHostsToHclTerraform, true)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentHostsList",
      },
      tags: {
        value: cdktf.listMapperHcl(environmentTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
