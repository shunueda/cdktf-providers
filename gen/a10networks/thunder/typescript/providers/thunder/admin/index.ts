// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify an ACL to classify a trusted host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#access_list Admin#access_list}
  */
  readonly accessList?: number;
  /**
  * 'enable': Enable user; 'disable': Disable user;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#action Admin#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#id Admin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Config admin user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#passwd_string Admin#passwd_string}
  */
  readonly passwdString?: string;
  /**
  * Config admin user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#password_key Admin#password_key}
  */
  readonly passwordKey?: number;
  /**
  * 'read': Set read privilege; 'write': Set write privilege; 'hm': Set external health monitor script content operations privilege;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#privilege_global Admin#privilege_global}
  */
  readonly privilegeGlobal?: string;
  /**
  * Set shell root privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#privilege_shell_root Admin#privilege_shell_root}
  */
  readonly privilegeShellRoot?: number;
  /**
  * Set trusted network administrator can login in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#trusted_host Admin#trusted_host}
  */
  readonly trustedHost?: number;
  /**
  * ACL ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#trusted_host_acl_id Admin#trusted_host_acl_id}
  */
  readonly trustedHostAclId?: number;
  /**
  * Trusted IP Address with network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#trusted_host_cidr Admin#trusted_host_cidr}
  */
  readonly trustedHostCidr?: string;
  /**
  * System admin user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#user Admin#user}
  */
  readonly user: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#user_tag Admin#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#uuid Admin#uuid}
  */
  readonly uuid?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#access Admin#access}
  */
  readonly access?: AdminAccess;
  /**
  * aws_accesskey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#aws_accesskey Admin#aws_accesskey}
  */
  readonly awsAccesskey?: AdminAwsAccesskey;
  /**
  * azure_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#azure_cred Admin#azure_cred}
  */
  readonly azureCred?: AdminAzureCred;
  /**
  * cloud_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#cloud_cred Admin#cloud_cred}
  */
  readonly cloudCred?: AdminCloudCred;
  /**
  * gcp_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#gcp_cred Admin#gcp_cred}
  */
  readonly gcpCred?: AdminGcpCred;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#password Admin#password}
  */
  readonly password?: AdminPassword;
  /**
  * privilege_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#privilege_list Admin#privilege_list}
  */
  readonly privilegeList?: AdminPrivilegeListStruct[] | cdktf.IResolvable;
  /**
  * ssh_pubkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#ssh_pubkey Admin#ssh_pubkey}
  */
  readonly sshPubkey?: AdminSshPubkey;
}
export interface AdminAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#access_type Admin#access_type}
  */
  readonly accessType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#uuid Admin#uuid}
  */
  readonly uuid?: string;
}

export function adminAccessToTerraform(struct?: AdminAccessOutputReference | AdminAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function adminAccessToHclTerraform(struct?: AdminAccessOutputReference | AdminAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._uuid = value.uuid;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
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
}
export interface AdminAwsAccesskey {
  /**
  * Delete an authorized aws accesskey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#delete Admin#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#file_url Admin#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Import an aws-accesskey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import Admin#import}
  */
  readonly import?: number;
  /**
  * Show authorized aws accesskey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#show Admin#show}
  */
  readonly show?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#use_mgmt_port Admin#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function adminAwsAccesskeyToTerraform(struct?: AdminAwsAccesskeyOutputReference | AdminAwsAccesskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    import: cdktf.numberToTerraform(struct!.import),
    show: cdktf.numberToTerraform(struct!.show),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function adminAwsAccesskeyToHclTerraform(struct?: AdminAwsAccesskeyOutputReference | AdminAwsAccesskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.numberToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktf.numberToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminAwsAccesskeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminAwsAccesskey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminAwsAccesskey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._fileUrl = undefined;
      this._import = undefined;
      this._show = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._fileUrl = value.fileUrl;
      this._import = value.import;
      this._show = value.show;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // show - computed: false, optional: true, required: false
  private _show?: number; 
  public get show() {
    return this.getNumberAttribute('show');
  }
  public set show(value: number) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface AdminAzureCred {
  /**
  * Delete an authorized Azure credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#delete Admin#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#file_url Admin#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Import an azure-credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import Admin#import}
  */
  readonly import?: number;
  /**
  * Show authorized azure credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#show Admin#show}
  */
  readonly show?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#use_mgmt_port Admin#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function adminAzureCredToTerraform(struct?: AdminAzureCredOutputReference | AdminAzureCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    import: cdktf.numberToTerraform(struct!.import),
    show: cdktf.numberToTerraform(struct!.show),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function adminAzureCredToHclTerraform(struct?: AdminAzureCredOutputReference | AdminAzureCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.numberToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktf.numberToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminAzureCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminAzureCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminAzureCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._fileUrl = undefined;
      this._import = undefined;
      this._show = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._fileUrl = value.fileUrl;
      this._import = value.import;
      this._show = value.show;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // show - computed: false, optional: true, required: false
  private _show?: number; 
  public get show() {
    return this.getNumberAttribute('show');
  }
  public set show(value: number) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface AdminCloudCred {
  /**
  * Delete an authorized cloud credentials and cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#delete Admin#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#file_url Admin#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Import an Cloud-Cred and Cloud-Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import Admin#import}
  */
  readonly import?: number;
  /**
  * Show authorized cloud credentials and cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#show Admin#show}
  */
  readonly show?: number;
  /**
  * 'aws-cred': aws-cred; 'aws-config': aws-config; 'azure-cred': azure-cred; 'vmware-cred': vmware-cred;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#type Admin#type}
  */
  readonly type?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#use_mgmt_port Admin#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function adminCloudCredToTerraform(struct?: AdminCloudCredOutputReference | AdminCloudCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    import: cdktf.numberToTerraform(struct!.import),
    show: cdktf.numberToTerraform(struct!.show),
    type: cdktf.stringToTerraform(struct!.type),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function adminCloudCredToHclTerraform(struct?: AdminCloudCredOutputReference | AdminCloudCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.numberToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktf.numberToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminCloudCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminCloudCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminCloudCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._fileUrl = undefined;
      this._import = undefined;
      this._show = undefined;
      this._type = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._fileUrl = value.fileUrl;
      this._import = value.import;
      this._show = value.show;
      this._type = value.type;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // show - computed: false, optional: true, required: false
  private _show?: number; 
  public get show() {
    return this.getNumberAttribute('show');
  }
  public set show(value: number) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
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

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface AdminGcpCred {
  /**
  * Delete an authorized GCP credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#delete Admin#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#file_url Admin#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Import an GCP-credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import Admin#import}
  */
  readonly import?: number;
  /**
  * Show authorized GCP credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#show Admin#show}
  */
  readonly show?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#use_mgmt_port Admin#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function adminGcpCredToTerraform(struct?: AdminGcpCredOutputReference | AdminGcpCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    import: cdktf.numberToTerraform(struct!.import),
    show: cdktf.numberToTerraform(struct!.show),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function adminGcpCredToHclTerraform(struct?: AdminGcpCredOutputReference | AdminGcpCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.numberToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktf.numberToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminGcpCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminGcpCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminGcpCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._fileUrl = undefined;
      this._import = undefined;
      this._show = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._fileUrl = value.fileUrl;
      this._import = value.import;
      this._show = value.show;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // show - computed: false, optional: true, required: false
  private _show?: number; 
  public get show() {
    return this.getNumberAttribute('show');
  }
  public set show(value: number) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface AdminPassword {
  /**
  * Config admin user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#password_in_module Admin#password_in_module}
  */
  readonly passwordInModule?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#uuid Admin#uuid}
  */
  readonly uuid?: string;
}

export function adminPasswordToTerraform(struct?: AdminPasswordOutputReference | AdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_in_module: cdktf.stringToTerraform(struct!.passwordInModule),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function adminPasswordToHclTerraform(struct?: AdminPasswordOutputReference | AdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_in_module: {
      value: cdktf.stringToHclTerraform(struct!.passwordInModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordInModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordInModule = this._passwordInModule;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordInModule = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordInModule = value.passwordInModule;
      this._uuid = value.uuid;
    }
  }

  // password_in_module - computed: false, optional: true, required: false
  private _passwordInModule?: string; 
  public get passwordInModule() {
    return this.getStringAttribute('password_in_module');
  }
  public set passwordInModule(value: string) {
    this._passwordInModule = value;
  }
  public resetPasswordInModule() {
    this._passwordInModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInModuleInput() {
    return this._passwordInModule;
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
}
export interface AdminPrivilegeListStruct {
  /**
  * Partition Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#partition_name Admin#partition_name}
  */
  readonly partitionName?: string;
  /**
  * 'partition-enable-disable': Set per-partition enable/disable privilege; 'partition-read': Set per-partition read privilege; 'partition-write': Set per-partition write privilege;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#privilege_partition Admin#privilege_partition}
  */
  readonly privilegePartition?: string;
}

export function adminPrivilegeListStructToTerraform(struct?: AdminPrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    privilege_partition: cdktf.stringToTerraform(struct!.privilegePartition),
  }
}


export function adminPrivilegeListStructToHclTerraform(struct?: AdminPrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_partition: {
      value: cdktf.stringToHclTerraform(struct!.privilegePartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminPrivilegeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdminPrivilegeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._privilegePartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegePartition = this._privilegePartition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminPrivilegeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionName = undefined;
      this._privilegePartition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionName = value.partitionName;
      this._privilegePartition = value.privilegePartition;
    }
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // privilege_partition - computed: false, optional: true, required: false
  private _privilegePartition?: string; 
  public get privilegePartition() {
    return this.getStringAttribute('privilege_partition');
  }
  public set privilegePartition(value: string) {
    this._privilegePartition = value;
  }
  public resetPrivilegePartition() {
    this._privilegePartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegePartitionInput() {
    return this._privilegePartition;
  }
}

export class AdminPrivilegeListStructList extends cdktf.ComplexList {
  public internalValue? : AdminPrivilegeListStruct[] | cdktf.IResolvable

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
  public get(index: number): AdminPrivilegeListStructOutputReference {
    return new AdminPrivilegeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdminSshPubkey {
  /**
  * Delete an authorized public key (SSH key index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#delete Admin#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#file_url Admin#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Import an authorized public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import Admin#import}
  */
  readonly import?: number;
  /**
  * List all authorized public keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#list Admin#list}
  */
  readonly list?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#use_mgmt_port Admin#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function adminSshPubkeyToTerraform(struct?: AdminSshPubkeyOutputReference | AdminSshPubkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    import: cdktf.numberToTerraform(struct!.import),
    list: cdktf.numberToTerraform(struct!.list),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function adminSshPubkeyToHclTerraform(struct?: AdminSshPubkeyOutputReference | AdminSshPubkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.numberToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list: {
      value: cdktf.numberToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminSshPubkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminSshPubkey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminSshPubkey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._fileUrl = undefined;
      this._import = undefined;
      this._list = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._fileUrl = value.fileUrl;
      this._import = value.import;
      this._list = value.list;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // list - computed: false, optional: true, required: false
  private _list?: number; 
  public get list() {
    return this.getNumberAttribute('list');
  }
  public set list(value: number) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin thunder_admin}
*/
export class Admin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Admin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Admin to import
  * @param importFromId The id of the existing Admin that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Admin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/admin thunder_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminConfig
  */
  public constructor(scope: Construct, id: string, config: AdminConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_admin',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessList = config.accessList;
    this._action = config.action;
    this._id = config.id;
    this._passwdString = config.passwdString;
    this._passwordKey = config.passwordKey;
    this._privilegeGlobal = config.privilegeGlobal;
    this._privilegeShellRoot = config.privilegeShellRoot;
    this._trustedHost = config.trustedHost;
    this._trustedHostAclId = config.trustedHostAclId;
    this._trustedHostCidr = config.trustedHostCidr;
    this._user = config.user;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._access.internalValue = config.access;
    this._awsAccesskey.internalValue = config.awsAccesskey;
    this._azureCred.internalValue = config.azureCred;
    this._cloudCred.internalValue = config.cloudCred;
    this._gcpCred.internalValue = config.gcpCred;
    this._password.internalValue = config.password;
    this._privilegeList.internalValue = config.privilegeList;
    this._sshPubkey.internalValue = config.sshPubkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // passwd_string - computed: false, optional: true, required: false
  private _passwdString?: string; 
  public get passwdString() {
    return this.getStringAttribute('passwd_string');
  }
  public set passwdString(value: string) {
    this._passwdString = value;
  }
  public resetPasswdString() {
    this._passwdString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdStringInput() {
    return this._passwdString;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: number; 
  public get passwordKey() {
    return this.getNumberAttribute('password_key');
  }
  public set passwordKey(value: number) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // privilege_global - computed: false, optional: true, required: false
  private _privilegeGlobal?: string; 
  public get privilegeGlobal() {
    return this.getStringAttribute('privilege_global');
  }
  public set privilegeGlobal(value: string) {
    this._privilegeGlobal = value;
  }
  public resetPrivilegeGlobal() {
    this._privilegeGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeGlobalInput() {
    return this._privilegeGlobal;
  }

  // privilege_shell_root - computed: false, optional: true, required: false
  private _privilegeShellRoot?: number; 
  public get privilegeShellRoot() {
    return this.getNumberAttribute('privilege_shell_root');
  }
  public set privilegeShellRoot(value: number) {
    this._privilegeShellRoot = value;
  }
  public resetPrivilegeShellRoot() {
    this._privilegeShellRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeShellRootInput() {
    return this._privilegeShellRoot;
  }

  // trusted_host - computed: false, optional: true, required: false
  private _trustedHost?: number; 
  public get trustedHost() {
    return this.getNumberAttribute('trusted_host');
  }
  public set trustedHost(value: number) {
    this._trustedHost = value;
  }
  public resetTrustedHost() {
    this._trustedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostInput() {
    return this._trustedHost;
  }

  // trusted_host_acl_id - computed: false, optional: true, required: false
  private _trustedHostAclId?: number; 
  public get trustedHostAclId() {
    return this.getNumberAttribute('trusted_host_acl_id');
  }
  public set trustedHostAclId(value: number) {
    this._trustedHostAclId = value;
  }
  public resetTrustedHostAclId() {
    this._trustedHostAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostAclIdInput() {
    return this._trustedHostAclId;
  }

  // trusted_host_cidr - computed: false, optional: true, required: false
  private _trustedHostCidr?: string; 
  public get trustedHostCidr() {
    return this.getStringAttribute('trusted_host_cidr');
  }
  public set trustedHostCidr(value: string) {
    this._trustedHostCidr = value;
  }
  public resetTrustedHostCidr() {
    this._trustedHostCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostCidrInput() {
    return this._trustedHostCidr;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // access - computed: false, optional: true, required: false
  private _access = new AdminAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: AdminAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // aws_accesskey - computed: false, optional: true, required: false
  private _awsAccesskey = new AdminAwsAccesskeyOutputReference(this, "aws_accesskey");
  public get awsAccesskey() {
    return this._awsAccesskey;
  }
  public putAwsAccesskey(value: AdminAwsAccesskey) {
    this._awsAccesskey.internalValue = value;
  }
  public resetAwsAccesskey() {
    this._awsAccesskey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccesskeyInput() {
    return this._awsAccesskey.internalValue;
  }

  // azure_cred - computed: false, optional: true, required: false
  private _azureCred = new AdminAzureCredOutputReference(this, "azure_cred");
  public get azureCred() {
    return this._azureCred;
  }
  public putAzureCred(value: AdminAzureCred) {
    this._azureCred.internalValue = value;
  }
  public resetAzureCred() {
    this._azureCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredInput() {
    return this._azureCred.internalValue;
  }

  // cloud_cred - computed: false, optional: true, required: false
  private _cloudCred = new AdminCloudCredOutputReference(this, "cloud_cred");
  public get cloudCred() {
    return this._cloudCred;
  }
  public putCloudCred(value: AdminCloudCred) {
    this._cloudCred.internalValue = value;
  }
  public resetCloudCred() {
    this._cloudCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredInput() {
    return this._cloudCred.internalValue;
  }

  // gcp_cred - computed: false, optional: true, required: false
  private _gcpCred = new AdminGcpCredOutputReference(this, "gcp_cred");
  public get gcpCred() {
    return this._gcpCred;
  }
  public putGcpCred(value: AdminGcpCred) {
    this._gcpCred.internalValue = value;
  }
  public resetGcpCred() {
    this._gcpCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredInput() {
    return this._gcpCred.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new AdminPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: AdminPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // privilege_list - computed: false, optional: true, required: false
  private _privilegeList = new AdminPrivilegeListStructList(this, "privilege_list", false);
  public get privilegeList() {
    return this._privilegeList;
  }
  public putPrivilegeList(value: AdminPrivilegeListStruct[] | cdktf.IResolvable) {
    this._privilegeList.internalValue = value;
  }
  public resetPrivilegeList() {
    this._privilegeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeListInput() {
    return this._privilegeList.internalValue;
  }

  // ssh_pubkey - computed: false, optional: true, required: false
  private _sshPubkey = new AdminSshPubkeyOutputReference(this, "ssh_pubkey");
  public get sshPubkey() {
    return this._sshPubkey;
  }
  public putSshPubkey(value: AdminSshPubkey) {
    this._sshPubkey.internalValue = value;
  }
  public resetSshPubkey() {
    this._sshPubkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPubkeyInput() {
    return this._sshPubkey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_list: cdktf.numberToTerraform(this._accessList),
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      passwd_string: cdktf.stringToTerraform(this._passwdString),
      password_key: cdktf.numberToTerraform(this._passwordKey),
      privilege_global: cdktf.stringToTerraform(this._privilegeGlobal),
      privilege_shell_root: cdktf.numberToTerraform(this._privilegeShellRoot),
      trusted_host: cdktf.numberToTerraform(this._trustedHost),
      trusted_host_acl_id: cdktf.numberToTerraform(this._trustedHostAclId),
      trusted_host_cidr: cdktf.stringToTerraform(this._trustedHostCidr),
      user: cdktf.stringToTerraform(this._user),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      access: adminAccessToTerraform(this._access.internalValue),
      aws_accesskey: adminAwsAccesskeyToTerraform(this._awsAccesskey.internalValue),
      azure_cred: adminAzureCredToTerraform(this._azureCred.internalValue),
      cloud_cred: adminCloudCredToTerraform(this._cloudCred.internalValue),
      gcp_cred: adminGcpCredToTerraform(this._gcpCred.internalValue),
      password: adminPasswordToTerraform(this._password.internalValue),
      privilege_list: cdktf.listMapper(adminPrivilegeListStructToTerraform, true)(this._privilegeList.internalValue),
      ssh_pubkey: adminSshPubkeyToTerraform(this._sshPubkey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_list: {
        value: cdktf.numberToHclTerraform(this._accessList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      passwd_string: {
        value: cdktf.stringToHclTerraform(this._passwdString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_key: {
        value: cdktf.numberToHclTerraform(this._passwordKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      privilege_global: {
        value: cdktf.stringToHclTerraform(this._privilegeGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_shell_root: {
        value: cdktf.numberToHclTerraform(this._privilegeShellRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_host: {
        value: cdktf.numberToHclTerraform(this._trustedHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_host_acl_id: {
        value: cdktf.numberToHclTerraform(this._trustedHostAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_host_cidr: {
        value: cdktf.stringToHclTerraform(this._trustedHostCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      access: {
        value: adminAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminAccessList",
      },
      aws_accesskey: {
        value: adminAwsAccesskeyToHclTerraform(this._awsAccesskey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminAwsAccesskeyList",
      },
      azure_cred: {
        value: adminAzureCredToHclTerraform(this._azureCred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminAzureCredList",
      },
      cloud_cred: {
        value: adminCloudCredToHclTerraform(this._cloudCred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminCloudCredList",
      },
      gcp_cred: {
        value: adminGcpCredToHclTerraform(this._gcpCred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminGcpCredList",
      },
      password: {
        value: adminPasswordToHclTerraform(this._password.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminPasswordList",
      },
      privilege_list: {
        value: cdktf.listMapperHcl(adminPrivilegeListStructToHclTerraform, true)(this._privilegeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminPrivilegeListStructList",
      },
      ssh_pubkey: {
        value: adminSshPubkeyToHclTerraform(this._sshPubkey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminSshPubkeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
