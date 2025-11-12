// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventEmailConfigUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#id EventEmailConfigUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#parameters EventEmailConfigUpdate#parameters}
  */
  readonly parameters: EventEmailConfigUpdateParameters;
}
export interface EventEmailConfigUpdateItem {
}

export function eventEmailConfigUpdateItemToTerraform(struct?: EventEmailConfigUpdateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventEmailConfigUpdateItemToHclTerraform(struct?: EventEmailConfigUpdateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventEmailConfigUpdateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventEmailConfigUpdateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventEmailConfigUpdateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_uri - computed: true, optional: false, required: false
  public get statusUri() {
    return this.getStringAttribute('status_uri');
  }
}

export class EventEmailConfigUpdateItemList extends cdktf.ComplexList {

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
  public get(index: number): EventEmailConfigUpdateItemOutputReference {
    return new EventEmailConfigUpdateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventEmailConfigUpdateParametersPrimarySmtPConfig {
  /**
  * Host Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#host_name EventEmailConfigUpdate#host_name}
  */
  readonly hostName?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#password EventEmailConfigUpdate#password}
  */
  readonly password?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#port EventEmailConfigUpdate#port}
  */
  readonly port?: string;
  /**
  * User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#user_name EventEmailConfigUpdate#user_name}
  */
  readonly userName?: string;
}

export function eventEmailConfigUpdateParametersPrimarySmtPConfigToTerraform(struct?: EventEmailConfigUpdateParametersPrimarySmtPConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function eventEmailConfigUpdateParametersPrimarySmtPConfigToHclTerraform(struct?: EventEmailConfigUpdateParametersPrimarySmtPConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventEmailConfigUpdateParametersPrimarySmtPConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventEmailConfigUpdateParametersPrimarySmtPConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventEmailConfigUpdateParametersPrimarySmtPConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._password = undefined;
      this._port = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._password = value.password;
      this._port = value.port;
      this._userName = value.userName;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class EventEmailConfigUpdateParametersPrimarySmtPConfigList extends cdktf.ComplexList {
  public internalValue? : EventEmailConfigUpdateParametersPrimarySmtPConfig[] | cdktf.IResolvable

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
  public get(index: number): EventEmailConfigUpdateParametersPrimarySmtPConfigOutputReference {
    return new EventEmailConfigUpdateParametersPrimarySmtPConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventEmailConfigUpdateParametersSecondarySmtPConfig {
  /**
  * Host Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#host_name EventEmailConfigUpdate#host_name}
  */
  readonly hostName?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#password EventEmailConfigUpdate#password}
  */
  readonly password?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#port EventEmailConfigUpdate#port}
  */
  readonly port?: string;
  /**
  * User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#user_name EventEmailConfigUpdate#user_name}
  */
  readonly userName?: string;
}

export function eventEmailConfigUpdateParametersSecondarySmtPConfigToTerraform(struct?: EventEmailConfigUpdateParametersSecondarySmtPConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function eventEmailConfigUpdateParametersSecondarySmtPConfigToHclTerraform(struct?: EventEmailConfigUpdateParametersSecondarySmtPConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventEmailConfigUpdateParametersSecondarySmtPConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventEmailConfigUpdateParametersSecondarySmtPConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventEmailConfigUpdateParametersSecondarySmtPConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._password = undefined;
      this._port = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._password = value.password;
      this._port = value.port;
      this._userName = value.userName;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class EventEmailConfigUpdateParametersSecondarySmtPConfigList extends cdktf.ComplexList {
  public internalValue? : EventEmailConfigUpdateParametersSecondarySmtPConfig[] | cdktf.IResolvable

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
  public get(index: number): EventEmailConfigUpdateParametersSecondarySmtPConfigOutputReference {
    return new EventEmailConfigUpdateParametersSecondarySmtPConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventEmailConfigUpdateParameters {
  /**
  * Required only for update email configuration
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#email_config_id EventEmailConfigUpdate#email_config_id}
  */
  readonly emailConfigId?: string;
  /**
  * From Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#from_email EventEmailConfigUpdate#from_email}
  */
  readonly fromEmail?: string;
  /**
  * Subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#subject EventEmailConfigUpdate#subject}
  */
  readonly subject?: string;
  /**
  * To Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#to_email EventEmailConfigUpdate#to_email}
  */
  readonly toEmail?: string;
  /**
  * primary_smt_p_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#primary_smt_p_config EventEmailConfigUpdate#primary_smt_p_config}
  */
  readonly primarySmtPConfig?: EventEmailConfigUpdateParametersPrimarySmtPConfig[] | cdktf.IResolvable;
  /**
  * secondary_smt_p_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#secondary_smt_p_config EventEmailConfigUpdate#secondary_smt_p_config}
  */
  readonly secondarySmtPConfig?: EventEmailConfigUpdateParametersSecondarySmtPConfig[] | cdktf.IResolvable;
}

export function eventEmailConfigUpdateParametersToTerraform(struct?: EventEmailConfigUpdateParametersOutputReference | EventEmailConfigUpdateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_config_id: cdktf.stringToTerraform(struct!.emailConfigId),
    from_email: cdktf.stringToTerraform(struct!.fromEmail),
    subject: cdktf.stringToTerraform(struct!.subject),
    to_email: cdktf.stringToTerraform(struct!.toEmail),
    primary_smt_p_config: cdktf.listMapper(eventEmailConfigUpdateParametersPrimarySmtPConfigToTerraform, true)(struct!.primarySmtPConfig),
    secondary_smt_p_config: cdktf.listMapper(eventEmailConfigUpdateParametersSecondarySmtPConfigToTerraform, true)(struct!.secondarySmtPConfig),
  }
}


export function eventEmailConfigUpdateParametersToHclTerraform(struct?: EventEmailConfigUpdateParametersOutputReference | EventEmailConfigUpdateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_config_id: {
      value: cdktf.stringToHclTerraform(struct!.emailConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email: {
      value: cdktf.stringToHclTerraform(struct!.fromEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_email: {
      value: cdktf.stringToHclTerraform(struct!.toEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_smt_p_config: {
      value: cdktf.listMapperHcl(eventEmailConfigUpdateParametersPrimarySmtPConfigToHclTerraform, true)(struct!.primarySmtPConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EventEmailConfigUpdateParametersPrimarySmtPConfigList",
    },
    secondary_smt_p_config: {
      value: cdktf.listMapperHcl(eventEmailConfigUpdateParametersSecondarySmtPConfigToHclTerraform, true)(struct!.secondarySmtPConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EventEmailConfigUpdateParametersSecondarySmtPConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventEmailConfigUpdateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventEmailConfigUpdateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailConfigId = this._emailConfigId;
    }
    if (this._fromEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmail = this._fromEmail;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._toEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEmail = this._toEmail;
    }
    if (this._primarySmtPConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySmtPConfig = this._primarySmtPConfig?.internalValue;
    }
    if (this._secondarySmtPConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySmtPConfig = this._secondarySmtPConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventEmailConfigUpdateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailConfigId = undefined;
      this._fromEmail = undefined;
      this._subject = undefined;
      this._toEmail = undefined;
      this._primarySmtPConfig.internalValue = undefined;
      this._secondarySmtPConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailConfigId = value.emailConfigId;
      this._fromEmail = value.fromEmail;
      this._subject = value.subject;
      this._toEmail = value.toEmail;
      this._primarySmtPConfig.internalValue = value.primarySmtPConfig;
      this._secondarySmtPConfig.internalValue = value.secondarySmtPConfig;
    }
  }

  // email_config_id - computed: false, optional: true, required: false
  private _emailConfigId?: string; 
  public get emailConfigId() {
    return this.getStringAttribute('email_config_id');
  }
  public set emailConfigId(value: string) {
    this._emailConfigId = value;
  }
  public resetEmailConfigId() {
    this._emailConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigIdInput() {
    return this._emailConfigId;
  }

  // from_email - computed: false, optional: true, required: false
  private _fromEmail?: string; 
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }
  public set fromEmail(value: string) {
    this._fromEmail = value;
  }
  public resetFromEmail() {
    this._fromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailInput() {
    return this._fromEmail;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // to_email - computed: false, optional: true, required: false
  private _toEmail?: string; 
  public get toEmail() {
    return this.getStringAttribute('to_email');
  }
  public set toEmail(value: string) {
    this._toEmail = value;
  }
  public resetToEmail() {
    this._toEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEmailInput() {
    return this._toEmail;
  }

  // primary_smt_p_config - computed: false, optional: true, required: false
  private _primarySmtPConfig = new EventEmailConfigUpdateParametersPrimarySmtPConfigList(this, "primary_smt_p_config", false);
  public get primarySmtPConfig() {
    return this._primarySmtPConfig;
  }
  public putPrimarySmtPConfig(value: EventEmailConfigUpdateParametersPrimarySmtPConfig[] | cdktf.IResolvable) {
    this._primarySmtPConfig.internalValue = value;
  }
  public resetPrimarySmtPConfig() {
    this._primarySmtPConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySmtPConfigInput() {
    return this._primarySmtPConfig.internalValue;
  }

  // secondary_smt_p_config - computed: false, optional: true, required: false
  private _secondarySmtPConfig = new EventEmailConfigUpdateParametersSecondarySmtPConfigList(this, "secondary_smt_p_config", false);
  public get secondarySmtPConfig() {
    return this._secondarySmtPConfig;
  }
  public putSecondarySmtPConfig(value: EventEmailConfigUpdateParametersSecondarySmtPConfig[] | cdktf.IResolvable) {
    this._secondarySmtPConfig.internalValue = value;
  }
  public resetSecondarySmtPConfig() {
    this._secondarySmtPConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySmtPConfigInput() {
    return this._secondarySmtPConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update dnacenter_event_email_config_update}
*/
export class EventEmailConfigUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_event_email_config_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventEmailConfigUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventEmailConfigUpdate to import
  * @param importFromId The id of the existing EventEmailConfigUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventEmailConfigUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_event_email_config_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/event_email_config_update dnacenter_event_email_config_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventEmailConfigUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: EventEmailConfigUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_event_email_config_update',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new EventEmailConfigUpdateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new EventEmailConfigUpdateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: EventEmailConfigUpdateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: eventEmailConfigUpdateParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: eventEmailConfigUpdateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventEmailConfigUpdateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
