import type { PayloadSize } from '../../../../utils/kafka-load-helper';
import type { NodeOutputSize } from '../../../../utils/kafka-workflow-builder';

export interface ThroughputScenario {
	name: string;
	nodeCount: number;
	messageCount: number;
	payloadSize: PayloadSize;
	nodeOutputSize: NodeOutputSize;
	partitions: number;
	timeoutMs: number;
}

export const THROUGHPUT_SCENARIOS: ThroughputScenario[] = [
	{
		name: '1-node-1KB-1k',
		nodeCount: 1,
		messageCount: 1_000,
		payloadSize: '1KB',
		nodeOutputSize: 'noop',
		partitions: 3,
		timeoutMs: 120_000,
	},
	{
		name: '10-nodes-1KB-5k',
		nodeCount: 10,
		messageCount: 5_000,
		payloadSize: '1KB',
		nodeOutputSize: 'noop',
		partitions: 3,
		timeoutMs: 300_000,
	},
	{
		name: '30-nodes-1KB-5k',
		nodeCount: 30,
		messageCount: 5_000,
		payloadSize: '1KB',
		nodeOutputSize: 'noop',
		partitions: 3,
		timeoutMs: 300_000,
	},
	{
		name: '60-nodes-1KB-5k',
		nodeCount: 60,
		messageCount: 5_000,
		payloadSize: '1KB',
		nodeOutputSize: 'noop',
		partitions: 3,
		timeoutMs: 600_000,
	},
	{
		name: '10-nodes-100KB-noop-5k',
		nodeCount: 10,
		messageCount: 5_000,
		payloadSize: '100KB',
		nodeOutputSize: 'noop',
		partitions: 3,
		timeoutMs: 300_000,
	},
	{
		name: '10-nodes-1KB-10kb-out-5k',
		nodeCount: 10,
		messageCount: 5_000,
		payloadSize: '1KB',
		nodeOutputSize: '10KB',
		partitions: 3,
		timeoutMs: 300_000,
	},
	{
		name: '10-nodes-1KB-100kb-out-5k',
		nodeCount: 10,
		messageCount: 5_000,
		payloadSize: '1KB',
		nodeOutputSize: '100KB',
		partitions: 3,
		timeoutMs: 600_000,
	},
];
