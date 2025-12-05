// https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The KQL Database creation configuration.
  * 
  * Any changes to this configuration will result in recreation of the KQL Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#configuration KqlDatabase#configuration}
  */
  readonly configuration?: KqlDatabaseConfiguration;
  /**
  * Definition parts. Read more about [KQL Database definition part paths](https://learn.microsoft.com/rest/api/fabric/articles/item-management/definitions/kql-database-definition). Accepted path keys: **Default** format: `DatabaseProperties.json`, `DatabaseSchema.kql`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#definition KqlDatabase#definition}
  */
  readonly definition?: { [key: string]: KqlDatabaseDefinition } | cdktf.IResolvable;
  /**
  * Update definition on change of source content. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#definition_update_enabled KqlDatabase#definition_update_enabled}
  */
  readonly definitionUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * The KQL Database description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#description KqlDatabase#description}
  */
  readonly description?: string;
  /**
  * The KQL Database display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#display_name KqlDatabase#display_name}
  */
  readonly displayName: string;
  /**
  * The Folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#folder_id KqlDatabase#folder_id}
  */
  readonly folderId?: string;
  /**
  * The KQL Database format. Possible values: `Default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#format KqlDatabase#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#timeouts KqlDatabase#timeouts}
  */
  readonly timeouts?: KqlDatabaseTimeouts;
  /**
  * The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#workspace_id KqlDatabase#workspace_id}
  */
  readonly workspaceId: string;
}
export interface KqlDatabaseConfiguration {
  /**
  * The type of the KQL database. Accepted values: `ReadWrite`, `Shortcut`.
  * 
  * `ReadWrite` Allows read and write operations on the database.
  * 
  * `Shortcut` A shortcut is an embedded reference allowing read only operations on a source database. The source can be in the same or different tenants, either in an Azure Data Explorer cluster or a Fabric Eventhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#database_type KqlDatabase#database_type}
  */
  readonly databaseType: string;
  /**
  * Parent Eventhouse ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#eventhouse_id KqlDatabase#eventhouse_id}
  */
  readonly eventhouseId: string;
  /**
  * Invitation token to follow the source database. Only allowed when `database_type` is `Shortcut`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#invitation_token KqlDatabase#invitation_token}
  */
  readonly invitationToken?: string;
  /**
  * Invitation token (WO) to follow the source database. Only allowed when `database_type` is `Shortcut`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#invitation_token_wo KqlDatabase#invitation_token_wo}
  */
  readonly invitationTokenWo?: string;
  /**
  * The version of the `invitation_token_wo`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#invitation_token_wo_version KqlDatabase#invitation_token_wo_version}
  */
  readonly invitationTokenWoVersion?: number;
  /**
  * The URI of the source Eventhouse or Azure Data Explorer cluster. Only allowed when `database_type` is `Shortcut`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#source_cluster_uri KqlDatabase#source_cluster_uri}
  */
  readonly sourceClusterUri?: string;
  /**
  * The name of the database to follow in the source Eventhouse or Azure Data Explorer cluster. Only allowed when `database_type` is `Shortcut`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#source_database_name KqlDatabase#source_database_name}
  */
  readonly sourceDatabaseName?: string;
}

export function kqlDatabaseConfigurationToTerraform(struct?: KqlDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    eventhouse_id: cdktf.stringToTerraform(struct!.eventhouseId),
    invitation_token: cdktf.stringToTerraform(struct!.invitationToken),
    invitation_token_wo: cdktf.stringToTerraform(struct!.invitationTokenWo),
    invitation_token_wo_version: cdktf.numberToTerraform(struct!.invitationTokenWoVersion),
    source_cluster_uri: cdktf.stringToTerraform(struct!.sourceClusterUri),
    source_database_name: cdktf.stringToTerraform(struct!.sourceDatabaseName),
  }
}


export function kqlDatabaseConfigurationToHclTerraform(struct?: KqlDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eventhouse_id: {
      value: cdktf.stringToHclTerraform(struct!.eventhouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invitation_token: {
      value: cdktf.stringToHclTerraform(struct!.invitationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invitation_token_wo: {
      value: cdktf.stringToHclTerraform(struct!.invitationTokenWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invitation_token_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.invitationTokenWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_cluster_uri: {
      value: cdktf.stringToHclTerraform(struct!.sourceClusterUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_database_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KqlDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KqlDatabaseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._eventhouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventhouseId = this._eventhouseId;
    }
    if (this._invitationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.invitationToken = this._invitationToken;
    }
    if (this._invitationTokenWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.invitationTokenWo = this._invitationTokenWo;
    }
    if (this._invitationTokenWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.invitationTokenWoVersion = this._invitationTokenWoVersion;
    }
    if (this._sourceClusterUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceClusterUri = this._sourceClusterUri;
    }
    if (this._sourceDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDatabaseName = this._sourceDatabaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KqlDatabaseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseType = undefined;
      this._eventhouseId = undefined;
      this._invitationToken = undefined;
      this._invitationTokenWo = undefined;
      this._invitationTokenWoVersion = undefined;
      this._sourceClusterUri = undefined;
      this._sourceDatabaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseType = value.databaseType;
      this._eventhouseId = value.eventhouseId;
      this._invitationToken = value.invitationToken;
      this._invitationTokenWo = value.invitationTokenWo;
      this._invitationTokenWoVersion = value.invitationTokenWoVersion;
      this._sourceClusterUri = value.sourceClusterUri;
      this._sourceDatabaseName = value.sourceDatabaseName;
    }
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // eventhouse_id - computed: false, optional: false, required: true
  private _eventhouseId?: string; 
  public get eventhouseId() {
    return this.getStringAttribute('eventhouse_id');
  }
  public set eventhouseId(value: string) {
    this._eventhouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhouseIdInput() {
    return this._eventhouseId;
  }

  // invitation_token - computed: false, optional: true, required: false
  private _invitationToken?: string; 
  public get invitationToken() {
    return this.getStringAttribute('invitation_token');
  }
  public set invitationToken(value: string) {
    this._invitationToken = value;
  }
  public resetInvitationToken() {
    this._invitationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationTokenInput() {
    return this._invitationToken;
  }

  // invitation_token_wo - computed: false, optional: true, required: false
  private _invitationTokenWo?: string; 
  public get invitationTokenWo() {
    return this.getStringAttribute('invitation_token_wo');
  }
  public set invitationTokenWo(value: string) {
    this._invitationTokenWo = value;
  }
  public resetInvitationTokenWo() {
    this._invitationTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationTokenWoInput() {
    return this._invitationTokenWo;
  }

  // invitation_token_wo_version - computed: false, optional: true, required: false
  private _invitationTokenWoVersion?: number; 
  public get invitationTokenWoVersion() {
    return this.getNumberAttribute('invitation_token_wo_version');
  }
  public set invitationTokenWoVersion(value: number) {
    this._invitationTokenWoVersion = value;
  }
  public resetInvitationTokenWoVersion() {
    this._invitationTokenWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationTokenWoVersionInput() {
    return this._invitationTokenWoVersion;
  }

  // source_cluster_uri - computed: false, optional: true, required: false
  private _sourceClusterUri?: string; 
  public get sourceClusterUri() {
    return this.getStringAttribute('source_cluster_uri');
  }
  public set sourceClusterUri(value: string) {
    this._sourceClusterUri = value;
  }
  public resetSourceClusterUri() {
    this._sourceClusterUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterUriInput() {
    return this._sourceClusterUri;
  }

  // source_database_name - computed: false, optional: true, required: false
  private _sourceDatabaseName?: string; 
  public get sourceDatabaseName() {
    return this.getStringAttribute('source_database_name');
  }
  public set sourceDatabaseName(value: string) {
    this._sourceDatabaseName = value;
  }
  public resetSourceDatabaseName() {
    this._sourceDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseNameInput() {
    return this._sourceDatabaseName;
  }
}
export interface KqlDatabaseDefinitionParameters {
  /**
  * The find value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#find KqlDatabase#find}
  */
  readonly find: string;
  /**
  * Processing type of the parameters. Possible values: `JsonPathReplace`, `TextReplace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#type KqlDatabase#type}
  */
  readonly type: string;
  /**
  * The value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#value KqlDatabase#value}
  */
  readonly value: string;
}

export function kqlDatabaseDefinitionParametersToTerraform(struct?: KqlDatabaseDefinitionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    find: cdktf.stringToTerraform(struct!.find),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kqlDatabaseDefinitionParametersToHclTerraform(struct?: KqlDatabaseDefinitionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    find: {
      value: cdktf.stringToHclTerraform(struct!.find),
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

export class KqlDatabaseDefinitionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KqlDatabaseDefinitionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._find !== undefined) {
      hasAnyValues = true;
      internalValueResult.find = this._find;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KqlDatabaseDefinitionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._find = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._find = value.find;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // find - computed: false, optional: false, required: true
  private _find?: string; 
  public get find() {
    return this.getStringAttribute('find');
  }
  public set find(value: string) {
    this._find = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findInput() {
    return this._find;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KqlDatabaseDefinitionParametersList extends cdktf.ComplexList {
  public internalValue? : KqlDatabaseDefinitionParameters[] | cdktf.IResolvable

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
  public get(index: number): KqlDatabaseDefinitionParametersOutputReference {
    return new KqlDatabaseDefinitionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KqlDatabaseDefinition {
  /**
  * The set of parameters to be passed and processed in the source content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#parameters KqlDatabase#parameters}
  */
  readonly parameters?: KqlDatabaseDefinitionParameters[] | cdktf.IResolvable;
  /**
  * Processing mode of the tokens/parameters. Possible values: `GoTemplate`, `None`, `Parameters`. Default `GoTemplate`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#processing_mode KqlDatabase#processing_mode}
  */
  readonly processingMode?: string;
  /**
  * Path to the file with source of the definition part.
  * 
  * The source content may include placeholders for token substitution. Use the dot with the token name `{{ .TokenName }}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#source KqlDatabase#source}
  */
  readonly source: string;
  /**
  * A map of key/value pairs of tokens substitutes in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#tokens KqlDatabase#tokens}
  */
  readonly tokens?: { [key: string]: string };
  /**
  * The delimiter for the tokens in the source content. Possible values: `<<>>`, `@{}@`, `____`, `{{}}`. Default: `{{}}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#tokens_delimiter KqlDatabase#tokens_delimiter}
  */
  readonly tokensDelimiter?: string;
}

export function kqlDatabaseDefinitionToTerraform(struct?: KqlDatabaseDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(kqlDatabaseDefinitionParametersToTerraform, false)(struct!.parameters),
    processing_mode: cdktf.stringToTerraform(struct!.processingMode),
    source: cdktf.stringToTerraform(struct!.source),
    tokens: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokens),
    tokens_delimiter: cdktf.stringToTerraform(struct!.tokensDelimiter),
  }
}


export function kqlDatabaseDefinitionToHclTerraform(struct?: KqlDatabaseDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(kqlDatabaseDefinitionParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KqlDatabaseDefinitionParametersList",
    },
    processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.processingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokens),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tokens_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.tokensDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KqlDatabaseDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): KqlDatabaseDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._processingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingMode = this._processingMode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._tokensDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokensDelimiter = this._tokensDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KqlDatabaseDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._processingMode = undefined;
      this._source = undefined;
      this._tokens = undefined;
      this._tokensDelimiter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._processingMode = value.processingMode;
      this._source = value.source;
      this._tokens = value.tokens;
      this._tokensDelimiter = value.tokensDelimiter;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KqlDatabaseDefinitionParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KqlDatabaseDefinitionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // processing_mode - computed: true, optional: true, required: false
  private _processingMode?: string; 
  public get processingMode() {
    return this.getStringAttribute('processing_mode');
  }
  public set processingMode(value: string) {
    this._processingMode = value;
  }
  public resetProcessingMode() {
    this._processingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingModeInput() {
    return this._processingMode;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_content_sha256 - computed: true, optional: false, required: false
  public get sourceContentSha256() {
    return this.getStringAttribute('source_content_sha256');
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: { [key: string]: string }; 
  public get tokens() {
    return this.getStringMapAttribute('tokens');
  }
  public set tokens(value: { [key: string]: string }) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }

  // tokens_delimiter - computed: true, optional: true, required: false
  private _tokensDelimiter?: string; 
  public get tokensDelimiter() {
    return this.getStringAttribute('tokens_delimiter');
  }
  public set tokensDelimiter(value: string) {
    this._tokensDelimiter = value;
  }
  public resetTokensDelimiter() {
    this._tokensDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensDelimiterInput() {
    return this._tokensDelimiter;
  }
}

export class KqlDatabaseDefinitionMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: KqlDatabaseDefinition } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): KqlDatabaseDefinitionOutputReference {
    return new KqlDatabaseDefinitionOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface KqlDatabaseProperties {
}

export function kqlDatabasePropertiesToTerraform(struct?: KqlDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kqlDatabasePropertiesToHclTerraform(struct?: KqlDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KqlDatabasePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KqlDatabaseProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KqlDatabaseProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // eventhouse_id - computed: true, optional: false, required: false
  public get eventhouseId() {
    return this.getStringAttribute('eventhouse_id');
  }

  // ingestion_service_uri - computed: true, optional: false, required: false
  public get ingestionServiceUri() {
    return this.getStringAttribute('ingestion_service_uri');
  }

  // query_service_uri - computed: true, optional: false, required: false
  public get queryServiceUri() {
    return this.getStringAttribute('query_service_uri');
  }
}
export interface KqlDatabaseTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#create KqlDatabase#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#delete KqlDatabase#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#read KqlDatabase#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#update KqlDatabase#update}
  */
  readonly update?: string;
}

export function kqlDatabaseTimeoutsToTerraform(struct?: KqlDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kqlDatabaseTimeoutsToHclTerraform(struct?: KqlDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KqlDatabaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KqlDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database fabric_kql_database}
*/
export class KqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_kql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KqlDatabase to import
  * @param importFromId The id of the existing KqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_kql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/kql_database fabric_kql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: KqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_kql_database',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definition.internalValue = config.definition;
    this._definitionUpdateEnabled = config.definitionUpdateEnabled;
    this._description = config.description;
    this._displayName = config.displayName;
    this._folderId = config.folderId;
    this._format = config.format;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration = new KqlDatabaseConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: KqlDatabaseConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new KqlDatabaseDefinitionMap(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: { [key: string]: KqlDatabaseDefinition } | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // definition_update_enabled - computed: true, optional: true, required: false
  private _definitionUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get definitionUpdateEnabled() {
    return this.getBooleanAttribute('definition_update_enabled');
  }
  public set definitionUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._definitionUpdateEnabled = value;
  }
  public resetDefinitionUpdateEnabled() {
    this._definitionUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionUpdateEnabledInput() {
    return this._definitionUpdateEnabled;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new KqlDatabasePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KqlDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KqlDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: kqlDatabaseConfigurationToTerraform(this._configuration.internalValue),
      definition: cdktf.hashMapper(kqlDatabaseDefinitionToTerraform)(this._definition.internalValue),
      definition_update_enabled: cdktf.booleanToTerraform(this._definitionUpdateEnabled),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      folder_id: cdktf.stringToTerraform(this._folderId),
      format: cdktf.stringToTerraform(this._format),
      timeouts: kqlDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: kqlDatabaseConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KqlDatabaseConfiguration",
      },
      definition: {
        value: cdktf.hashMapperHcl(kqlDatabaseDefinitionToHclTerraform)(this._definition.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "KqlDatabaseDefinitionMap",
      },
      definition_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._definitionUpdateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kqlDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KqlDatabaseTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
