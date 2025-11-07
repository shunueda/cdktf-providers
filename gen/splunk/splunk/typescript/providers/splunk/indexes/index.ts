// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls how many events make up a block for block signatures.
  * 				If this is set to 0, block signing is disabled for this index.
  * 				A recommended value is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#block_sign_size Indexes#block_sign_size}
  */
  readonly blockSignSize?: number;
  /**
  * Suggestion for the bucket rebuild process for the size of the time-series (tsidx) file to make.
  * 				Caution: This is an advanced parameter. Inappropriate use of this parameter causes splunkd to not start if rebuild is required. Do not set this parameter unless instructed by Splunk Support.
  * 
  * 				Default value, auto, varies by the amount of physical RAM on the host
  * 
  * 				- less than 2GB RAM = 67108864 (64MB) tsidx
  * 				- 2GB to 8GB RAM = 134217728 (128MB) tsidx
  * 				- more than 8GB RAM = 268435456 (256MB) tsidx
  * 
  * 				Values other than "auto" must be 16MB-1GB. Highest legal value (of the numerical part) is 4294967295
  * 
  * 				You can specify the value using a size suffix: "16777216" or "16MB" are equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#bucket_rebuild_memory_hint Indexes#bucket_rebuild_memory_hint}
  */
  readonly bucketRebuildMemoryHint?: string;
  /**
  * An absolute path that contains the colddbs for the index. The path must be readable and writable. Cold databases are opened as needed when searching. May be defined in terms of a volume definition (see volume section below).
  * 				Required. Splunk software does not start if an index lacks a valid coldPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#cold_path Indexes#cold_path}
  */
  readonly coldPath?: string;
  /**
  * Destination path for the frozen archive. Use as an alternative to a coldToFrozenScript. Splunk software automatically puts frozen buckets in this directory.
  * 				Bucket freezing policy is as follows:
  * 
  * 				- New style buckets (4.2 and on): removes all files but the rawdata
  * 				To thaw, run splunk rebuild <bucket dir> on the bucket, then move to the thawed directory
  * 				- Old style buckets (Pre-4.2): gzip all the .data and .tsidx files
  * 				To thaw, gunzip the zipped files and move the bucket into the thawed directory
  * 
  * 				If both coldToFrozenDir and coldToFrozenScript are specified, coldToFrozenDir takes precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#cold_to_frozen_dir Indexes#cold_to_frozen_dir}
  */
  readonly coldToFrozenDir?: string;
  /**
  * Path to the archiving script.
  * 				If your script requires a program to run it (for example, python), specify the program followed by the path. The script must be in $SPLUNK_HOME/bin or one of its subdirectories.
  * 
  * 				Splunk software ships with an example archiving script in $SPLUNK_HOME/bin called coldToFrozenExample.py. DO NOT use this example script directly. It uses a default path, and if modified in place any changes are overwritten on upgrade.
  * 
  * 				It is best to copy the example script to a new file in bin and modify it for your system. Most importantly, change the default archive path to an existing directory that fits your needs.
  * 
  * 				If your new script in bin/ is named myColdToFrozen.py, set this key to the following:
  * 
  * 				coldToFrozenScript = "$SPLUNK_HOME/bin/python" "$SPLUNK_HOME/bin/myColdToFrozen.py"
  * 
  * 				By default, the example script has two possible behaviors when archiving:
  * 
  * 				- For buckets created from version 4.2 and on, it removes all files except for rawdata. To thaw: cd to the frozen bucket and type splunk rebuild ., then copy the bucket to thawed for that index. We recommend using the coldToFrozenDir parameter unless you need to perform a more advanced operation upon freezing buckets.
  * 				- For older-style buckets, we simply gzip all the .tsidx files. To thaw: cd to the frozen bucket and unzip the tsidx files, then copy the bucket to thawed for that index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#cold_to_frozen_script Indexes#cold_to_frozen_script}
  */
  readonly coldToFrozenScript?: string;
  /**
  * This parameter is ignored. The splunkd process always compresses raw data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#compress_rawdata Indexes#compress_rawdata}
  */
  readonly compressRawdata?: boolean | cdktf.IResolvable;
  /**
  * Valid values: (event | metric). Specifies the type of index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#datatype Indexes#datatype}
  */
  readonly datatype?: string;
  /**
  * Enables asynchronous "online fsck" bucket repair, which runs concurrently with Splunk software.
  * 				When enabled, you do not have to wait until buckets are repaired to start the Splunk platform. However, you might observe a slight performance degratation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#enable_online_bucket_repair Indexes#enable_online_bucket_repair}
  */
  readonly enableOnlineBucketRepair?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds after which indexed data rolls to frozen. Defaults to 188697600 (6 years).
  * 				Freezing data means it is removed from the index. If you need to archive your data, refer to coldToFrozenDir and coldToFrozenScript parameter documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#frozen_time_period_in_secs Indexes#frozen_time_period_in_secs}
  */
  readonly frozenTimePeriodInSecs?: number;
  /**
  * An absolute path that contains the hot and warm buckets for the index.
  * 				Required. Splunk software does not start if an index lacks a valid homePath.
  * 
  * 				Caution: The path must be readable and writable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#home_path Indexes#home_path}
  */
  readonly homePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#id Indexes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid values are: Integer[m|s|h|d].If a warm or cold bucket is older than the specified age, do not create or rebuild its bloomfilter. Specify 0 to never rebuild bloomfilters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_bloom_backfill_bucket_age Indexes#max_bloom_backfill_bucket_age}
  */
  readonly maxBloomBackfillBucketAge?: string;
  /**
  * The number of concurrent optimize processes that can run against a hot bucket.
  * 				This number should be increased if instructed by Splunk Support. Typically the default value should suffice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_concurrent_optimizes Indexes#max_concurrent_optimizes}
  */
  readonly maxConcurrentOptimizes?: number;
  /**
  * The maximum size in MB for a hot DB to reach before a roll to warm is triggered. Specifying "auto" or "auto_high_volume" causes Splunk software to autotune this parameter (recommended).Use "auto_high_volume" for high volume indexes (such as the main index); otherwise, use "auto". A "high volume index" would typically be considered one that gets over 10GB of data per day.
  * 				- "auto" sets the size to 750MB.
  * 				- "auto_high_volume" sets the size to 10GB on 64-bit, and 1GB on 32-bit systems.
  * 
  * 				Although the maximum value you can set this is 1048576 MB, which corresponds to 1 TB, a reasonable number ranges anywhere from 100 - 50000. Any number outside this range should be approved by Splunk Support before proceeding.
  * 
  * 				If you specify an invalid number or string, maxDataSize is auto-tuned.
  * 
  * 				Note: The precise size of your warm buckets may vary from maxDataSize, due to post-processing and timing issues with the rolling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_data_size Indexes#max_data_size}
  */
  readonly maxDataSize?: string;
  /**
  * Maximum hot buckets that can exist per index. Defaults to 3.
  * 				When maxHotBuckets is exceeded, Splunk software rolls the least recently used (LRU) hot bucket to warm. Both normal hot buckets and quarantined hot buckets count towards this total. This setting operates independently of maxHotIdleSecs, which can also cause hot buckets to roll.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_hot_buckets Indexes#max_hot_buckets}
  */
  readonly maxHotBuckets?: number;
  /**
  * Maximum life, in seconds, of a hot bucket. Defaults to 0.
  * 				If a hot bucket exceeds maxHotIdleSecs, Splunk software rolls it to warm. This setting operates independently of maxHotBuckets, which can also cause hot buckets to roll. A value of 0 turns off the idle check (equivalent to INFINITE idle time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_hot_idle_secs Indexes#max_hot_idle_secs}
  */
  readonly maxHotIdleSecs?: number;
  /**
  * Upper bound of target maximum timespan of hot/warm buckets in seconds. Defaults to 7776000 seconds (90 days).
  * 				Note: If you set this too small, you can get an explosion of hot/warm buckets in the filesystem. The system sets a lower bound implicitly for this parameter at 3600, but this is an advanced parameter that should be set with care and understanding of the characteristics of your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_hot_span_secs Indexes#max_hot_span_secs}
  */
  readonly maxHotSpanSecs?: number;
  /**
  * The amount of memory, expressed in MB, to allocate for buffering a single tsidx file into memory before flushing to disk. Defaults to 5. The default is recommended for all environments.
  * 				IMPORTANT: Calculate this number carefully. Setting this number incorrectly may have adverse effects on your systems memory and/or splunkd stability/performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_mem_mb Indexes#max_mem_mb}
  */
  readonly maxMemMb?: number;
  /**
  * Sets the maximum number of unique lines in .data files in a bucket, which may help to reduce memory consumption. If set to 0, this setting is ignored (it is treated as infinite).
  * 				If exceeded, a hot bucket is rolled to prevent further increase. If your buckets are rolling due to Strings.data hitting this limit, the culprit may be the punct field in your data. If you do not use punct, it may be best to simply disable this (see props.conf.spec in $SPLUNK_HOME/etc/system/README).
  * 
  * 				There is a small time delta between when maximum is exceeded and bucket is rolled. This means a bucket may end up with epsilon more lines than specified, but this is not a major concern unless excess is significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_meta_entries Indexes#max_meta_entries}
  */
  readonly maxMetaEntries?: number;
  /**
  * Upper limit, in seconds, on how long an event can sit in raw slice. Applies only if replication is enabled for this index. Otherwise ignored.
  * 				If there are any acknowledged events sharing this raw slice, this paramater does not apply. In this case, maxTimeUnreplicatedWithAcks applies.
  * 
  * 				Highest legal value is 2147483647. To disable this parameter, set to 0.
  * 
  * 				Note: this is an advanced parameter. Understand the consequences before changing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_time_unreplicated_no_acks Indexes#max_time_unreplicated_no_acks}
  */
  readonly maxTimeUnreplicatedNoAcks?: number;
  /**
  * Upper limit, in seconds, on how long events can sit unacknowledged in a raw slice. Applies only if you have enabled acks on forwarders and have replication enabled (with clustering).
  * 				Note: This is an advanced parameter. Make sure you understand the settings on all forwarders before changing this. This number should not exceed ack timeout configured on any forwarder, and should actually be set to at most half of the minimum value of that timeout. You can find this setting in outputs.conf readTimeout setting under the tcpout stanza.
  * 
  * 				To disable, set to 0, but this is NOT recommended. Highest legal value is 2147483647.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_time_unreplicated_with_acks Indexes#max_time_unreplicated_with_acks}
  */
  readonly maxTimeUnreplicatedWithAcks?: number;
  /**
  * The maximum size of an index (in MB). If an index grows larger than the maximum size, the oldest data is frozen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_total_data_size_mb Indexes#max_total_data_size_mb}
  */
  readonly maxTotalDataSizeMb?: number;
  /**
  * The maximum number of warm buckets. If this number is exceeded, the warm bucket/s with the lowest value for their latest times is moved to cold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#max_warm_db_count Indexes#max_warm_db_count}
  */
  readonly maxWarmDbCount?: number;
  /**
  * Specify an integer (or "disable") for this parameter.
  * 				This parameter sets how frequently splunkd forces a filesystem sync while compressing journal slices.
  * 
  * 				During this period, uncompressed slices are left on disk even after they are compressed. Then splunkd forces a filesystem sync of the compressed journal and removes the accumulated uncompressed files.
  * 
  * 				If 0 is specified, splunkd forces a filesystem sync after every slice completes compressing. Specifying "disable" disables syncing entirely: uncompressed slices are removed as soon as compression is complete.
  * 
  * 				Note: Some filesystems are very inefficient at performing sync operations, so only enable this if you are sure it is needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#min_raw_file_sync_secs Indexes#min_raw_file_sync_secs}
  */
  readonly minRawFileSyncSecs?: string;
  /**
  * Minimum size of the queue that stores events in memory before committing them to a tsidx file.
  * 				Caution: Do not set this value, except under advice from Splunk Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#min_stream_group_queue_size Indexes#min_stream_group_queue_size}
  */
  readonly minStreamGroupQueueSize?: number;
  /**
  * The name of the index to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#name Indexes#name}
  */
  readonly name: string;
  /**
  * Related to serviceMetaPeriod. If set, it enables metadata sync every <integer> seconds, but only for records where the sync can be done efficiently in-place, without requiring a full re-write of the metadata file. Records that require full re-write are be sync'ed at serviceMetaPeriod.
  * 				partialServiceMetaPeriod specifies, in seconds, how frequently it should sync. Zero means that this feature is turned off and serviceMetaPeriod is the only time when metadata sync happens.
  * 
  * 				If the value of partialServiceMetaPeriod is greater than serviceMetaPeriod, this setting has no effect.
  * 
  * 				By default it is turned off (zero).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#partial_service_meta_period Indexes#partial_service_meta_period}
  */
  readonly partialServiceMetaPeriod?: number;
  /**
  * Specifies, in seconds, how often the indexer checks the status of the child OS processes it launched to see if it can launch new processes for queued requests. Defaults to 15.
  * 				If set to 0, the indexer checks child process status every second.
  * 
  * 				Highest legal value is 4294967295.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#process_tracker_service_interval Indexes#process_tracker_service_interval}
  */
  readonly processTrackerServiceInterval?: number;
  /**
  * Events with timestamp of quarantineFutureSecs newer than "now" are dropped into quarantine bucket. Defaults to 2592000 (30 days).
  * 				This is a mechanism to prevent main hot buckets from being polluted with fringe events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#quarantine_future_secs Indexes#quarantine_future_secs}
  */
  readonly quarantineFutureSecs?: number;
  /**
  * Events with timestamp of quarantinePastSecs older than "now" are dropped into quarantine bucket. Defaults to 77760000 (900 days).
  * 				This is a mechanism to prevent the main hot buckets from being polluted with fringe events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#quarantine_past_secs Indexes#quarantine_past_secs}
  */
  readonly quarantinePastSecs?: number;
  /**
  * Target uncompressed size in bytes for individual raw slice in the rawdata journal of the index. Defaults to 131072 (128KB). 0 is not a valid value. If 0 is specified, rawChunkSizeBytes is set to the default value.
  * 				Note: rawChunkSizeBytes only specifies a target chunk size. The actual chunk size may be slightly larger by an amount proportional to an individual event size.
  * 
  * 				WARNING: This is an advanced parameter. Only change it if you are instructed to do so by Splunk Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#raw_chunk_size_bytes Indexes#raw_chunk_size_bytes}
  */
  readonly rawChunkSizeBytes?: number;
  /**
  * Index replication control. This parameter applies to only clustering slaves.
  * 				auto = Use the master index replication configuration value.
  * 
  * 				0 = Turn off replication for this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#rep_factor Indexes#rep_factor}
  */
  readonly repFactor?: string;
  /**
  * How frequently (in seconds) to check if a new hot bucket needs to be created. Also, how frequently to check if there are any warm/cold buckets that should be rolled/frozen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#rotate_period_in_secs Indexes#rotate_period_in_secs}
  */
  readonly rotatePeriodInSecs?: number;
  /**
  * Defines how frequently metadata is synced to disk, in seconds. Defaults to 25 (seconds).
  * 				You may want to set this to a higher value if the sum of your metadata file sizes is larger than many tens of megabytes, to avoid the hit on I/O in the indexing fast path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#service_meta_period Indexes#service_meta_period}
  */
  readonly serviceMetaPeriod?: number;
  /**
  * When true, a sync operation is called before file descriptor is closed on metadata file updates. This functionality improves integrity of metadata files, especially in regards to operating system crashes/machine failures.
  * 				Note: Do not change this parameter without the input of a Splunk Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#sync_meta Indexes#sync_meta}
  */
  readonly syncMeta?: boolean | cdktf.IResolvable;
  /**
  * An absolute path that contains the thawed (resurrected) databases for the index.
  * 				Cannot be defined in terms of a volume definition.
  * 
  * 				Required. Splunk software does not start if an index lacks a valid thawedPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#thawed_path Indexes#thawed_path}
  */
  readonly thawedPath?: string;
  /**
  * Defines how frequently Splunk software checks for index throttling condition, in seconds. Defaults to 15 (seconds).
  * 				Note: Do not change this parameter without the input of Splunk Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#throttle_check_period Indexes#throttle_check_period}
  */
  readonly throttleCheckPeriod?: number;
  /**
  * Location to store datamodel acceleration TSIDX data for this index. Restart splunkd after changing this parameter.
  * 				If specified, it must be defined in terms of a volume definition.
  * 
  * 				Caution: Path must be writable.
  * 
  * 				Default value: volume:_splunk_summaries/$_index_name/tstats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#tstats_home_path Indexes#tstats_home_path}
  */
  readonly tstatsHomePath?: string;
  /**
  * Path to a script to run when moving data from warm to cold.
  * 				This attribute is supported for backwards compatibility with Splunk software versions older than 4.0. Contact Splunk support if you need help configuring this setting.
  * 
  * 				Caution: Migrating data across filesystems is now handled natively by splunkd. If you specify a script here, the script becomes responsible for moving the event data, and Splunk-native data migration is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#warm_to_cold_script Indexes#warm_to_cold_script}
  */
  readonly warmToColdScript?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#acl Indexes#acl}
  */
  readonly acl?: IndexesAcl;
}
export interface IndexesAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#app Indexes#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#can_change_perms Indexes#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#can_share_app Indexes#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#can_share_global Indexes#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#can_share_user Indexes#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#can_write Indexes#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#owner Indexes#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#read Indexes#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#removable Indexes#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#sharing Indexes#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#write Indexes#write}
  */
  readonly write?: string[];
}

export function indexesAclToTerraform(struct?: IndexesAclOutputReference | IndexesAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    can_change_perms: cdktf.booleanToTerraform(struct!.canChangePerms),
    can_share_app: cdktf.booleanToTerraform(struct!.canShareApp),
    can_share_global: cdktf.booleanToTerraform(struct!.canShareGlobal),
    can_share_user: cdktf.booleanToTerraform(struct!.canShareUser),
    can_write: cdktf.booleanToTerraform(struct!.canWrite),
    owner: cdktf.stringToTerraform(struct!.owner),
    read: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.read),
    removable: cdktf.booleanToTerraform(struct!.removable),
    sharing: cdktf.stringToTerraform(struct!.sharing),
    write: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.write),
  }
}


export function indexesAclToHclTerraform(struct?: IndexesAclOutputReference | IndexesAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_change_perms: {
      value: cdktf.booleanToHclTerraform(struct!.canChangePerms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_app: {
      value: cdktf.booleanToHclTerraform(struct!.canShareApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_global: {
      value: cdktf.booleanToHclTerraform(struct!.canShareGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_user: {
      value: cdktf.booleanToHclTerraform(struct!.canShareUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_write: {
      value: cdktf.booleanToHclTerraform(struct!.canWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.read),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    removable: {
      value: cdktf.booleanToHclTerraform(struct!.removable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sharing: {
      value: cdktf.stringToHclTerraform(struct!.sharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.write),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexesAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IndexesAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._canChangePerms !== undefined) {
      hasAnyValues = true;
      internalValueResult.canChangePerms = this._canChangePerms;
    }
    if (this._canShareApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareApp = this._canShareApp;
    }
    if (this._canShareGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareGlobal = this._canShareGlobal;
    }
    if (this._canShareUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareUser = this._canShareUser;
    }
    if (this._canWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.canWrite = this._canWrite;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._removable !== undefined) {
      hasAnyValues = true;
      internalValueResult.removable = this._removable;
    }
    if (this._sharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexesAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._canChangePerms = undefined;
      this._canShareApp = undefined;
      this._canShareGlobal = undefined;
      this._canShareUser = undefined;
      this._canWrite = undefined;
      this._owner = undefined;
      this._read = undefined;
      this._removable = undefined;
      this._sharing = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._canChangePerms = value.canChangePerms;
      this._canShareApp = value.canShareApp;
      this._canShareGlobal = value.canShareGlobal;
      this._canShareUser = value.canShareUser;
      this._canWrite = value.canWrite;
      this._owner = value.owner;
      this._read = value.read;
      this._removable = value.removable;
      this._sharing = value.sharing;
      this._write = value.write;
    }
  }

  // app - computed: true, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // can_change_perms - computed: true, optional: true, required: false
  private _canChangePerms?: boolean | cdktf.IResolvable; 
  public get canChangePerms() {
    return this.getBooleanAttribute('can_change_perms');
  }
  public set canChangePerms(value: boolean | cdktf.IResolvable) {
    this._canChangePerms = value;
  }
  public resetCanChangePerms() {
    this._canChangePerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canChangePermsInput() {
    return this._canChangePerms;
  }

  // can_share_app - computed: true, optional: true, required: false
  private _canShareApp?: boolean | cdktf.IResolvable; 
  public get canShareApp() {
    return this.getBooleanAttribute('can_share_app');
  }
  public set canShareApp(value: boolean | cdktf.IResolvable) {
    this._canShareApp = value;
  }
  public resetCanShareApp() {
    this._canShareApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareAppInput() {
    return this._canShareApp;
  }

  // can_share_global - computed: true, optional: true, required: false
  private _canShareGlobal?: boolean | cdktf.IResolvable; 
  public get canShareGlobal() {
    return this.getBooleanAttribute('can_share_global');
  }
  public set canShareGlobal(value: boolean | cdktf.IResolvable) {
    this._canShareGlobal = value;
  }
  public resetCanShareGlobal() {
    this._canShareGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareGlobalInput() {
    return this._canShareGlobal;
  }

  // can_share_user - computed: true, optional: true, required: false
  private _canShareUser?: boolean | cdktf.IResolvable; 
  public get canShareUser() {
    return this.getBooleanAttribute('can_share_user');
  }
  public set canShareUser(value: boolean | cdktf.IResolvable) {
    this._canShareUser = value;
  }
  public resetCanShareUser() {
    this._canShareUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareUserInput() {
    return this._canShareUser;
  }

  // can_write - computed: true, optional: true, required: false
  private _canWrite?: boolean | cdktf.IResolvable; 
  public get canWrite() {
    return this.getBooleanAttribute('can_write');
  }
  public set canWrite(value: boolean | cdktf.IResolvable) {
    this._canWrite = value;
  }
  public resetCanWrite() {
    this._canWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canWriteInput() {
    return this._canWrite;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // read - computed: true, optional: true, required: false
  private _read?: string[]; 
  public get read() {
    return this.getListAttribute('read');
  }
  public set read(value: string[]) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // removable - computed: true, optional: true, required: false
  private _removable?: boolean | cdktf.IResolvable; 
  public get removable() {
    return this.getBooleanAttribute('removable');
  }
  public set removable(value: boolean | cdktf.IResolvable) {
    this._removable = value;
  }
  public resetRemovable() {
    this._removable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removableInput() {
    return this._removable;
  }

  // sharing - computed: true, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }

  // write - computed: true, optional: true, required: false
  private _write?: string[]; 
  public get write() {
    return this.getListAttribute('write');
  }
  public set write(value: string[]) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes splunk_indexes}
*/
export class Indexes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_indexes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Indexes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Indexes to import
  * @param importFromId The id of the existing Indexes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Indexes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_indexes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/indexes splunk_indexes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexesConfig
  */
  public constructor(scope: Construct, id: string, config: IndexesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_indexes',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockSignSize = config.blockSignSize;
    this._bucketRebuildMemoryHint = config.bucketRebuildMemoryHint;
    this._coldPath = config.coldPath;
    this._coldToFrozenDir = config.coldToFrozenDir;
    this._coldToFrozenScript = config.coldToFrozenScript;
    this._compressRawdata = config.compressRawdata;
    this._datatype = config.datatype;
    this._enableOnlineBucketRepair = config.enableOnlineBucketRepair;
    this._frozenTimePeriodInSecs = config.frozenTimePeriodInSecs;
    this._homePath = config.homePath;
    this._id = config.id;
    this._maxBloomBackfillBucketAge = config.maxBloomBackfillBucketAge;
    this._maxConcurrentOptimizes = config.maxConcurrentOptimizes;
    this._maxDataSize = config.maxDataSize;
    this._maxHotBuckets = config.maxHotBuckets;
    this._maxHotIdleSecs = config.maxHotIdleSecs;
    this._maxHotSpanSecs = config.maxHotSpanSecs;
    this._maxMemMb = config.maxMemMb;
    this._maxMetaEntries = config.maxMetaEntries;
    this._maxTimeUnreplicatedNoAcks = config.maxTimeUnreplicatedNoAcks;
    this._maxTimeUnreplicatedWithAcks = config.maxTimeUnreplicatedWithAcks;
    this._maxTotalDataSizeMb = config.maxTotalDataSizeMb;
    this._maxWarmDbCount = config.maxWarmDbCount;
    this._minRawFileSyncSecs = config.minRawFileSyncSecs;
    this._minStreamGroupQueueSize = config.minStreamGroupQueueSize;
    this._name = config.name;
    this._partialServiceMetaPeriod = config.partialServiceMetaPeriod;
    this._processTrackerServiceInterval = config.processTrackerServiceInterval;
    this._quarantineFutureSecs = config.quarantineFutureSecs;
    this._quarantinePastSecs = config.quarantinePastSecs;
    this._rawChunkSizeBytes = config.rawChunkSizeBytes;
    this._repFactor = config.repFactor;
    this._rotatePeriodInSecs = config.rotatePeriodInSecs;
    this._serviceMetaPeriod = config.serviceMetaPeriod;
    this._syncMeta = config.syncMeta;
    this._thawedPath = config.thawedPath;
    this._throttleCheckPeriod = config.throttleCheckPeriod;
    this._tstatsHomePath = config.tstatsHomePath;
    this._warmToColdScript = config.warmToColdScript;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_sign_size - computed: true, optional: true, required: false
  private _blockSignSize?: number; 
  public get blockSignSize() {
    return this.getNumberAttribute('block_sign_size');
  }
  public set blockSignSize(value: number) {
    this._blockSignSize = value;
  }
  public resetBlockSignSize() {
    this._blockSignSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSignSizeInput() {
    return this._blockSignSize;
  }

  // bucket_rebuild_memory_hint - computed: true, optional: true, required: false
  private _bucketRebuildMemoryHint?: string; 
  public get bucketRebuildMemoryHint() {
    return this.getStringAttribute('bucket_rebuild_memory_hint');
  }
  public set bucketRebuildMemoryHint(value: string) {
    this._bucketRebuildMemoryHint = value;
  }
  public resetBucketRebuildMemoryHint() {
    this._bucketRebuildMemoryHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRebuildMemoryHintInput() {
    return this._bucketRebuildMemoryHint;
  }

  // cold_path - computed: true, optional: true, required: false
  private _coldPath?: string; 
  public get coldPath() {
    return this.getStringAttribute('cold_path');
  }
  public set coldPath(value: string) {
    this._coldPath = value;
  }
  public resetColdPath() {
    this._coldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldPathInput() {
    return this._coldPath;
  }

  // cold_to_frozen_dir - computed: true, optional: true, required: false
  private _coldToFrozenDir?: string; 
  public get coldToFrozenDir() {
    return this.getStringAttribute('cold_to_frozen_dir');
  }
  public set coldToFrozenDir(value: string) {
    this._coldToFrozenDir = value;
  }
  public resetColdToFrozenDir() {
    this._coldToFrozenDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldToFrozenDirInput() {
    return this._coldToFrozenDir;
  }

  // cold_to_frozen_script - computed: true, optional: true, required: false
  private _coldToFrozenScript?: string; 
  public get coldToFrozenScript() {
    return this.getStringAttribute('cold_to_frozen_script');
  }
  public set coldToFrozenScript(value: string) {
    this._coldToFrozenScript = value;
  }
  public resetColdToFrozenScript() {
    this._coldToFrozenScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldToFrozenScriptInput() {
    return this._coldToFrozenScript;
  }

  // compress_rawdata - computed: true, optional: true, required: false
  private _compressRawdata?: boolean | cdktf.IResolvable; 
  public get compressRawdata() {
    return this.getBooleanAttribute('compress_rawdata');
  }
  public set compressRawdata(value: boolean | cdktf.IResolvable) {
    this._compressRawdata = value;
  }
  public resetCompressRawdata() {
    this._compressRawdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRawdataInput() {
    return this._compressRawdata;
  }

  // datatype - computed: true, optional: true, required: false
  private _datatype?: string; 
  public get datatype() {
    return this.getStringAttribute('datatype');
  }
  public set datatype(value: string) {
    this._datatype = value;
  }
  public resetDatatype() {
    this._datatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype;
  }

  // enable_online_bucket_repair - computed: true, optional: true, required: false
  private _enableOnlineBucketRepair?: boolean | cdktf.IResolvable; 
  public get enableOnlineBucketRepair() {
    return this.getBooleanAttribute('enable_online_bucket_repair');
  }
  public set enableOnlineBucketRepair(value: boolean | cdktf.IResolvable) {
    this._enableOnlineBucketRepair = value;
  }
  public resetEnableOnlineBucketRepair() {
    this._enableOnlineBucketRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineBucketRepairInput() {
    return this._enableOnlineBucketRepair;
  }

  // frozen_time_period_in_secs - computed: true, optional: true, required: false
  private _frozenTimePeriodInSecs?: number; 
  public get frozenTimePeriodInSecs() {
    return this.getNumberAttribute('frozen_time_period_in_secs');
  }
  public set frozenTimePeriodInSecs(value: number) {
    this._frozenTimePeriodInSecs = value;
  }
  public resetFrozenTimePeriodInSecs() {
    this._frozenTimePeriodInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frozenTimePeriodInSecsInput() {
    return this._frozenTimePeriodInSecs;
  }

  // home_path - computed: true, optional: true, required: false
  private _homePath?: string; 
  public get homePath() {
    return this.getStringAttribute('home_path');
  }
  public set homePath(value: string) {
    this._homePath = value;
  }
  public resetHomePath() {
    this._homePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePathInput() {
    return this._homePath;
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

  // max_bloom_backfill_bucket_age - computed: true, optional: true, required: false
  private _maxBloomBackfillBucketAge?: string; 
  public get maxBloomBackfillBucketAge() {
    return this.getStringAttribute('max_bloom_backfill_bucket_age');
  }
  public set maxBloomBackfillBucketAge(value: string) {
    this._maxBloomBackfillBucketAge = value;
  }
  public resetMaxBloomBackfillBucketAge() {
    this._maxBloomBackfillBucketAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBloomBackfillBucketAgeInput() {
    return this._maxBloomBackfillBucketAge;
  }

  // max_concurrent_optimizes - computed: true, optional: true, required: false
  private _maxConcurrentOptimizes?: number; 
  public get maxConcurrentOptimizes() {
    return this.getNumberAttribute('max_concurrent_optimizes');
  }
  public set maxConcurrentOptimizes(value: number) {
    this._maxConcurrentOptimizes = value;
  }
  public resetMaxConcurrentOptimizes() {
    this._maxConcurrentOptimizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentOptimizesInput() {
    return this._maxConcurrentOptimizes;
  }

  // max_data_size - computed: true, optional: true, required: false
  private _maxDataSize?: string; 
  public get maxDataSize() {
    return this.getStringAttribute('max_data_size');
  }
  public set maxDataSize(value: string) {
    this._maxDataSize = value;
  }
  public resetMaxDataSize() {
    this._maxDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataSizeInput() {
    return this._maxDataSize;
  }

  // max_hot_buckets - computed: true, optional: true, required: false
  private _maxHotBuckets?: number; 
  public get maxHotBuckets() {
    return this.getNumberAttribute('max_hot_buckets');
  }
  public set maxHotBuckets(value: number) {
    this._maxHotBuckets = value;
  }
  public resetMaxHotBuckets() {
    this._maxHotBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHotBucketsInput() {
    return this._maxHotBuckets;
  }

  // max_hot_idle_secs - computed: true, optional: true, required: false
  private _maxHotIdleSecs?: number; 
  public get maxHotIdleSecs() {
    return this.getNumberAttribute('max_hot_idle_secs');
  }
  public set maxHotIdleSecs(value: number) {
    this._maxHotIdleSecs = value;
  }
  public resetMaxHotIdleSecs() {
    this._maxHotIdleSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHotIdleSecsInput() {
    return this._maxHotIdleSecs;
  }

  // max_hot_span_secs - computed: true, optional: true, required: false
  private _maxHotSpanSecs?: number; 
  public get maxHotSpanSecs() {
    return this.getNumberAttribute('max_hot_span_secs');
  }
  public set maxHotSpanSecs(value: number) {
    this._maxHotSpanSecs = value;
  }
  public resetMaxHotSpanSecs() {
    this._maxHotSpanSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHotSpanSecsInput() {
    return this._maxHotSpanSecs;
  }

  // max_mem_mb - computed: true, optional: true, required: false
  private _maxMemMb?: number; 
  public get maxMemMb() {
    return this.getNumberAttribute('max_mem_mb');
  }
  public set maxMemMb(value: number) {
    this._maxMemMb = value;
  }
  public resetMaxMemMb() {
    this._maxMemMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemMbInput() {
    return this._maxMemMb;
  }

  // max_meta_entries - computed: true, optional: true, required: false
  private _maxMetaEntries?: number; 
  public get maxMetaEntries() {
    return this.getNumberAttribute('max_meta_entries');
  }
  public set maxMetaEntries(value: number) {
    this._maxMetaEntries = value;
  }
  public resetMaxMetaEntries() {
    this._maxMetaEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetaEntriesInput() {
    return this._maxMetaEntries;
  }

  // max_time_unreplicated_no_acks - computed: true, optional: true, required: false
  private _maxTimeUnreplicatedNoAcks?: number; 
  public get maxTimeUnreplicatedNoAcks() {
    return this.getNumberAttribute('max_time_unreplicated_no_acks');
  }
  public set maxTimeUnreplicatedNoAcks(value: number) {
    this._maxTimeUnreplicatedNoAcks = value;
  }
  public resetMaxTimeUnreplicatedNoAcks() {
    this._maxTimeUnreplicatedNoAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeUnreplicatedNoAcksInput() {
    return this._maxTimeUnreplicatedNoAcks;
  }

  // max_time_unreplicated_with_acks - computed: true, optional: true, required: false
  private _maxTimeUnreplicatedWithAcks?: number; 
  public get maxTimeUnreplicatedWithAcks() {
    return this.getNumberAttribute('max_time_unreplicated_with_acks');
  }
  public set maxTimeUnreplicatedWithAcks(value: number) {
    this._maxTimeUnreplicatedWithAcks = value;
  }
  public resetMaxTimeUnreplicatedWithAcks() {
    this._maxTimeUnreplicatedWithAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeUnreplicatedWithAcksInput() {
    return this._maxTimeUnreplicatedWithAcks;
  }

  // max_total_data_size_mb - computed: true, optional: true, required: false
  private _maxTotalDataSizeMb?: number; 
  public get maxTotalDataSizeMb() {
    return this.getNumberAttribute('max_total_data_size_mb');
  }
  public set maxTotalDataSizeMb(value: number) {
    this._maxTotalDataSizeMb = value;
  }
  public resetMaxTotalDataSizeMb() {
    this._maxTotalDataSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalDataSizeMbInput() {
    return this._maxTotalDataSizeMb;
  }

  // max_warm_db_count - computed: true, optional: true, required: false
  private _maxWarmDbCount?: number; 
  public get maxWarmDbCount() {
    return this.getNumberAttribute('max_warm_db_count');
  }
  public set maxWarmDbCount(value: number) {
    this._maxWarmDbCount = value;
  }
  public resetMaxWarmDbCount() {
    this._maxWarmDbCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWarmDbCountInput() {
    return this._maxWarmDbCount;
  }

  // min_raw_file_sync_secs - computed: true, optional: true, required: false
  private _minRawFileSyncSecs?: string; 
  public get minRawFileSyncSecs() {
    return this.getStringAttribute('min_raw_file_sync_secs');
  }
  public set minRawFileSyncSecs(value: string) {
    this._minRawFileSyncSecs = value;
  }
  public resetMinRawFileSyncSecs() {
    this._minRawFileSyncSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRawFileSyncSecsInput() {
    return this._minRawFileSyncSecs;
  }

  // min_stream_group_queue_size - computed: true, optional: true, required: false
  private _minStreamGroupQueueSize?: number; 
  public get minStreamGroupQueueSize() {
    return this.getNumberAttribute('min_stream_group_queue_size');
  }
  public set minStreamGroupQueueSize(value: number) {
    this._minStreamGroupQueueSize = value;
  }
  public resetMinStreamGroupQueueSize() {
    this._minStreamGroupQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStreamGroupQueueSizeInput() {
    return this._minStreamGroupQueueSize;
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

  // partial_service_meta_period - computed: true, optional: true, required: false
  private _partialServiceMetaPeriod?: number; 
  public get partialServiceMetaPeriod() {
    return this.getNumberAttribute('partial_service_meta_period');
  }
  public set partialServiceMetaPeriod(value: number) {
    this._partialServiceMetaPeriod = value;
  }
  public resetPartialServiceMetaPeriod() {
    this._partialServiceMetaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialServiceMetaPeriodInput() {
    return this._partialServiceMetaPeriod;
  }

  // process_tracker_service_interval - computed: true, optional: true, required: false
  private _processTrackerServiceInterval?: number; 
  public get processTrackerServiceInterval() {
    return this.getNumberAttribute('process_tracker_service_interval');
  }
  public set processTrackerServiceInterval(value: number) {
    this._processTrackerServiceInterval = value;
  }
  public resetProcessTrackerServiceInterval() {
    this._processTrackerServiceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTrackerServiceIntervalInput() {
    return this._processTrackerServiceInterval;
  }

  // quarantine_future_secs - computed: true, optional: true, required: false
  private _quarantineFutureSecs?: number; 
  public get quarantineFutureSecs() {
    return this.getNumberAttribute('quarantine_future_secs');
  }
  public set quarantineFutureSecs(value: number) {
    this._quarantineFutureSecs = value;
  }
  public resetQuarantineFutureSecs() {
    this._quarantineFutureSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineFutureSecsInput() {
    return this._quarantineFutureSecs;
  }

  // quarantine_past_secs - computed: true, optional: true, required: false
  private _quarantinePastSecs?: number; 
  public get quarantinePastSecs() {
    return this.getNumberAttribute('quarantine_past_secs');
  }
  public set quarantinePastSecs(value: number) {
    this._quarantinePastSecs = value;
  }
  public resetQuarantinePastSecs() {
    this._quarantinePastSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantinePastSecsInput() {
    return this._quarantinePastSecs;
  }

  // raw_chunk_size_bytes - computed: true, optional: true, required: false
  private _rawChunkSizeBytes?: number; 
  public get rawChunkSizeBytes() {
    return this.getNumberAttribute('raw_chunk_size_bytes');
  }
  public set rawChunkSizeBytes(value: number) {
    this._rawChunkSizeBytes = value;
  }
  public resetRawChunkSizeBytes() {
    this._rawChunkSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawChunkSizeBytesInput() {
    return this._rawChunkSizeBytes;
  }

  // rep_factor - computed: true, optional: true, required: false
  private _repFactor?: string; 
  public get repFactor() {
    return this.getStringAttribute('rep_factor');
  }
  public set repFactor(value: string) {
    this._repFactor = value;
  }
  public resetRepFactor() {
    this._repFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repFactorInput() {
    return this._repFactor;
  }

  // rotate_period_in_secs - computed: true, optional: true, required: false
  private _rotatePeriodInSecs?: number; 
  public get rotatePeriodInSecs() {
    return this.getNumberAttribute('rotate_period_in_secs');
  }
  public set rotatePeriodInSecs(value: number) {
    this._rotatePeriodInSecs = value;
  }
  public resetRotatePeriodInSecs() {
    this._rotatePeriodInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatePeriodInSecsInput() {
    return this._rotatePeriodInSecs;
  }

  // service_meta_period - computed: true, optional: true, required: false
  private _serviceMetaPeriod?: number; 
  public get serviceMetaPeriod() {
    return this.getNumberAttribute('service_meta_period');
  }
  public set serviceMetaPeriod(value: number) {
    this._serviceMetaPeriod = value;
  }
  public resetServiceMetaPeriod() {
    this._serviceMetaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetaPeriodInput() {
    return this._serviceMetaPeriod;
  }

  // sync_meta - computed: true, optional: true, required: false
  private _syncMeta?: boolean | cdktf.IResolvable; 
  public get syncMeta() {
    return this.getBooleanAttribute('sync_meta');
  }
  public set syncMeta(value: boolean | cdktf.IResolvable) {
    this._syncMeta = value;
  }
  public resetSyncMeta() {
    this._syncMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMetaInput() {
    return this._syncMeta;
  }

  // thawed_path - computed: true, optional: true, required: false
  private _thawedPath?: string; 
  public get thawedPath() {
    return this.getStringAttribute('thawed_path');
  }
  public set thawedPath(value: string) {
    this._thawedPath = value;
  }
  public resetThawedPath() {
    this._thawedPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thawedPathInput() {
    return this._thawedPath;
  }

  // throttle_check_period - computed: true, optional: true, required: false
  private _throttleCheckPeriod?: number; 
  public get throttleCheckPeriod() {
    return this.getNumberAttribute('throttle_check_period');
  }
  public set throttleCheckPeriod(value: number) {
    this._throttleCheckPeriod = value;
  }
  public resetThrottleCheckPeriod() {
    this._throttleCheckPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleCheckPeriodInput() {
    return this._throttleCheckPeriod;
  }

  // tstats_home_path - computed: true, optional: true, required: false
  private _tstatsHomePath?: string; 
  public get tstatsHomePath() {
    return this.getStringAttribute('tstats_home_path');
  }
  public set tstatsHomePath(value: string) {
    this._tstatsHomePath = value;
  }
  public resetTstatsHomePath() {
    this._tstatsHomePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tstatsHomePathInput() {
    return this._tstatsHomePath;
  }

  // warm_to_cold_script - computed: true, optional: true, required: false
  private _warmToColdScript?: string; 
  public get warmToColdScript() {
    return this.getStringAttribute('warm_to_cold_script');
  }
  public set warmToColdScript(value: string) {
    this._warmToColdScript = value;
  }
  public resetWarmToColdScript() {
    this._warmToColdScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmToColdScriptInput() {
    return this._warmToColdScript;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new IndexesAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: IndexesAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_sign_size: cdktf.numberToTerraform(this._blockSignSize),
      bucket_rebuild_memory_hint: cdktf.stringToTerraform(this._bucketRebuildMemoryHint),
      cold_path: cdktf.stringToTerraform(this._coldPath),
      cold_to_frozen_dir: cdktf.stringToTerraform(this._coldToFrozenDir),
      cold_to_frozen_script: cdktf.stringToTerraform(this._coldToFrozenScript),
      compress_rawdata: cdktf.booleanToTerraform(this._compressRawdata),
      datatype: cdktf.stringToTerraform(this._datatype),
      enable_online_bucket_repair: cdktf.booleanToTerraform(this._enableOnlineBucketRepair),
      frozen_time_period_in_secs: cdktf.numberToTerraform(this._frozenTimePeriodInSecs),
      home_path: cdktf.stringToTerraform(this._homePath),
      id: cdktf.stringToTerraform(this._id),
      max_bloom_backfill_bucket_age: cdktf.stringToTerraform(this._maxBloomBackfillBucketAge),
      max_concurrent_optimizes: cdktf.numberToTerraform(this._maxConcurrentOptimizes),
      max_data_size: cdktf.stringToTerraform(this._maxDataSize),
      max_hot_buckets: cdktf.numberToTerraform(this._maxHotBuckets),
      max_hot_idle_secs: cdktf.numberToTerraform(this._maxHotIdleSecs),
      max_hot_span_secs: cdktf.numberToTerraform(this._maxHotSpanSecs),
      max_mem_mb: cdktf.numberToTerraform(this._maxMemMb),
      max_meta_entries: cdktf.numberToTerraform(this._maxMetaEntries),
      max_time_unreplicated_no_acks: cdktf.numberToTerraform(this._maxTimeUnreplicatedNoAcks),
      max_time_unreplicated_with_acks: cdktf.numberToTerraform(this._maxTimeUnreplicatedWithAcks),
      max_total_data_size_mb: cdktf.numberToTerraform(this._maxTotalDataSizeMb),
      max_warm_db_count: cdktf.numberToTerraform(this._maxWarmDbCount),
      min_raw_file_sync_secs: cdktf.stringToTerraform(this._minRawFileSyncSecs),
      min_stream_group_queue_size: cdktf.numberToTerraform(this._minStreamGroupQueueSize),
      name: cdktf.stringToTerraform(this._name),
      partial_service_meta_period: cdktf.numberToTerraform(this._partialServiceMetaPeriod),
      process_tracker_service_interval: cdktf.numberToTerraform(this._processTrackerServiceInterval),
      quarantine_future_secs: cdktf.numberToTerraform(this._quarantineFutureSecs),
      quarantine_past_secs: cdktf.numberToTerraform(this._quarantinePastSecs),
      raw_chunk_size_bytes: cdktf.numberToTerraform(this._rawChunkSizeBytes),
      rep_factor: cdktf.stringToTerraform(this._repFactor),
      rotate_period_in_secs: cdktf.numberToTerraform(this._rotatePeriodInSecs),
      service_meta_period: cdktf.numberToTerraform(this._serviceMetaPeriod),
      sync_meta: cdktf.booleanToTerraform(this._syncMeta),
      thawed_path: cdktf.stringToTerraform(this._thawedPath),
      throttle_check_period: cdktf.numberToTerraform(this._throttleCheckPeriod),
      tstats_home_path: cdktf.stringToTerraform(this._tstatsHomePath),
      warm_to_cold_script: cdktf.stringToTerraform(this._warmToColdScript),
      acl: indexesAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_sign_size: {
        value: cdktf.numberToHclTerraform(this._blockSignSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bucket_rebuild_memory_hint: {
        value: cdktf.stringToHclTerraform(this._bucketRebuildMemoryHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_path: {
        value: cdktf.stringToHclTerraform(this._coldPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_to_frozen_dir: {
        value: cdktf.stringToHclTerraform(this._coldToFrozenDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_to_frozen_script: {
        value: cdktf.stringToHclTerraform(this._coldToFrozenScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_rawdata: {
        value: cdktf.booleanToHclTerraform(this._compressRawdata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datatype: {
        value: cdktf.stringToHclTerraform(this._datatype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_online_bucket_repair: {
        value: cdktf.booleanToHclTerraform(this._enableOnlineBucketRepair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frozen_time_period_in_secs: {
        value: cdktf.numberToHclTerraform(this._frozenTimePeriodInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      home_path: {
        value: cdktf.stringToHclTerraform(this._homePath),
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
      max_bloom_backfill_bucket_age: {
        value: cdktf.stringToHclTerraform(this._maxBloomBackfillBucketAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_optimizes: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentOptimizes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_data_size: {
        value: cdktf.stringToHclTerraform(this._maxDataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hot_buckets: {
        value: cdktf.numberToHclTerraform(this._maxHotBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hot_idle_secs: {
        value: cdktf.numberToHclTerraform(this._maxHotIdleSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hot_span_secs: {
        value: cdktf.numberToHclTerraform(this._maxHotSpanSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mem_mb: {
        value: cdktf.numberToHclTerraform(this._maxMemMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_meta_entries: {
        value: cdktf.numberToHclTerraform(this._maxMetaEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_time_unreplicated_no_acks: {
        value: cdktf.numberToHclTerraform(this._maxTimeUnreplicatedNoAcks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_time_unreplicated_with_acks: {
        value: cdktf.numberToHclTerraform(this._maxTimeUnreplicatedWithAcks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_total_data_size_mb: {
        value: cdktf.numberToHclTerraform(this._maxTotalDataSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_warm_db_count: {
        value: cdktf.numberToHclTerraform(this._maxWarmDbCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_raw_file_sync_secs: {
        value: cdktf.stringToHclTerraform(this._minRawFileSyncSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_stream_group_queue_size: {
        value: cdktf.numberToHclTerraform(this._minStreamGroupQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_service_meta_period: {
        value: cdktf.numberToHclTerraform(this._partialServiceMetaPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_tracker_service_interval: {
        value: cdktf.numberToHclTerraform(this._processTrackerServiceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quarantine_future_secs: {
        value: cdktf.numberToHclTerraform(this._quarantineFutureSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quarantine_past_secs: {
        value: cdktf.numberToHclTerraform(this._quarantinePastSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raw_chunk_size_bytes: {
        value: cdktf.numberToHclTerraform(this._rawChunkSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rep_factor: {
        value: cdktf.stringToHclTerraform(this._repFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_period_in_secs: {
        value: cdktf.numberToHclTerraform(this._rotatePeriodInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_meta_period: {
        value: cdktf.numberToHclTerraform(this._serviceMetaPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_meta: {
        value: cdktf.booleanToHclTerraform(this._syncMeta),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      thawed_path: {
        value: cdktf.stringToHclTerraform(this._thawedPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle_check_period: {
        value: cdktf.numberToHclTerraform(this._throttleCheckPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tstats_home_path: {
        value: cdktf.stringToHclTerraform(this._tstatsHomePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warm_to_cold_script: {
        value: cdktf.stringToHclTerraform(this._warmToColdScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: indexesAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IndexesAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
