// https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The body format of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#body_format SourceWebhook#body_format}
  */
  readonly bodyFormat: string;
  /**
  * The check expression for the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#check_expression SourceWebhook#check_expression}
  */
  readonly checkExpression?: string;
  /**
  * The cluster to maintain this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#cluster_name SourceWebhook#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#comment SourceWebhook#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#database_name SourceWebhook#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#id SourceWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#name SourceWebhook#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#ownership_role SourceWebhook#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#region SourceWebhook#region}
  */
  readonly region?: string;
  /**
  * The identifier for the source schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#schema_name SourceWebhook#schema_name}
  */
  readonly schemaName?: string;
  /**
  * check_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#check_options SourceWebhook#check_options}
  */
  readonly checkOptions?: SourceWebhookCheckOptions[] | cdktf.IResolvable;
  /**
  * include_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#include_header SourceWebhook#include_header}
  */
  readonly includeHeader?: SourceWebhookIncludeHeader[] | cdktf.IResolvable;
  /**
  * include_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#include_headers SourceWebhook#include_headers}
  */
  readonly includeHeaders?: SourceWebhookIncludeHeaders;
}
export interface SourceWebhookCheckOptionsFieldSecret {
  /**
  * The secret database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#database_name SourceWebhook#database_name}
  */
  readonly databaseName?: string;
  /**
  * The secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#name SourceWebhook#name}
  */
  readonly name: string;
  /**
  * The secret schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#schema_name SourceWebhook#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceWebhookCheckOptionsFieldSecretToTerraform(struct?: SourceWebhookCheckOptionsFieldSecretOutputReference | SourceWebhookCheckOptionsFieldSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sourceWebhookCheckOptionsFieldSecretToHclTerraform(struct?: SourceWebhookCheckOptionsFieldSecretOutputReference | SourceWebhookCheckOptionsFieldSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceWebhookCheckOptionsFieldSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceWebhookCheckOptionsFieldSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceWebhookCheckOptionsFieldSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SourceWebhookCheckOptionsField {
  /**
  * The body for the check options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#body SourceWebhook#body}
  */
  readonly body?: boolean | cdktf.IResolvable;
  /**
  * The headers for the check options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#headers SourceWebhook#headers}
  */
  readonly headers?: boolean | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#secret SourceWebhook#secret}
  */
  readonly secret?: SourceWebhookCheckOptionsFieldSecret;
}

export function sourceWebhookCheckOptionsFieldToTerraform(struct?: SourceWebhookCheckOptionsFieldOutputReference | SourceWebhookCheckOptionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.booleanToTerraform(struct!.body),
    headers: cdktf.booleanToTerraform(struct!.headers),
    secret: sourceWebhookCheckOptionsFieldSecretToTerraform(struct!.secret),
  }
}


export function sourceWebhookCheckOptionsFieldToHclTerraform(struct?: SourceWebhookCheckOptionsFieldOutputReference | SourceWebhookCheckOptionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.booleanToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.booleanToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: sourceWebhookCheckOptionsFieldSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "SourceWebhookCheckOptionsFieldSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceWebhookCheckOptionsFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceWebhookCheckOptionsField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceWebhookCheckOptionsField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
      this._secret.internalValue = value.secret;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: boolean | cdktf.IResolvable; 
  public get body() {
    return this.getBooleanAttribute('body');
  }
  public set body(value: boolean | cdktf.IResolvable) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: boolean | cdktf.IResolvable; 
  public get headers() {
    return this.getBooleanAttribute('headers');
  }
  public set headers(value: boolean | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new SourceWebhookCheckOptionsFieldSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: SourceWebhookCheckOptionsFieldSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface SourceWebhookCheckOptions {
  /**
  * The alias for the check options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#alias SourceWebhook#alias}
  */
  readonly alias?: string;
  /**
  * Change type to `bytea`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#bytes SourceWebhook#bytes}
  */
  readonly bytes?: boolean | cdktf.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#field SourceWebhook#field}
  */
  readonly field: SourceWebhookCheckOptionsField;
}

export function sourceWebhookCheckOptionsToTerraform(struct?: SourceWebhookCheckOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    bytes: cdktf.booleanToTerraform(struct!.bytes),
    field: sourceWebhookCheckOptionsFieldToTerraform(struct!.field),
  }
}


export function sourceWebhookCheckOptionsToHclTerraform(struct?: SourceWebhookCheckOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes: {
      value: cdktf.booleanToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: sourceWebhookCheckOptionsFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "SourceWebhookCheckOptionsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceWebhookCheckOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceWebhookCheckOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceWebhookCheckOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._bytes = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._bytes = value.bytes;
      this._field.internalValue = value.field;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: boolean | cdktf.IResolvable; 
  public get bytes() {
    return this.getBooleanAttribute('bytes');
  }
  public set bytes(value: boolean | cdktf.IResolvable) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // field - computed: false, optional: false, required: true
  private _field = new SourceWebhookCheckOptionsFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: SourceWebhookCheckOptionsField) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class SourceWebhookCheckOptionsList extends cdktf.ComplexList {
  public internalValue? : SourceWebhookCheckOptions[] | cdktf.IResolvable

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
  public get(index: number): SourceWebhookCheckOptionsOutputReference {
    return new SourceWebhookCheckOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceWebhookIncludeHeader {
  /**
  * The alias for the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#alias SourceWebhook#alias}
  */
  readonly alias?: string;
  /**
  * Change type to `bytea`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#bytes SourceWebhook#bytes}
  */
  readonly bytes?: boolean | cdktf.IResolvable;
  /**
  * The name for the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#header SourceWebhook#header}
  */
  readonly header: string;
}

export function sourceWebhookIncludeHeaderToTerraform(struct?: SourceWebhookIncludeHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    bytes: cdktf.booleanToTerraform(struct!.bytes),
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function sourceWebhookIncludeHeaderToHclTerraform(struct?: SourceWebhookIncludeHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes: {
      value: cdktf.booleanToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceWebhookIncludeHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceWebhookIncludeHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceWebhookIncludeHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._bytes = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._bytes = value.bytes;
      this._header = value.header;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: boolean | cdktf.IResolvable; 
  public get bytes() {
    return this.getBooleanAttribute('bytes');
  }
  public set bytes(value: boolean | cdktf.IResolvable) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class SourceWebhookIncludeHeaderList extends cdktf.ComplexList {
  public internalValue? : SourceWebhookIncludeHeader[] | cdktf.IResolvable

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
  public get(index: number): SourceWebhookIncludeHeaderOutputReference {
    return new SourceWebhookIncludeHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceWebhookIncludeHeaders {
  /**
  * Include all headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#all SourceWebhook#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Headers that should be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#not SourceWebhook#not}
  */
  readonly not?: string[];
  /**
  * Headers that should be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#only SourceWebhook#only}
  */
  readonly only?: string[];
}

export function sourceWebhookIncludeHeadersToTerraform(struct?: SourceWebhookIncludeHeadersOutputReference | SourceWebhookIncludeHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    not: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.not),
    only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.only),
  }
}


export function sourceWebhookIncludeHeadersToHclTerraform(struct?: SourceWebhookIncludeHeadersOutputReference | SourceWebhookIncludeHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.not),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.only),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceWebhookIncludeHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceWebhookIncludeHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._only !== undefined) {
      hasAnyValues = true;
      internalValueResult.only = this._only;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceWebhookIncludeHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._not = undefined;
      this._only = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._not = value.not;
      this._only = value.only;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // not - computed: false, optional: true, required: false
  private _not?: string[]; 
  public get not() {
    return this.getListAttribute('not');
  }
  public set not(value: string[]) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // only - computed: false, optional: true, required: false
  private _only?: string[]; 
  public get only() {
    return this.getListAttribute('only');
  }
  public set only(value: string[]) {
    this._only = value;
  }
  public resetOnly() {
    this._only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyInput() {
    return this._only;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook materialize_source_webhook}
*/
export class SourceWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_source_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceWebhook to import
  * @param importFromId The id of the existing SourceWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_source_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_webhook materialize_source_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: SourceWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_source_webhook',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bodyFormat = config.bodyFormat;
    this._checkExpression = config.checkExpression;
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._checkOptions.internalValue = config.checkOptions;
    this._includeHeader.internalValue = config.includeHeader;
    this._includeHeaders.internalValue = config.includeHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body_format - computed: false, optional: false, required: true
  private _bodyFormat?: string; 
  public get bodyFormat() {
    return this.getStringAttribute('body_format');
  }
  public set bodyFormat(value: string) {
    this._bodyFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyFormatInput() {
    return this._bodyFormat;
  }

  // check_expression - computed: false, optional: true, required: false
  private _checkExpression?: string; 
  public get checkExpression() {
    return this.getStringAttribute('check_expression');
  }
  public set checkExpression(value: string) {
    this._checkExpression = value;
  }
  public resetCheckExpression() {
    this._checkExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkExpressionInput() {
    return this._checkExpression;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
  }

  // region - computed: true, optional: true, required: false
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // check_options - computed: false, optional: true, required: false
  private _checkOptions = new SourceWebhookCheckOptionsList(this, "check_options", false);
  public get checkOptions() {
    return this._checkOptions;
  }
  public putCheckOptions(value: SourceWebhookCheckOptions[] | cdktf.IResolvable) {
    this._checkOptions.internalValue = value;
  }
  public resetCheckOptions() {
    this._checkOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkOptionsInput() {
    return this._checkOptions.internalValue;
  }

  // include_header - computed: false, optional: true, required: false
  private _includeHeader = new SourceWebhookIncludeHeaderList(this, "include_header", false);
  public get includeHeader() {
    return this._includeHeader;
  }
  public putIncludeHeader(value: SourceWebhookIncludeHeader[] | cdktf.IResolvable) {
    this._includeHeader.internalValue = value;
  }
  public resetIncludeHeader() {
    this._includeHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeaderInput() {
    return this._includeHeader.internalValue;
  }

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders = new SourceWebhookIncludeHeadersOutputReference(this, "include_headers");
  public get includeHeaders() {
    return this._includeHeaders;
  }
  public putIncludeHeaders(value: SourceWebhookIncludeHeaders) {
    this._includeHeaders.internalValue = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body_format: cdktf.stringToTerraform(this._bodyFormat),
      check_expression: cdktf.stringToTerraform(this._checkExpression),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      check_options: cdktf.listMapper(sourceWebhookCheckOptionsToTerraform, true)(this._checkOptions.internalValue),
      include_header: cdktf.listMapper(sourceWebhookIncludeHeaderToTerraform, true)(this._includeHeader.internalValue),
      include_headers: sourceWebhookIncludeHeadersToTerraform(this._includeHeaders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body_format: {
        value: cdktf.stringToHclTerraform(this._bodyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_expression: {
        value: cdktf.stringToHclTerraform(this._checkExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_options: {
        value: cdktf.listMapperHcl(sourceWebhookCheckOptionsToHclTerraform, true)(this._checkOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceWebhookCheckOptionsList",
      },
      include_header: {
        value: cdktf.listMapperHcl(sourceWebhookIncludeHeaderToHclTerraform, true)(this._includeHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceWebhookIncludeHeaderList",
      },
      include_headers: {
        value: sourceWebhookIncludeHeadersToHclTerraform(this._includeHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceWebhookIncludeHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
